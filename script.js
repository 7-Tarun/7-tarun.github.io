// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check user's previous theme preference from LocalStorage
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on load
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeIcon) {
        themeIcon.textContent = '☀️';
    }
}

// Toggle Event Listener
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            if (themeIcon) {
                themeIcon.textContent = '☀️';
            }
            themeToggleBtn.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                themeToggleBtn.style.transform = 'none';
            }, 300);
        } else {
            localStorage.setItem('theme', 'light');
            if (themeIcon) {
                themeIcon.textContent = '🌙';
            }
            themeToggleBtn.style.transform = 'rotate(-180deg)';
            setTimeout(() => {
                themeToggleBtn.style.transform = 'none';
            }, 300);
        }
    });
}

// Secure Email Injection for Contact
const emailSpan = document.getElementById('secure-email');
if (emailSpan) {
    const user = 'contact.tarundev';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;

    const link = document.createElement('a');
    link.href = `mailto:${email}`;
    link.className = 'secure-link';
    link.textContent = email;

    emailSpan.replaceChildren(link);
}