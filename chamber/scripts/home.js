const spotlightContainer = document.getElementById("chamber-list");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Filter only Gold (3) or Silver (2) members
    const eligible = data.filter(member => member.membership === 2 || member.membership === 3);

    // Shuffle array and pick 2 or 3 randomly
    const count = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const spotlights = eligible.sort(() => 0.5 - Math.random()).slice(0, count);

    displaySpotlights(spotlights);
  } catch (error) {
    console.error("Error loading spotlights:", error);
  }
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = ""; // Clear any existing content

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("spotlight");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name} logo" loading="lazy">
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
    `;

    spotlightContainer.appendChild(card);
  });
}

// Run the spotlight loader when the page loads
document.addEventListener("DOMContentLoaded", loadSpotlights);
