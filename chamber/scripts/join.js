// Thanks Page
const results = document.querySelector("#results");

if (results) {
  const getinfo = window.location.search;
  const myinfo = new URLSearchParams(getinfo);

  const first = myinfo.get("first") || "User";
  const last = myinfo.get("last") || "";
  const title = myinfo.get("organizationalTitle") || "Your Company";
  const level = myinfo.get("Membership-Level") || "Member";
  const email = myinfo.get("email") || "your email";

  results.innerHTML = `
    <h2>Thanks ${first} ${last} for submitting your company!</h2>
    <p>${title} has been submitted for being a ${level} in the Santo Andre City Chamber.</p>
    <p>We will get in contact with you through ${email} or your phone number!</p>
  `;
}


// Open Modal

async function getData() {
    try{
      const response = await fetch("data/membership.json");
      if (response.ok) {
        const data = await response.json()
        console.table(data)
      } else {
        throw Error(await response.text())
      }
    }
    catch (error) {
      console.log(error)
    }
}

getData();
// Show Membership Details Modal
const dialog = document.getElementById("Membership-details");

function openMembershipModal(membership) {
  dialog.innerHTML = `
    <button id="closeDialog" style="position:absolute;top:1rem;right:1rem;">❌</button>
    <h2>${membership.membership}</h2>
    <p>${membership.description}</p>
  `;
  dialog.showModal();
  dialog.querySelector('#closeDialog').onclick = () => dialog.close();
}

// Attach event listeners to Learn More buttons after DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch("data/membership.json");
    if (response.ok) {
      const data = await response.json();
      // Find all Learn More buttons and attach listeners
      const buttons = document.querySelectorAll('.level-card button');
      buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => openMembershipModal(data[idx]));
      });
    }
  } catch (error) {
    console.log(error);
  }
});