const $ = document.querySelector.bind(document);
const personController = new PersonController();

(async() => {
  await personController.init();
})();

function getInputData() {
  return ({
    name: $("#in-name").value,
    birthdate: $("#in-birthdate").value,
    email: $("#in-email").value,
    gender: $("input[name=gender]:checked").value,
    password: $("#in-password").value,
  });
}

function registryPerson(event) {
  event.preventDefault();
  personController.registryPerson(getInputData());
}
