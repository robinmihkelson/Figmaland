function checkScreenWidth() {
  if (window.innerWidth > 640 && window.location.pathname !== '/index.html') {
    window.location.href = '/index.html';
  } else if (window.innerWidth <= 640 && window.location.pathname !== '/mobile.html') {
    window.location.href = '/mobile.html';
  }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);