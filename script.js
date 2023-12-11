// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScrdocument.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Scroll to top button
const topButton = document.querySelector('.top a');

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Card flip effect for services boxes
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('hover');
    });

    box.addEventListener('mouseleave', () => {
        box.classList.remove('hover');
    });
});

// Image flip effect for about section
const aboutSection = document.querySelector('.about');

aboutSection.addEventListener('mouseenter', () => {
    aboutSection.classList.add('hover');
});

aboutSection.addEventListener('mouseleave', () => {
    aboutSection.classList.remove('hover');
});



// JavaScript to toggle the flip effect for services boxes
// JavaScript for hover effect on the services boxes
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'rotateY(180deg)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'rotateY(0deg)';
    });
});

// JavaScript for hover effect on the about section image
// JavaScript for hover effect with color overlay on the about section image
const aboutImg = document.querySelector('.about-img img');

aboutImg.addEventListener('mouseenter', () => {
    aboutImg.style.transition = '0.3s ease'; // Optional: Add transition effect
    aboutImg.style.filter = 'brightness(70%)'; // Adjust brightness as needed
    aboutImg.style.backgroundColor = 'rgba(5, 180, 255, 0.5)'; // Color overlay with #05b4ff and opacity
});

aboutImg.addEventListener('mouseleave', () => {
    aboutImg.style.filter = 'brightness(100%)'; // Reset brightness
    aboutImg.style.backgroundColor = 'transparent'; // Reset background color
});

