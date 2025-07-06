const lastModified = document.lastModified;
const currentYear = new Date().getFullYear();
const copyrightSymbol = '\u00A9';

document.getElementById('last-modified').textContent = `Last Modified: ${lastModified}`;
document.getElementById('copyright').textContent = `${copyrightSymbol} ${currentYear}`;
