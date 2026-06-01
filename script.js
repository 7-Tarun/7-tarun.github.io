// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check user's previous theme preference from LocalStorage
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on load
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.textContent = '☀️'; // Change icon to sun
}

// Toggle Event Listener
themeToggleBtn.addEventListener('click', () => {
    // Toggle the dark-mode class on body
    body.classList.toggle('dark-mode');
    
    // Check if body now has dark-mode
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️';
        
        // Button click satisfying animation logic (optional micro-interaction)
        themeToggleBtn.style.transform = "rotate(180deg)";
        setTimeout(() => themeToggleBtn.style.transform = "none", 300);
        
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙';
        
        // Button click satisfying animation
        themeToggleBtn.style.transform = "rotate(-180deg)";
        setTimeout(() => themeToggleBtn.style.transform = "none", 300);
    }
});

// Secure Email Injection for Contact
const emailSpan = document.getElementById("secure-email");
if (emailSpan) {
    const user = "contact.tarundev";
    const domain = "gmail.com";
    emailSpan.innerHTML = `<a href="mailto:${user}@${domain}" class="secure-link">${user}@${domain}</a>`;
}