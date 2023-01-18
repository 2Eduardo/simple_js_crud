const DateHelper = {
  dateToString(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  },

  isAdult(birthdate, adultAge = 18) {
    const inAge = new Date(
      birthdate.getFullYear() + adultAge,
      birthdate.getMonth(),
      birthdate.getDate()
    );
    return inAge < Date.now();
  }
}
