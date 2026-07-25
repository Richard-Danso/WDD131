document.addEventListener("DOMContentLoaded", () => {
    // Key used to store counter in localStorage
    const STORAGE_KEY = "numReviewsSubmitted";

    // Get current review count or initialize to 0
    let numReviews = parseInt(localStorage.getItem(STORAGE_KEY)) || 0;

    // Increment count for this successful review submission
    numReviews += 1;

    // Save updated count back to localStorage
    localStorage.setItem(STORAGE_KEY, numReviews);

    // Display the count on the confirmation page
    const counterDisplay = document.getElementById("review-counter");
    if (counterDisplay) {
        counterDisplay.textContent = numReviews;
    }

    // Populate dynamic footer information
    setFooterDates();
});

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