document.addEventListener("DOMContentLoaded", () => {
    // Initializing an empty cart
    const cart = [];
    const cartElement = document.querySelector(".nav-cart");
    const searchInput = document.querySelector(".search-input");
    const productBoxes = document.querySelectorAll(".box");

    // Function to update the cart count
    function updateCartCount() {
        const cartCount = cart.length;
        const cartBadge = document.querySelector(".cart-count");
        if (!cartBadge) {
            const badge = document.createElement("span");
            badge.className = "cart-count";
            badge.style.marginLeft = "5px";
            badge.style.color = "orange";
            badge.textContent = cartCount;
            cartElement.appendChild(badge);
        } else {
            cartBadge.textContent = cartCount;
        }
    }

    // Adding event listeners to all product boxes for "Add to Cart" functionality
    productBoxes.forEach((box) => {
        const productTitle = box.querySelector("h2").textContent;
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.style.backgroundColor = "#febd68";
        addToCartButton.style.padding = "10px";
        addToCartButton.style.border = "none";
        addToCartButton.style.cursor = "pointer";
        addToCartButton.style.marginTop = "10px";
        box.querySelector(".box-content").appendChild(addToCartButton);

        // Add to cart functionality
        addToCartButton.addEventListener("click", () => {
            if (!cart.includes(productTitle)) {
                cart.push(productTitle);
                alert(`${productTitle} added to cart!`);
            } else {
                alert(`${productTitle} is already in your cart!`);
            }
            updateCartCount();
        });
    });

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const searchValue = e.target.value.toLowerCase();

        productBoxes.forEach((box) => {
            const productName = box.querySelector("h2").textContent.toLowerCase();
            if (productName.includes(searchValue)) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    });

    // Footer back-to-top functionality
    const backToTop = document.querySelector(".foot-panel1");
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Deliver location toggle (mock functionality)
    const locationElement = document.querySelector(".nav-address");
    locationElement.addEventListener("click", () => {
        const currentLocation = locationElement.querySelector(".add-second").textContent;
        locationElement.querySelector(".add-second").textContent =
            currentLocation === "India" ? "USA" : "India";
    });

    // Mock Cart Click Event
    cartElement.addEventListener("click", () => {
        alert(cart.length > 0 ? `Items in your cart: ${cart.join(", ")}` : "Your cart is empty!");
    });
});
