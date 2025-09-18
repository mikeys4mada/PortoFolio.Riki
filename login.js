const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");
const backToLoginBtn = document.getElementById("backToLoginBtn");
const errorMsg = document.getElementById("errorMsg");
const regErrorMsg = document.getElementById("regErrorMsg");

// Add focus/blur effects to inputs
const inputs = document.querySelectorAll('.login-container input');
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focused');
  });
  input.addEventListener('blur', () => {
    input.parentElement.classList.remove('focused');
  });
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    themeIcon.textContent = '🌙';
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    themeIcon.textContent = '☀️';
  }
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

// Initialize theme on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
});

function showLogin() {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  errorMsg.textContent = "";
  errorMsg.classList.remove("show");
  regErrorMsg.textContent = "";
  regErrorMsg.classList.remove("show");
}

function showRegister() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  errorMsg.textContent = "";
  errorMsg.classList.remove("show");
  regErrorMsg.textContent = "";
  regErrorMsg.classList.remove("show");
}

registerBtn.addEventListener("click", () => {
  // Add fade out/in animation for smooth transition
  const loginContainer = document.querySelector('.login-container');
  loginContainer.classList.add('hide');
  setTimeout(() => {
    showRegister();
    loginContainer.classList.remove('hide');
  }, 500);
});

backToLoginBtn.addEventListener("click", () => {
  // Add fade out/in animation for smooth transition
  const loginContainer = document.querySelector('.login-container');
  loginContainer.classList.add('hide');
  setTimeout(() => {
    showLogin();
    loginContainer.classList.remove('hide');
  }, 500);
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "portofolio.html";
  } else {
    errorMsg.textContent = "Username atau password salah!";
    errorMsg.classList.add("show");
  }
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const regUsername = document.getElementById("regUsername").value.trim();
  const regPassword = document.getElementById("regPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (regPassword !== confirmPassword) {
    regErrorMsg.textContent = "Password dan konfirmasi password tidak cocok!";
    regErrorMsg.classList.add("show");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some(u => u.username === regUsername)) {
    regErrorMsg.textContent = "Username sudah digunakan!";
    regErrorMsg.classList.add("show");
    return;
  }

  users.push({ username: regUsername, password: regPassword });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registrasi berhasil! Silakan login.");
  showLogin();
});

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = 2 + Math.random() * 3 + "s";
  star.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 7000);
}

function createStars(num) {
  for (let i = 0; i < num; i++) {
    createStar();
  }
}

window.addEventListener("load", () => {
  createStars(100);

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.length === 0) {
    users.push({ username: "siswa", password: "rpl123" });
    localStorage.setItem("users", JSON.stringify(users));
  }
});

setInterval(() => {
  createStar();
}, 300);
