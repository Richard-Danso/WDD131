document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Dates Configuration safely injected
    const yearEl = document.getElementById("currentyear");
    const modEl = document.getElementById("lastModified");
    
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (modEl) modEl.textContent = document.lastModified;

    // 2. Wind Chill Calculation Setup
    const tempCelsius = 5; 
    const windSpeedKmH = 10;

    // Requirement: Single-line calculation function based on Metric standard
    function calculateWindChill(temp, speed) {
        return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
    }

    // Processing and DOM presentation logic
    const windChillElement = document.getElementById("windchill");
    if (windChillElement) {
        // Constraint boundaries: Temperature <= 10 °C and Wind speed > 4.8 km/h
        if (tempCelsius <= 10 && windSpeedKmH > 4.8) {
            const factor = calculateWindChill(tempCelsius, windSpeedKmH);
            windChillElement.textContent = `${factor} °C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }
});