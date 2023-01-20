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

    if (!res.ok) {
      const message = await res.json();
      throw new Error(message);
    }

    const personJson = await res.json();
    return Person.fromJson(personJson);
  }

  async readAll() {
    const res = await fetch(`${this.baseUrl}/person`, {
      method: "get"
    });
    const peopleJson = await res.json();
    return peopleJson.map(personJson => Person.fromJson(personJson));
  }

  async removeById(personId) {
    const res = await fetch(`${this.baseUrl}/person/${personId}`, {
      method: "delete"
    });

    return res.ok;
  }

  async updateByEmail(personEmail, updatedPerson) {
    const persons = await this.readAll();
    const person = persons.find(p => p.email === personEmail);
    
    if (!person) {
      throw new Error(`Person with email ${personEmail} not found!`)
    }

    const res = await fetch(`${this.baseUrl}/person/${person.id}`, {
      method: "put",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedPerson)
    });
    const updatedPersonJson = await res.json();
    
    return Person.fromJson(updatedPersonJson);
  }
};