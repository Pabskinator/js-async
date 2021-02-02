// fetch api

// fetch('todos/pabs.json').then(response => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('rejected', err);
// });

// async & await

const getTodos = async () => {
    const response = await fetch('todos/pabs.json');
    return await response.json();
}

getTodos()
    .then(data => console.log('resolved:', data));