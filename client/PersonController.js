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
  
  async deletePerson(person) {
    this.personList.remove(person);
    this.personListView.update(this.personList);
    await this.personService.remove(person);
  }

  async init() {
    const people = await this.personService.readAll();
    
    people.forEach(person => {
      this.personList.insert(person);
    });

    this.personListView.update(this.personList);
  }

  orderBy(personProperty) {
    this.personList.people.sort((person1, person2) => {
      if (person1[personProperty] > person2[personProperty]) {
        return 1;
      } else if (person1[personProperty] === person2[personProperty]) {
        return 0;
      } else {
        return -1;
      }
    });
  }
};
