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

  updatePerson(req, res) {
    const index = personList.findIndex(p => {
      return p.id === parseInt(req.params.id)
    });

    if (index == -1) {
      res.status(404).json("Person not found");
      return;
    }

    const newPerson = {
      ...personList[index],
      ...req.body,
    };

    if (personList.find(p =>
      p.email === newPerson.email && p.id !== newPerson.id)
    ) {
      res.status(400).json(`Person with email ${req.body.email} already registered!`);
      return;
    }

    personList[index] = newPerson;
    res.status(200).json(newPerson);
  }
};

module.exports = api;
