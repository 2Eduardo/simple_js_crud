const service = {
  isAdult(birthdate, adultAge = 18) {
    const inAge = new Date(
      birthdate.getFullYear() + adultAge,
      birthdate.getMonth(),
      birthdate.getDate()
    );
    return inAge < Date.now();
  }
}
