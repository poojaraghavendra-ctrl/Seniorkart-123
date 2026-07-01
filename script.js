let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = total;
}

function sendWhatsAppOrder() {
  if (cart.length === 0) {
    alert("Please add items to cart first.");
    return;
  }
  const orderText = cart.map((item, index) => `${index + 1}. ${item.name} - ₹${item.price}`).join("%0A");
  const message = `Hello SeniorKart, I want to place this order:%0A%0A${orderText}%0A%0ATotal: ₹${total}`;
  const phoneNumber = "918904328298";
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

document.getElementById("callbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("customerName").value;
  document.getElementById("formStatus").textContent = "Thank you, " + name + ". SeniorKart will call you soon.";
  this.reset();
});
