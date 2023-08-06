
export function setUpModal(modalName) {
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

function logEvent(name) {
    const $logs = document.querySelector('#logs');
    const container = document.createElement('article');

    const consoleUser = document.createElement('span');
    consoleUser.classList = 'console-user';
    consoleUser.textContent = '[visitor@linux-host ~]$';

    const logSpan = document.createElement('span')
    logSpan.classList = 'console-text';
    logSpan.textContent = ` modal -r ./${name}`

    container.appendChild(consoleUser);
    container.appendChild(logSpan);
    $logs.appendChild(container);
}

window.onclick = function (event) {
    if (event.target.classList == 'modal') {
        event.target.style.display = "none";
    }
}

