
function initialize(){
    setUpModal('projects');
    setUpModal('contact');
    setUpModal('about');
    
}

initialize();


function logEvent(name){
const $logs = document.querySelector('#logs');
const container = document.createElement('article');

const consoleUser = document.createElement('span');
consoleUser.classList = 'console-user';
consoleUser.textContent = '[visitor@linux-host ~]$';

const logSpan = document.createElement('span')
logSpan.classList = 'console-text';
logSpan.textContent = ` modal -r ./${name}.txt`

container.appendChild(consoleUser);
container.appendChild(logSpan);
$logs.appendChild(container);
}


function setUpModal(modalName) {
    const modal = document.querySelector(`#${modalName}Modal`)
    const btn = document.querySelector(`#${modalName}Btn`);
    const span = document.querySelector(`#${modalName}Span`);

    btn.onclick = function () {
        logEvent(modalName);
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }

}

window.onclick = function (event) {
    if (event.target.classList == 'modal') {
        event.target.style.display = "none";
    }
}


// Cursor Animation
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
