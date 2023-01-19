/* Código simplório, apenas para fornecer o serviço para a aplicação */
const personList = [];

const api = {
  registryPerson(req, res) {
    const person = req.body;

    if (personList.find(p => p.email === person.email)) {
      res.status(400).json(`Person with email ${person.email} already registered!`);
      return;
    }

    person.id = personList.length + 1;
    personList.push(person);
    console.log("Inserted person", person);

    res.status(201).json(person);
  },

  getAllPerson(req, res) {
    res.json(personList);
  },

  deletePerson(req, res) {
    const id = req.params.id;

    if (personList.length > 0) {
      const removed = personList.splice(id - 1, 1).pop();
      console.log("Removed person", removed);
      res.status(200).json();
    }

    res.status(400).json();
  },
};

module.exports = api;
