class Person {
  constructor({ id, name, birthdate, email, gender, password }) {
    this.name = name;
    this.birthdate = birthdate;
    this.email = email;
    this.gender = gender;
    this.password = password;
    this.id = id;
  }

  static fromJson(personJson) {
    return new Person({
      ...personJson,
      birthdate: new Date(personJson.birthdate),
    });
  }
};
