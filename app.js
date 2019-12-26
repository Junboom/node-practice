// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// 
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// const express = require('express');
// const app = express();
// 
// app.get('/', (req, res) => {
//   res.send('Hello World!\n');
// });
// 
// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// 
//   require('./models').sequelize.sync({force: true})
//       .then(() => {
//         console.log('Databases sync');
//       });
// });
// 
// app.use('/users', require('./api/user'));
// 
// module.exports = app;


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', require('./api/user'));

module.exports = app;
