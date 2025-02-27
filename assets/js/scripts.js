/**
By Kurama250
Github : github.com/Kurama250
*/

const countdownMessage = document.querySelector(".countdown p");

const messages = [
    "Merci de votre patience !",
    "Nous revenons bientôt !",
    "Restez connecté pour plus d'infos !",
    "Lancement imminent !"
];

let messageIndex = 0;

setInterval(() => {
    countdownMessage.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}, 5000);
