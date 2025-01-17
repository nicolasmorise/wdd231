async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        renderMembers(members);
    } catch (error) {
        console.error("Error fetching members data:", error);
    }
}

function renderMembers(members, viewType = 'grid') {
    const container = document.getElementById('members-container');
    container.className = viewType === 'grid' ? 'grid-view' : 'list-view';
    container.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${['Standart', 'Silver', 'Gold'][member.membership - 1]}</p>
        `;

        container.appendChild(memberCard);
    });
}

// Toggle between grid and list views
function setupViewToggle() {
    const gridButton = document.getElementById('grid-view');
    const listButton = document.getElementById('list-view');

    gridButton.addEventListener('click', () => fetchMembersAndRender('grid'));
    listButton.addEventListener('click', () => fetchMembersAndRender('list'));
}

// Fetch members and render in the chosen view
function fetchMembersAndRender(viewType) {
    fetchMembers().then(() => renderMembers(members, viewType));
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    setupViewToggle();

    // Set footer data
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
