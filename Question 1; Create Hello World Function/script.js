// Toggle between light and dark blue mode
const toggleBtn = document.querySelector('#themeToggle');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Toggle icon classes
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');

    // Toggle inner text
    if (document.body.classList.contains('dark')) {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
});
