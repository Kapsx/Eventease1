window.onload = () => {
    // Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX - 12}px`;
      cursor.style.top = `${e.clientY - 12}px`;
    });
  
    // Particle Background
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let particlesArray = [];
    for (let i = 0; i < 80; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
      });
    }
  
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      particlesArray.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  
    // Submitted Notification
    const form = document.querySelector('form');
    const alertBox = document.getElementById('submissionAlert');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      alertBox.classList.add('show');
      setTimeout(() => {
        alertBox.classList.remove('show');
      }, 3000);
  
      form.reset();
    });
  };
  