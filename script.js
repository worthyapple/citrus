// Timer functionality
function updateTimer() {
    const now = new Date();
    const eventDate = new Date('2025-01-01T00:00:00');
    const diff = eventDate - now;

    if (diff < 0) {
        document.getElementById('days').textContent = 0;
        document.getElementById('hours').textContent = 0;
        document.getElementById('minutes').textContent = 0;
        document.getElementById('seconds').textContent = 0;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Heart popup functionality
let heartClicked = false;

function openPopup() {
    if (heartClicked) return;
    heartClicked = true;
    
    const popup = document.getElementById('popup');
    const heart = document.querySelector('.heart');
    
    popup.style.display = 'flex';
    createSparkles();
    heart.style.opacity = '0';
    
    setTimeout(() => {
        closePopup();
    }, 2000);
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    removeSparkles();
}

function createSparkles() {
    const popup = document.querySelector('.popup');
    for (let i = 0; i < 100; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 0.5}s`;
        popup.appendChild(sparkle);
    }
}

function removeSparkles() {
    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach(sparkle => sparkle.remove());
}

// Initialize timer
document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateTimer, 1000);
    updateTimer();
});
