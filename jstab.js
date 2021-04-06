(() => {
  const btns = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () => {
      btns.forEach((btn) => {
        btn.classList.remove('appear');
      });
      
      btns[i].classList.add('appear');

      contents.forEach((content) => {
        content.classList.remove('appear');
      });
      contents[i].classList.add('appear');
    });
  }
})();
