/* Dark mode toggle — shared across all pages */
function toggleTheme() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
  localStorage.setItem('theme', dark ? 'light' : 'dark');
  document.querySelectorAll('.theme-toggle').forEach(b => b.textContent = dark ? '🌙' : '☀️');
}

document.addEventListener('DOMContentLoaded', function () {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.querySelectorAll('.theme-toggle').forEach(b => b.textContent = dark ? '☀️' : '🌙');
});
