const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const plejehjemOutput = document.querySelector("#plejehjem_output");
const adresseOutput = document.querySelector("#adresse_output")
const termsOutput = document.querySelector("#terms_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form)
  const firstName = formData.get("first_name")
  const lastName = formData.get("last_name")
  const plejehjem = formData.get("plejehjem")
 const adresse = formData.get("adresse")
  const terms = formData.get("accept_terms")
  // 2. Vis værdierne i de rigtige output-felter

firstNameOutput.textContent = firstName
lastNameOutput.textContent = lastName
plejehjemOutput.textContent = plejehjem
adresseOutput.textContent = adresse
termsOutput.textContent = terms

  form.reset();
}

form.addEventListener('invalid', cancelPopup, true);
form.addEventListener('submit', handleSubmit);
