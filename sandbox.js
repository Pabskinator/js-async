const getTodos = (callback) => {
    const request = new XMLHttpRequest(); // old data format before json

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            // console.log('could not fetch the data');
            callback('could not fetch data', undefined);
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

// demonstrating async js

console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);

