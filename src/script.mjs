window.addEventListener('DOMContentLoaded', setup);

function setup() {
    const element = document.createElement('h1');
    element.textContent = "Hello World";
    document.body.appendChild(element);
    console.log('building');
}