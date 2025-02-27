/**
By Kurama250
Github : github.com/Kurama250
*/

const countdownMessage = document.querySelector(".countdown p");

const messages = [
    "Thank you for your patience !",
    "We'll be back soon !",
    "Stay tuned for more updates !",
    "Launching soon !""
];

let messageIndex = 0;

setInterval(() => {
    countdownMessage.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}, 5000);
