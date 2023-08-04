
function initialize(){
    setUpModal('projects');
    setUpModal('contact');
    setUpModal('about');
    
}

initialize();

function setUpModal(modalName) {
    const modal = document.querySelector(`#${modalName}Modal`)
    const btn = document.querySelector(`#${modalName}Btn`);
    const span = document.querySelector(`#${modalName}Span`);

    btn.onclick = function () {
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
