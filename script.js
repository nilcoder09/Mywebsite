document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.getElementById("chat-container");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function () {
        const userMessage = userInput.value;

        if (userMessage.trim() !== "") {
            // Display user message
            displayMessage(userMessage, "user");

            // Simulate server response (in this case, send an email)
            simulateServerResponse(userMessage);

            // Clear input
            userInput.value = "";
        }
    });

    function displayMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.className = sender === "user" ? "user-message" : "bot-message";
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);

        // Scroll to the bottom to show the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function simulateServerResponse(userMessage) {
        // Simulate sending an email
        const botMessage = `Your message "${userMessage}" has been sent!`;
        displayMessage(botMessage, "bot");
    }
});
