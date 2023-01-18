class Person {
  constructor({ name, birthdate }) {
    this._name = name;
    this._birthdate = birthdate;
  }

  get birthdate() { return this._birthdate; }
  get name() { return this._name; }
};
