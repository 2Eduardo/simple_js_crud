/* Código simplório, apenas para fornecer o serviço para a aplicação */
const personList = [];

function make_person(requestBody) {
  return {
    ...requestBody,
    birthdate: new Date(requestBody.birthdate)
  };
}

const api = {
  registryPerson(req, res) {
    const person = req.body;
    console.log(person);
    personList.push(person);
    res.status(201).json(person);
  },

  getAllPerson(req, res) {
    res.json(personList);
  }
};

module.exports = api;
