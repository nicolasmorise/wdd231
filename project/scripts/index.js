// Display Products

function getRandomProducts(data, count) {
  return [...data].sort(() => Math.random() - 0.5).slice(0, count);
}

function displayProducts(products) {
  const container = document.getElementById('top-products');
  container.innerHTML = '';

  const top3 = getRandomProducts(products, 3);
  top3.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Type: ${product.type}</p>
    `;
    container.appendChild(card);
  });
}

async function loadProducts() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

loadProducts();
