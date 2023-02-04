window.addEventListener('DOMContentLoaded', setup);

function setup() {
    navigation();
}

function navigation() {
    const links = document.querySelectorAll("aside nav a");
    const nav = document.querySelector("aside nav")
    let prevActiveLink;
    links.forEach(link => link.addEventListener('click', function(e) {
        e.preventDefault();
        prevActiveLink && prevActiveLink.classList.remove('active');
        this.classList.add('active');
        prevActiveLink = this;
        nav.style.setProperty("--top", `${this.offsetTop}px`);
        console.log(this.getAttribute('href'));
    }));
}