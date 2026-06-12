// ==================== NAVBAR ==================== //
const navbarHTML = `
<nav class="navbar navbar-expand-lg sticky-top" id="mainNav">
  <div class="container">

    <a class="navbar-brand" href="home.html">
      <span class="brand-name">Pastel</span><span class="brand-dot">Shop</span>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="toggler-icon">☰</span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto align-items-center gap-2">
        <li class="nav-item">
          <a class="nav-link" href="home.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="shop.html">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cart-nav-btn" href="cart.html">
            🛒 Cart <span class="cart-badge" id="cart-count">0</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</nav>
`;

document.addEventListener("DOMContentLoaded", function () {
  // Inject navbar
  const existingNav = document.querySelector("nav, header nav");
  document.body.insertAdjacentHTML("afterbegin", navbarHTML);

  // Highlight active page
  const links = document.querySelectorAll("#mainNav .nav-link");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active-link");
    }
  });
});

// ==================== FOOTER ==================== //
const footerHTML = `
<footer class="footer mt-5">
  <div class="container py-5">
    <div class="row g-4">

      <div class="col-lg-4 col-md-6">
        <h4 class="footer-title">Pastel Shop 🌸</h4>
        <p class="footer-desc">Your go-to destination for soft, elegant, and affordable accessories. Crafted with love for modern girls.</p>
        <div class="footer-social-links mt-3">
          <a href="mailto:nayabnaeem.tech@gmail.com" class="footer-social-btn">
            <i class="bi bi-envelope-fill"></i>
          </a>
          <a href="https://github.com/Nayab-Naeem" target="_blank" class="footer-social-btn">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nayabnaeemcs" target="_blank" class="footer-social-btn">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>

      <div class="col-lg-2 col-md-6">
        <h5 class="footer-heading">Quick Links</h5>
        <ul class="footer-list">
          <li><a href="home.html"><i class="bi bi-chevron-right"></i> Home</a></li>
          <li><a href="shop.html"><i class="bi bi-chevron-right"></i> Shop</a></li>
          <li><a href="cart.html"><i class="bi bi-chevron-right"></i> Cart</a></li>
          <li><a href="about.html"><i class="bi bi-chevron-right"></i> About</a></li>
          <li><a href="contact.html"><i class="bi bi-chevron-right"></i> Contact</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6">
        <h5 class="footer-heading">Categories</h5>
        <ul class="footer-list">
          <li><a href="shop.html"><i class="bi bi-chevron-right"></i> Hair Accessories</a></li>
          <li><a href="shop.html"><i class="bi bi-chevron-right"></i> Jewellery</a></li>
          <li><a href="shop.html"><i class="bi bi-chevron-right"></i> Earrings</a></li>
          <li><a href="shop.html"><i class="bi bi-chevron-right"></i> Bracelets</a></li>
          <li><a href="shop.html"><i class="bi bi-chevron-right"></i> Necklaces</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6">
        <h5 class="footer-heading">Contact Us</h5>
        <ul class="footer-contact-list">
          <li><i class="bi bi-geo-alt-fill"></i> Gujranwala, Pakistan</li>
          <li><a href="mailto:nayabnaeem.tech@gmail.com"><i class="bi bi-envelope-fill"></i> nayabnaeem.tech@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/nayabnaeemcs" target="_blank"><i class="bi bi-linkedin"></i> linkedin.com/in/nayabnaeemcs</a></li>
        </ul>
      </div>

    </div>

    <hr class="footer-divider mt-4">

    <div class="row align-items-center">
      <div class="col-md-6 text-center text-md-start">
        <p class="footer-copy mb-0">© 2026 Pastel Boutique. All rights reserved.</p>
      </div>
      <div class="col-md-6 text-center text-md-end">
        <p class="footer-copy mb-0">Built with <span class="footer-heart">♥</span> using HTML, CSS & JavaScript</p>
      </div>
    </div>

  </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", function () {
  const existing = document.querySelector("footer");
  if (existing) existing.remove();
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});

// ==================== SHOP FILTERS & SEARCH ==================== //
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sortSelect");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");
const productsGrid = document.getElementById("productsGrid");

let activeFilter = "all";

function getPrice(card) {
  const priceText = card.querySelector("p").textContent;
  return parseFloat(priceText.replace("$", ""));
}

function getName(card) {
  return card.querySelector("h2").textContent.toLowerCase();
}

function filterAndSearch() {
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const sortValue = sortSelect ? sortSelect.value : "default";
  const cards = Array.from(document.querySelectorAll(".product-card"));
  let visible = 0;

  // Filter first
  const visibleCards = cards.filter(card => {
    const name = card.dataset.name || "";
    const category = card.dataset.category || "";
    const matchesSearch = query === "" || name.includes(query);
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Sort visible cards
  const sorted = [...visibleCards].sort((a, b) => {
    if (sortValue === "low-high") return getPrice(a) - getPrice(b);
    if (sortValue === "high-low") return getPrice(b) - getPrice(a);
    if (sortValue === "name-az") return getName(a).localeCompare(getName(b));
    return 0;
  });

  // Hide all first
  cards.forEach(card => card.style.display = "none");

  // Show sorted visible ones
  sorted.forEach(card => {
    card.style.display = "flex";
    productsGrid.appendChild(card);
    visible++;
  });

  if (resultsCount) {
    resultsCount.textContent = `Showing ${visible} product${visible !== 1 ? "s" : ""}`;
  }

  if (noResults) {
    noResults.style.display = visible === 0 ? "block" : "none";
  }

  if (productsGrid) {
    productsGrid.style.display = visible === 0 ? "none" : "grid";
  }
}

// Filter buttons
if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      filterAndSearch();
    });
  });
}

// Sort
if (sortSelect) {
  sortSelect.addEventListener("change", filterAndSearch);
}

// Real time search
if (searchInput) {
  searchInput.addEventListener("input", filterAndSearch);
  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      filterAndSearch();
    });
  }
}
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
  
  // Toast message update
const toastMessage = document.getElementById("toast-message");
toastMessage.textContent = `✅ ${name} added to cart!`;

// Show toast using Bootstrap
const toastElement = document.getElementById("cartToast");
const toast = new bootstrap.Toast(toastElement);
toast.show();


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

// ==================== STATS COUNTER ==================== //
function animateStats() {
  const statNums = document.querySelectorAll('.stat-num');
  statNums.forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = target / 60;
    const iv = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.round(current) + '+';
      if (current >= target) clearInterval(iv);
    }, 30);
  });
}

// Run stats animation when section is visible
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(statsSection);
}

// About page stats
const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.about-stat-num').forEach(el => {
          const target = parseInt(el.dataset.target);
          let current = 0;
          const step = target / 60;
          const iv = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.round(current) + '+';
            if (current >= target) clearInterval(iv);
          }, 30);
        });
        aboutObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  aboutObserver.observe(aboutStats);
}
