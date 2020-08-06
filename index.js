const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Starting the server at ${port}`));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/')

// prepData('https://api.covid19api.com/summary')
// .then(resData => {
//   prepMapChart('#map', resData).then(handleMapUpdate)
// });



// <-------------------------------------  Coding Train

// app.get('/api', (request, response) => {
//   database.find({}, (err, data) => {  // empty braces to find all, callback 
//     if (err) {
//       response.end();
//       return;
//     }
//     response.json(data);
//   }) 
// });

// app.post('/api', (request, response) => {
//   console.log('I got a request!');
//   console.log(request.body);
//   const data = request.body;
//   const timestamp = Date.now();
//   data.timestamp = timestamp;
//   database.insert(data);
//   response.json(data);
// });
// <-------------------------------------  Coding Train

