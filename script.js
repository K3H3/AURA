// Statements für jede Woche (z.B. 52 Statements für ein Jahr)
const statements = [
    "I wish there were more colourful spots in Aspern Seestadt.",
    "Public transport should be free for everyone.",
    "There should be more green spaces in cities.",
    "AI will positively change the world.",
    "We should focus more on renewable energy."
];

// Funktion zur Auswahl des Statements basierend auf der aktuellen Woche
function getWeeklyStatement() {
    const weekNumber = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000));
    return statements[weekNumber % statements.length];
}

// Wrap initialization in a try-catch block for error handling
try {
    const statementElement = document.getElementById("statement");
    if (!statementElement) {
        console.error("Error: Element with ID 'statement' not found.");
    } else {
        statementElement.textContent = getWeeklyStatement();
    }
} catch (error) {
    console.error("An error occurred during initialization:", error);
}

// Add event listener error handling
const slider = document.getElementById("slider");
if (slider) {
    slider.addEventListener("input", function () {
        const sliderValueElement = document.getElementById("slider-value");
        if (sliderValueElement) {
            sliderValueElement.textContent = this.value;
        } else {
            console.error("Error: Element with ID 'slider-value' not found.");
        }
    });
} else {
    console.error("Error: Element with ID 'slider' not found.");
}

// Löscht alle Eingaben
function clearInputs() {
    try {
        const slider = document.getElementById("slider");
        const sliderValue = document.getElementById("slider-value");
        const customText = document.getElementById("custom-text");

        if (slider && sliderValue && customText) {
            slider.value = 50;
            sliderValue.textContent = "50";
            customText.value = "";
        } else {
            console.error("Error: One or more elements for clearing inputs not found.");
        }
    } catch (error) {
        console.error("An error occurred in clearInputs:", error);
    }
}

// Simulierte API-Submission (ersetzbar mit einem echten API-Call)
function submitAnswer() {
    try {
        const sliderValue = document.getElementById("slider")?.value;
        const customText = document.getElementById("custom-text")?.value;

        if (sliderValue !== undefined && customText !== undefined) {
            console.log("Submitted Data:", { sliderValue, customText });
            alert("Your answer has been submitted!");
        } else {
            console.error("Error: One or more elements for submission not found.");
        }
    } catch (error) {
        console.error("An error occurred in submitAnswer:", error);
    }
}
