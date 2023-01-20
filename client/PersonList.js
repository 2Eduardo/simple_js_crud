class PersonList {
  constructor() {
    this._people = [];
  }

  get people() { return this._people; }

  insert(person) {
    this._people.push(person);
  }

  remove(personId) {
    const indexToRemove = this._people.findIndex(p => p.id === personId);
    if (indexToRemove > -1) {
      this._people.splice(indexToRemove, 1).pop();
    }
  }

  update(personId, newPerson) {
    const personIndex = this._people.findIndex(p => p.id === personId);
    
    if (personIndex < 0) {
      throw new Error(`Person with id ${personId} not found`);
    }

    this._people[personIndex] = newPerson;
  }
};
