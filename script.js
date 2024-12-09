/* script.js */

const categories = [
    { name: "Health & Social Services", details: "Healthcare, social security, welfare programs." },
    { name: "Defense & Security", details: "Military, homeland security, defense-related services." },
    { name: "Education & Innovation", details: "Education, research, technology development." },
    { name: "Environment & Energy", details: "Renewable energy, conservation, climate action." },
    { name: "Infrastructure", details: "Transportation, housing, urban development." },
    { name: "Governance & Miscellaneous", details: "Treasury, debt repayment, diplomacy." },
];

let percentages = Array(categories.length).fill(0); // Percentage per slot
let totalCoins = 0;
const maxCoins = 20; // 20 coins = 100%

// Initialize Slots
function initializeSlots() {
    const slotsContainer = document.querySelector(".coin-slots");
    slotsContainer.innerHTML = ""; // Clear slots
    categories.forEach((category, index) => {
        const slot = document.createElement("div");
        slot.className = "slot";
        slot.dataset.index = index;

        const percentageDisplay = document.createElement("div");
        percentageDisplay.className = "percentage";
        percentageDisplay.id = `percentage-${index}`;
        percentageDisplay.textContent = "0%";

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.onclick = () => alert(`${category.name}: ${category.details}`);

        slot.appendChild(percentageDisplay);
        slot.appendChild(detailsButton);
        slot.onclick = () => addCoin(index);
        slotsContainer.appendChild(slot);
    });
}

// Add Coin
function addCoin(index) {
    if (totalCoins < maxCoins) {
        percentages[index] += 5;
        totalCoins++;
        document.getElementById(`percentage-${index}`).textContent = `${percentages[index]}%`;
    }
}

// Spin the Machine
function spinMachine() {
    if (totalCoins === maxCoins) {
        const results = {
            environment: randomOutcome(["Stable climate", "+2°C", "+3°C"]),
            society: randomOutcome(["Universal healthcare", "Moderate healthcare", "Healthcare crises"]),
            economy: randomOutcome(["Green economy", "Economic stability", "Economic collapse"]),
        };

        document.getElementById("result-environment").textContent = `Environment: ${results.environment}`;
        document.getElementById("result-society").textContent = `Society: ${results.society}`;
        document.getElementById("result-economy").textContent = `Economy: ${results.economy}`;
    } else {
        alert("Please allocate all coins before spinning!");
    }
}

// Generate Random Outcome
function randomOutcome(options) {
    return options[Math.floor(Math.random() * options.length)];
}

// Initialize Slots on Load
document.addEventListener("DOMContentLoaded", initializeSlots);
