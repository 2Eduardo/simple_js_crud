/* Código simplório, apenas para fornecer o serviço para a aplicação */
const http = require('http');
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

app.set('clientPath', path.join(__dirname, '../..', 'client'));
console.log(app.get('clientPath'));

app.use(express.static(app.get('clientPath')));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

http.createServer(app).listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
});
