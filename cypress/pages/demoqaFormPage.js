class DemoqaFormPage {
  elements = {
    firstName: () => cy.get("#firstName"),
    lastName: () => cy.get("#lastName"),
    userEmail: () => cy.get("#userEmail"),
    genderMale: () => cy.get("label[for='gender-radio-1']"),
    genderFemale: () => cy.get("label[for='gender-radio-2']"),
    genderOther: () => cy.get("label[for='gender-radio-3']"),
    userNumber: () => cy.get("#userNumber"),
    inputAddress: () => cy.get("#currentAddress"),

    hobbies: () => cy.get("#hobbiesWrapper > .col-md-9"),
    checkSports: () =>
      cy.get(
        "#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label"
      ),
    checkReading: () =>
      cy.get(
        "#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label"
      ),
    checkMusic: () =>
      cy.get(
        "#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label"
      ),
    selectPictures: () => cy.get("#uploadPicture"),
    subjectAutocomplete: () => cy.get(".subjects-auto-complete__value-container"),
    listAutocomplete: () => cy.get(".subjects-auto-complete__menu-list"),

    userState: () => cy.get("#state > .css-yk16xz-control > .css-1hwfws3"),
    userCity: () => cy.get("#stateCity-wrapper > :nth-child(3)"),
    buttonSubmit: ()=> cy.get("#submit")
  };


  inputPersonalInformation(firstname, lastName, email, number, address) {
    this.inputFirstName(firstname);
    this.inputLastName(lastName);
    this.inputUserEmail(email);
    this.inputNumberUser(number);
    this.inputCurrentAddress(address);
  }
  inputCurrentAddress(direction) {
    this.elements.inputAddress().type(direction);
  }
  inputFirstName(firstName) {
    this.elements.firstName().type(firstName);
  }
  inputLastName(lastName) {
    this.elements.lastName().type(lastName);
  }
  inputUserEmail(email) {
    this.elements.userEmail().type(email);
  }
  inputNumberUser(number) {
    this.elements.userNumber().type(Number(number));
  }
  checkGender(gender) {
    if (gender === "Male") this.elements.genderMale().click();
    else if (gender === "Female") this.elements.genderFemale().click();
    else if (gender === "Other") this.elements.genderOther().click();
    else cy.log("No existe esas opcion");
  }

  checkHobbies(hobbies) {
    const incluyeSports = hobbies.includes("Sports");
    const incluyeReading = hobbies.includes("Reading");
    const incluyeMusic = hobbies.includes("Music");
    if (incluyeSports) this.elements.checkSports().click();
    if (incluyeReading) this.elements.checkReading().click();
    if (incluyeMusic) this.elements.checkMusic().click();
    cy.log(incluyeMusic);
  }
  attachFile(ruta) {
    this.elements.selectPictures().selectFile({
      contents: Cypress.Buffer.from("file contents"),
      fileName: ruta,
      mimeType: "text/plain/png",
      lastModified: Date.now(),
    });
  }

  writeSubject(subject1,subject2){
    this.elements.subjectAutocomplete().type(subject1);
    this.elements.listAutocomplete().contains("Maths").click()
    this.elements.subjectAutocomplete().type(subject2)
    this.elements.listAutocomplete().contains("Computer Science").click()
  }

  selectStateAndCity(state,city){
    this.selectState(state)
    this.selectCity(city)
  }
  selectState(state){
    this.elements.userState().click()
    cy.get(".css-11unzgr").contains(state).click()
  }

  selectCity(city){
    this.elements.userCity().click()
    cy.get(".css-11unzgr").contains(city).click()
  }
  clickSubmit(){
    this.elements.buttonSubmit().click()
  }
}

export default new DemoqaFormPage();
