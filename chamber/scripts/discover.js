document.addEventListener('DOMContentLoaded', () => {
  // Load JSON
  fetch('data/discover.json')
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector('.discover-grid');
      data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('discover-card');
        card.innerHTML = `
          <h2>${item.name}</h2>
          <figure>
            <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>
        `;
        container.appendChild(card);
      });
    });

  // Visit tracking
  const message = document.getElementById('visitor-message');
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();

  if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (days < 1) {
      message.textContent = "Back so soon! Awesome!";
    } else {
      message.textContent = `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
    }
  }

  localStorage.setItem('lastVisit', now);
});
