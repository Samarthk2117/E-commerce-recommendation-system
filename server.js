const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON requests (for chatbot)
app.use(express.json());

// Chatbot endpoint
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;

    // Simple chatbot responses
    let botResponse;
    if (userMessage.toLowerCase().includes('hello')) {
        botResponse = 'Hi there! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('products')) {
        botResponse = 'We offer a variety of electronics. Check out our products page!';
    } else {
        botResponse = 'I’m sorry, I don’t understand that. Can you try rephrasing?';
    }

    res.json({ response: botResponse });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
