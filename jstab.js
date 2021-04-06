(() => {
  const btns = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () => {
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });

      btns[i].classList.add('active');

      contents.forEach((content) => {
        content.classList.remove('active');
      });
      contents[i].classList.add('active');
    });
  }
})();
