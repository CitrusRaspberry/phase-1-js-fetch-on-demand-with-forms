const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');


    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(data => showResults(data));

  })
}

function showResults(data) {
  const title = document.querySelector("section#movieDetails h4");
  const summary = document.querySelector("section#movieDetails p");

  console.log(data.title, data.summary);

  title.textContent = data.title;
  summary.textContent = data.summary;
}

document.addEventListener('DOMContentLoaded', init);
