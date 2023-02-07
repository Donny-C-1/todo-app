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
        console.log(e.target[0]);
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
        querySelector('template[data-id="task-item"]').
        content.
        children[0].
        cloneNode(true);
    element.getElementsByClassName('title')[0].textContent = obj.description;
    element.getElementsByClassName('date')[0].textContent = obj.creationDate;
    element.getElementsByClassName('priority')[0].textContent = 'average';
    taskList.append(element);
}