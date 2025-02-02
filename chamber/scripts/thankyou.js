const urlParams = new URLSearchParams(window.location.search);
document.getElementById('first-name').textContent = urlParams.get('first-name');
document.getElementById('last-name').textContent = urlParams.get('last-name');
document.getElementById('email').textContent = urlParams.get('email');
document.getElementById('phone').textContent = urlParams.get('phone');
document.getElementById('organization').textContent = urlParams.get('organization');
document.getElementById('timestamp').textContent = urlParams.get('timestamp');