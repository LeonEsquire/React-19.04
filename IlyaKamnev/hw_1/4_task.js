/*
установить axios
$ npm install axios
*/
const axios = require('axios');

let promiseArray = [];

for(let i = 1; i < 10; i++) {
    promiseArray.push(axios.get(`https://jsonplaceholder.typicode.com/users/${i}`)
    .then(response => response.data));
}

Promise.all(promiseArray).then(result => {
    console.log(result);
});