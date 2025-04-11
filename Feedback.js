
const canvas = document.getElementById('grid-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let offsetY = 0;
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#00ff88';
  ctx.lineWidth = 0.4;

  for (let x = 0; x <= canvas.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = -40; y <= canvas.height + 40; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y + offsetY);
    ctx.lineTo(canvas.width, y + offsetY);
    ctx.stroke();
  }

  offsetY += 0.5;
  if (offsetY >= 40) offsetY = 0;

  requestAnimationFrame(drawGrid);
}

drawGrid();

// Cursor block follows mouse
const cursor = document.querySelector('.cursor-trail');
document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY - 20}px`;
  cursor.style.left = `${e.clientX - 20}px`;
});

// Play sound & message on submit
const form = document.getElementById('feedback-form');
const feedbackMsg = document.getElementById('feedback-msg');
const glitchSound = document.getElementById('glitch-sound');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  glitchSound.play();
  feedbackMsg.textContent = "Feedback submitted. Thank you!";
  form.reset();
});

