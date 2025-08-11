// Create modal HTML
document.body.insertAdjacentHTML("beforeend", `
  <div id="modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
    background:rgba(0,0,0,0.5); justify-content:center; align-items:center; z-index:1000;">
    <div style="background:white; padding:20px; max-width:500px; width:90%; border-radius:10px; position:relative;">
      <span id="modal-close" style="position:absolute; top:10px; right:15px; font-size:20px; cursor:pointer;">&times;</span>
      <h2 id="modal-title"></h2>
      <p id="modal-desc"></p>
    </div>
  </div>
`);

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalClose = document.getElementById("modal-close");

modalClose.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

async function loadCatalog() {
  try {
    const res = await fetch('./data.json');
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const products = await res.json();

    const container = document.getElementById('catalog-products');
    container.innerHTML = '';

    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.style.animationDelay = `${index * 0.1}s`;

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Type: ${product.type}</p>
        <button class="learn-more">Learn More</button>
      `;

      card.querySelector(".learn-more").addEventListener("click", () => {
        modalTitle.textContent = product.name;
        modalDesc.textContent = product.description;
        modal.style.display = "flex";
      });

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading catalog:', error);
  }
}

loadCatalog();
