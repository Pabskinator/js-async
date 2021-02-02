const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest(); // old data format before json

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                // console.log('could not fetch the data');
                reject('error getting results');
            }
        })

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
        request.send();
    });
}

// // demonstrating async js
// console.log(1);
// console.log(2);
//
// // callback hell - avoid this!
// getTodos( 'todos/pabs.json', (err, data) => {
//     console.log('callback fired');
//
//     getTodos('todos/gab.json', (err, data) => {
//         console.log(data);
//
//         getTodos('todos/ruds.json', (err, data) => {
//             console.log(data);
//         })
//     })
//
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
//
// console.log(3);
// console.log(4);

// **************************************************************************************************************** //

// PROMISES

// basic example of promise
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         resolve('some data');
//         // reject('some error');
//     });
// };

// traditional way
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// other way of writing promises
// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


// then catch - chaining promises
getTodos('todos/pabs.json').then(data => {
    console.log('promise 1 resolved: ', data);
    return getTodos('todos/gab.json');
}).then(data => {
    console.log('promise 2 resolved:', data)
    return getTodos('todos/ruds.json');
}).then(data => {
    console.log('promise 3s resolved:', data)
}).catch(err => {
    console.log('promise rejected: ', err);
})
