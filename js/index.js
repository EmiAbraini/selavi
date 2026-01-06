// src/main.js (o src/index.js)
import "./styles/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


document.addEventListener('DOMContentLoaded', function() {
    const menuCircles = document.querySelectorAll('.menu-circle');

    menuCircles.forEach(menuCircle => {
        menuCircle.addEventListener('click', function() {
            window.location.href = 'menu.html';
        });
    });
});
