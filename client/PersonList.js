class PersonList {
  constructor() {
    this._people = [];
  }

  get people() { return this._people; }

  insert(person) {
    this._people.push(person);
  }
};
