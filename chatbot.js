const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Send user message to the server
sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        appendMessage('user', message);

        // Make a POST request to the server
        fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
        })
        .then(response => response.json())
        .then(data => {
            appendMessage('bot', data.response);
        })
        .catch(() => {
            appendMessage('bot', 'Error: Unable to connect to the server.');
        });

        userInput.value = '';
    }
});

// Append messages to the chat log
function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}

            