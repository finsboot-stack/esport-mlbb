function navigateTo(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Efek glow tambahan pada load
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.animation = 'glow 2s infinite alternate';
});
