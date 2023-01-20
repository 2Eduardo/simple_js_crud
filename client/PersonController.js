class PersonController {
  constructor() {
    this.personList = new PersonList();
    this.personListView = new PersonListView(
      document.getElementById("people-table"));
    this.personListView.update(this.personList);
    this.personService = new PersonService();
  }

  async registryPerson(inputData) {
    const person = Person.fromJson(inputData);

    if (!DateHelper.isAdult(person.birthdate)) {
      throw new Error("Must be in age.");
    }

    const persistedPerson = await this.personService.save(person);
    this.personList.insert(persistedPerson);
    this.personListView.update(this.personList);
  }

  async deletePerson(personId) {
    await this.personService.removeById(personId);
    this.personList.remove(parseInt(personId));
    this.personListView.update(this.personList);
  }

  async updatePerson(inputData) {
    const person = Person.fromJson(inputData);
    const updatedPerson = await this.personService
      .updateByEmail(person.email, person);

    this.personList.update(updatedPerson.id, updatedPerson);
    this.personListView.update(this.personList);
  }

  async init() {
    const people = await this.personService.readAll();

    people
      .map(p => Person.fromJson(p))
      .forEach(person => {
        this.personList.insert(person);
      });

    this.personListView.update(this.personList);
  }
};
