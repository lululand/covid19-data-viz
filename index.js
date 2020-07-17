// let key = '9faecf21-a17b-44b8-9038-2aad4c0a773f';

const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));



// prepData('https://api.covid19api.com/summary')
// .then(resData => {
//   prepMapChart('#map', resData).then(handleMapUpdate)
// })