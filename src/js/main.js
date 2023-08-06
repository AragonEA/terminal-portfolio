import { setUpModal } from './modal.js';

function initialize() {
    setUpModal('projects');
    setUpModal('contact');
    setUpModal('about');
}

initialize();


/* window.onclick = function (event) {
    if (event.target.classList == 'modal') {
        event.target.style.display = "none";
    }
} */
