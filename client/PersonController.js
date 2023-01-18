class PersonController {
  constructor() {
    this.personList = new PersonList();
    this.personListView = new PersonListView(
      document.getElementById("people-table"));
    this.personListView.update(this.personList);
    this.personService = new PersonService();
  }

  async registryPerson(inputData) {
    const person = new Person({
      ...inputData,
      birthdate: new Date(inputData.birthdate)
    });

    if (!DateHelper.isAdult(person.birthdate)) {
      throw new Error("Must be in age.");
    }

    await this.personService.save(person);
    this.personList.insert(person);
    this.personListView.update(this.personList);
  }

  async init() {
    const people = await this.personService.readAll();
    people.forEach(person => {
      this.personList.insert(person);
    });
    this.personListView.update(this.personList);
  }
};
