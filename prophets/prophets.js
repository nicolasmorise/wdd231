const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const date_of_birth = document.createElement('p');
    const place_of_birth = document.createElement('p');
    const portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Protrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('widht', '340');
    portrait.setAttribute('height', '440');

    date_of_birth.textContent = `Date of brith: ${prophet.birthdate}`;

    place_of_birth.textContent = `Birth Place: ${prophet.birthplace}`;

    card.appendChild(fullName);
    card.appendChild(date_of_birth);
    card.appendChild(place_of_birth);
    card.appendChild(portrait);

    cards.appendChild(card);

  });
}
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets)
    displayProphets(data.prophets)
}

getProphetData();


