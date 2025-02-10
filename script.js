

// Play birthday song when button is clicked
const playMusicBtn = document.getElementById("play-music-btn");
const birthdaySong = document.getElementById("birthday-song");

playMusicBtn.addEventListener("click", () => {
    birthdaySong.play();
    playMusicBtn.innerText = "Playing 🎶";
});

// Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];

// Create confetti particles with reduced speed and smoother animation
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (8 - 4) + 4, // Smaller size for smoother effect
            color: `hsl(${Math.random() * 360}, ${Math.random() * 50 + 50}%, ${Math.random() * 30 + 40}%)`,
            dx: Math.random() * 1.5 - 0.75, // Reduced horizontal speed
            dy: Math.random() * 1.5 - 0.75, // Reduced vertical speed
        });
    }
}

// Draw and animate confetti particles
function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiParticles.forEach((particle, index) => {
        ctx.fillStyle = particle.color;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update particle position with reduced speed
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Reset particles that go out of bounds to create a continuous effect
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
            confettiParticles[index] = {
                x: Math.random() * canvas.width,
                y: -10, // Start at the top of the screen
                size: Math.random() * (8 - 4) + 4,
                color: `hsl(${Math.random() * 360}, ${Math.random() * 50 + 50}%, ${Math.random() * 30 + 40}%)`,
                dx: Math.random() * 1.5 - 0.75,
                dy: Math.random() * 1.5 + 0.5, // Slight downward movement
            };
        }
    });

    requestAnimationFrame(drawConfetti);
}

// Start the confetti animation
createConfetti();
drawConfetti();

// Resize canvas when window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
