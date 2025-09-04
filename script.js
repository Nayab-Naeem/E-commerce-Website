const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartContainer = document.getElementById("cart-items");

    if (cartItems.length === 0) {
      cartContainer.innerHTML = '<div class="empty-message">Your cart is empty 😔</div>';
    } else {
      cartItems.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.textContent = `• ${item}`;
        cartContainer.appendChild(div);
      });
    }