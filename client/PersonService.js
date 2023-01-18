class PersonService {
  constructor() {
    this.baseUrl = "http://localhost:3000";
  }

  async save(person) {
    const res = await fetch(`${this.baseUrl}/person`, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(person)
    });
    return new Person(res.json());
  }

  async readAll() {
    const res = await fetch(`${this.baseUrl}/person`, {
      method: "get"
    });
    const peopleJson = await res.json();

    return peopleJson.map(personJson => {
      return new Person({
        ...personJson,
        birthdate: new Date(personJson.birthdate)
      });
    });
  }
};