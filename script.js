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

    // Close the mobile menu if open
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        document.getElementById('close-menu').style.display = 'none'; // Hide close button
        document.getElementById('hamburger').style.display = 'block'; // Show hamburger button
    }
}

// Hamburger menu toggle (for mobile view)
document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
    document.getElementById('close-menu').style.display = 'block'; // Show close button
    this.style.display = 'none'; // Hide hamburger button
});

// Close menu button functionality
document.getElementById('close-menu').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('open');
    this.style.display = 'none'; // Hide close button
    document.getElementById('hamburger').style.display = 'block'; // Show hamburger button
});
