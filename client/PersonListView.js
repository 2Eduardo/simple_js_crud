class PersonListView {
  constructor(element) {
    this._element = element;
  }

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th onclick="negociacaoController.ordena('data')">NAME</th>
            <th onclick="negociacaoController.ordena('quantidade')">BIRTHDATE</th>
            <th onclick="negociacaoController.ordena('valor')">EMAIL</th>
            <th onclick="negociacaoController.ordena('volume')">GENDER</th>
          </tr>
        </thead>
          <tbody>
            ${model.people.map(person => `
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
