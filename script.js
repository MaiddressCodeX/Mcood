function navigateTo(page) {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = page;
  }, 600);
}


window.onload = () => {
  document.body.classList.add('fade-in');
};
