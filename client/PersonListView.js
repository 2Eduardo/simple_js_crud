class PersonListView {
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>BIRTHDATE</th>
            <th>EMAIL</th>
            <th>GENDER</th>
          </tr>
        </thead>
          <tbody>
          ${model.people.map(person => `
            <tr>
              <td><input type="button" onclick="personController.deletePerson('${person.id}')" value="X" /></td>
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
