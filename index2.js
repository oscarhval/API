function searchCharacter() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const apiUrl = `https://rickandmortyapi.com/api/character/?name=${input}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        displayResult(data.results[0]);
      } else {
        displayResultError();
      }
    })
    .catch(error => {
      displayResultError();
    });
}

function displayResult(character) {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="${character.name}">
    <p>Status: ${character.status}</p>
    <p>Species: ${character.species}</p>
    <p>Gender: ${character.gender}</p>
  `;

}

function displayResultError() {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = '<p>Personaje no encontrado. Porfavor intentalo otra vez.</p>';
}

  