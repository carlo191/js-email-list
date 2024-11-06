// RACCOLTA DATI

const emailsList = document.getElementById("email-list");

const creaSingolaEmail = () => {
  return fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => response.json())
    .then((data) => data.response);
};

// Array   10 email
const emailsArray = [];
for (let i = 0; i < 10; i++) {
  emailsArray.push(creaSingolaEmail());
}

Promise.all(emailsArray).then((emails) => {
  emails.forEach((email) => {
    const listItem = document.createElement("li");
    listItem.textContent = email;
    emailsList.appendChild(listItem);
  });
});
