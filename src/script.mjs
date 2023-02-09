import Storage from "./storage.mjs";

window.addEventListener('DOMContentLoaded', setup);

function setup() {
    Storage.connect();
    navigation();
    taskPage();
}

function navigation() {
    let prevActiveLink = document.querySelector('aside nav a');
    let currentPage = document.getElementById('tasks');

    document.
        querySelectorAll("aside nav a").
        forEach(link => link.addEventListener('click', function (e) {
            e.preventDefault();

            prevActiveLink.classList.remove('active');
            this.classList.add('active');
            prevActiveLink = this;
            document.querySelector("aside nav").style.setProperty("--top", `${this.offsetTop}px`);

            currentPage.classList.remove('active');
            currentPage = document.getElementById(this.getAttribute('href'));
            currentPage.classList.add('active');

            document.querySelector('main header h1').textContent = this.getAttribute('href');
        }));
}

function loadTasks() {
    dispTask();
    return true;
}

function taskPage() {
    const form = document.querySelector('#tasks form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        const taskData = Storage.create(formProps.description);
        dispTask(taskData);

        Array.from(e.target).forEach(input => input.value = null);
    })

    // loadTasks();
}

function dispTask(obj) {
    const taskList = document.getElementsByClassName('task-list')[0];
    const element = document.
        querySelector('template[data-name="task-item"]').
        content.
        cloneNode(true);

    element.querySelector('.description').textContent = obj.description;
    element.querySelector('.date').textContent = obj.creationDate.toLocaleString('en-US', {month: 'short', day: 'numeric'});
    element.querySelector('.project-category').textContent = obj.projectName || 'General';

    taskList.append(element);
}