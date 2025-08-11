const results = document.querySelector("#results");

if (results) {
  const params = new URLSearchParams(window.location.search);

  const name = params.get("name") || "Customer";
  const product = params.get("product") || "our products";
  const phone = params.get("phone") || "your phone number";
  const email = params.get("email") || "your email";

  results.innerHTML = `
    <h2>Thanks ${name} for placing your order!</h2>
    <p>We’ve received your request for <strong>${product}</strong>.</p>
    <p>We will contact you soon via <strong>${phone}</strong> or <strong>${email}</strong>.</p>
  `;
}