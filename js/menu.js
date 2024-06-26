document.addEventListener('DOMContentLoaded', function() {
  const customCursor = document.getElementById('custom-cursor');

  document.addEventListener('mousemove', function(e) {
      customCursor.style.left = e.pageX + 'px';
      customCursor.style.top = e.pageY + 'px';
  });

  document.addEventListener('mouseover', function(e) {
      if (e.target.tagName === 'A' || e.target.closest('a')) {
          customCursor.classList.add('pointer');
      } else {
          customCursor.classList.remove('pointer');
      }
  });
});

