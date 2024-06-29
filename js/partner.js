document.addEventListener('DOMContentLoaded', function() {
  const menuCircles = document.querySelectorAll('.menu-circle');

  menuCircles.forEach(menuCircle => {
      menuCircle.addEventListener('click', function() {
          window.location.href = 'menu.html';
      });
  });
});
