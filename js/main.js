// RACCOLTA DATI
const emailsList = document.getElementById("email-list");

const creaSingolaEmail = () => {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data.response);
    });
};

const emails = [];
for (let i = 0; i < 10; i++) {
  emails.push(creaSingolaEmail());
}
