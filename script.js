// Function to show a specific section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}

// Hamburger menu toggle (for mobile view)
document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
});
