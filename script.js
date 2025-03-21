const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

document.getElementById("ledForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = document.getElementById("value").value;
    const message = document.getElementById("message").value;

    await fetch("https://deinehomepage.com/api/set_led", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, value, message })
    });

    alert("Gespeichert!");
});