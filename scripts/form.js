// Product Array Source Data
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-select");

    // Populate option elements dynamically using array data
    products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id; // Product ID is assigned to value attribute
        
        // Capitalize product names for display
        option.textContent = capitalizeString(product.name);
        
        productSelect.appendChild(option);
    });

    // Populate dynamic footer information
    setFooterDates();
});

// Helper function to capitalize title case strings
function capitalizeString(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Dynamic Footer Date logic
function setFooterDates() {
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedPara = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
    }
}