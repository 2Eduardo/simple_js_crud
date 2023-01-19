/* Código simplório, apenas para fornecer o serviço para a aplicação */
const api = require('./api');

module.exports = function (app) {
  app.route('/person')
    .post(api.registryPerson);

  app.route('/person')
    .get(api.getAllPerson);

  app.route('/person/:id')
    .delete(api.deletePerson);
};