document.getElementById('timestamp').value = new Date().toISOString();

// Modal functionality
const modals = document.querySelectorAll('.modal');
const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalButtons = document.querySelectorAll('.close-modal');

openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = button.getAttribute('href');
        document.querySelector(modalId).style.display = 'flex';
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modals.forEach(modal => modal.style.display = 'none');
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modals.forEach(modal => modal.style.display = 'none');
    }
});