const navSlide = () => {
    const mobile_nav = document.querySelector('.mobile_nav');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    mobile_nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        console.log("hi");


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation `navLinkFade 0.5s ease forwards ${index/7+1.5}s`;
            }
        });
    });
}
const main = () => {
    navSlide();
}