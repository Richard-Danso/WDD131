// Data Array of Objects
const products = [
    {
        id: "p1",
        name: "Ergonomic Mechanical Keyboard",
        category: "Keyboards",
        price: 129.99,
        image: "https://picsum.photos/400/300?keyboard",
        description: "Split layout with tactile switches to reduce strain during long typing sessions."
    },
    {
        id: "p2",
        name: "27-Inch 4K Ergonomic Monitor",
        category: "Monitors",
        price: 299.99,
        image: "https://picsum.photos/400/300?monitor",
        description: "High resolution, flicker-free panel with full height and tilt adjustment."
    },
    {
        id: "p3",
        name: "Vertical Wireless Mouse",
        category: "Accessories",
        price: 49.99,
        image: "https://picsum.photos/400/300?mouse",
        description: "Promotes a neutral handshake wrist posture to minimize RSI."
    },
    {
        id: "p4",
        name: "Dual Monitor Desk Arm",
        category: "Monitors",
        price: 79.99,
        image: "https://picsum.photos/400/300?desk",
        description: "Heavy-duty gas spring arm to reclaim desk space."
    }
];

// Requirement 1: Multiple Functions & DOM Manipulation
function renderProducts(productList, targetElementId) {
    const container = document.getElementById(targetElementId);
    if (!container) return;

    container.innerHTML = "";

    // Requirement 4: Array methods (.forEach) & Template Literals (using backticks)
    productList.forEach(item => {
        const cardHTML = `
            <article class="card">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <h3>${item.name}</h3>
                <p><strong>Category:</strong> ${item.category}</p>
                <p>${item.description}</p>
                <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

// Requirement 3: Conditional Branching & Array Filtering
function setupFilter() {
    const filterSelect = document.getElementById("category-filter");
    if (!filterSelect) return;

    filterSelect.addEventListener("change", (e) => {
        const selectedCategory = e.target.value;
        let filteredItems;

        if (selectedCategory === "all") {
            filteredItems = products;
        } else {
            // Requirement 4: Array method (.filter)
            filteredItems = products.filter(product => product.category === selectedCategory);
        }

        renderProducts(filteredItems, "catalog-grid");
    });
}

// Requirement 6: LocalStorage Usage
function handleVisitCount() {
    const counterElement = document.getElementById("visit-counter");
    if (!counterElement) return;

    let visits = Number(localStorage.getItem("techGear_visits")) || 0;
    visits += 1;
    localStorage.setItem("techGear_visits", visits);

    // Requirement 5: Exclusive Template Literals
    counterElement.textContent = `Welcome back! You have visited this site ${visits} times.`;
}

function handleFormSubmission() {
    const contactForm = document.getElementById("contact-form");
    const feedbackMsg = document.getElementById("form-feedback");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("name").value;

        // Save last user submission in localStorage
        localStorage.setItem("lastContactUser", nameInput);

        // Display feedback with template literals
        feedbackMsg.textContent = `Thank you, ${nameInput}! Your message has been sent successfully.`;
        feedbackMsg.style.color = "#10b981";
        contactForm.reset();
    });
}

function setCopyrightYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Event Listener on Load
document.addEventListener("DOMContentLoaded", () => {
    setCopyrightYear();
    handleVisitCount();

    // Render Home Featured Items
    if (document.getElementById("featured-grid")) {
        renderProducts(products.slice(0, 2), "featured-grid");
    }

    // Render Catalog Items & Setup Filter
    if (document.getElementById("catalog-grid")) {
        renderProducts(products, "catalog-grid");
        setupFilter();
    }

    handleFormSubmission();
});