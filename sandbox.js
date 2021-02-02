const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest(); // old data format before json

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            // console.log('could not fetch the data');
            callback('could not fetch data', undefined);
        }
    })

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.open('GET', resource);
    request.send();
}

// demonstrating async js

console.log(1);
console.log(2);

getTodos( 'todos/pabs.json', (err, data) => {
    console.log('callback fired');

    getTodos('todos/gab.json', (err, data) => {
        console.log(data);

        getTodos('todos/ruds.json', (err, data) => {
            console.log(data);
        })
    })

    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);

