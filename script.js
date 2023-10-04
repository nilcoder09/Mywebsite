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

            // Simulate server response (in this case, open email client)
            sendEmail(userMessage);

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

    function sendEmail(userMessage) {
        // Specify the email address you want to send the email to
        const emailAddress = "your.email@example.com";

        // Create a mailto link with subject and body
        const mailtoLink = `mailto:${emailAddress}?subject=New Chat Message&body=${encodeURIComponent(
            userMessage
        )}`;

        // Open the user's default email client with the mailto link
        window.location.href = mailtoLink;
    }
});
