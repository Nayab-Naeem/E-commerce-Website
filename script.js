// ==================== CART SYSTEM ==================== //

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update cart count (for top-right cart badge)
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) cartCountEl.textContent = count;
}

// Add item to cart
function addToCart(name, price, event) {
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  saveCart();
  updateCartCount();

  // Change button text temporarily
  if (event) {
    const button = event.target;
    button.textContent = "Added!";
    button.disabled = true;
    button.style.backgroundColor = "#ccc";

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.disabled = false;
      button.style.backgroundColor = "#660066";
    }, 1000);
  }
}

// Render cart items on Cart Page
function renderCart() {
  const container = document.getElementById("cart-items");
  if (!container) return; // Only run on cart.html

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-message">Your cart is empty 🛒</p>`;
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");
   div.innerHTML = `
  
  <div class="cart-item-left">
    <strong>${item.name}</strong>
  </div>
  <div class="cart-item-middle">
    $${item.price.toFixed(2)}
    <button onclick="changeQuantity(${index}, -1)" class="icon-btn">
      <i class="bi bi-dash-circle"></i>
    </button>
    <span class="quantity">${item.quantity}</span>
    <button onclick="changeQuantity(${index}, 1)" class="icon-btn">
      <i class="bi bi-plus-circle"></i>
    </button>
  </div>
  <div class="cart-item-right">
    = $${itemTotal.toFixed(2)}
    <button onclick="removeItem(${index})" class="icon-btn remove-btn">
      <i class="bi bi-trash"></i>
    </button>
  </div>
`;

  
    container.appendChild(div);
  });

  // Add total price
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("cart-total");
  totalDiv.innerHTML = `<h2>Total: $${total.toFixed(2)}</h2>`;
  container.appendChild(totalDiv);
}

// Change item quantity
function changeQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  saveCart();
  renderCart();
  updateCartCount();
}

// Remove item completely
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
  updateCartCount();
}

// Run when page loads
window.onload = () => {
  updateCartCount();
  renderCart();
};

// ==================== NAVBAR TOGGLE ==================== //
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
