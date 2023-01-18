class PersonList {
  constructor() {
    this._people = [];
  }

  get people() { return this.people; }

  insert(person) {
    this._people.push(person);
  }
}
