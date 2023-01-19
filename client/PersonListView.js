class PersonListView {
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th onclick="personController.sortBy('name')">NAME</th>
            <th onclick="personController.sortBy('birthdate')">BIRTHDATE</th>
            <th onclick="personController.sortBy('email')">EMAIL</th>
            <th onclick="personController.sortBy('gender')">GENDER</th>
          </tr>
        </thead>
          <tbody>
          ${model.people.map(person => `
                <button onclick="personController.deletePerson(${person})>X</button>
                <tr>
                  <td>${person.name}</td>
                  <td>${DateHelper.dateToString(person.birthdate)}</td>
                  <td>${person.email}</td>
                  <td>${person.gender}</td>
                </tr>`).join('')}
          </tbody>
      </table>
    `;
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
};
