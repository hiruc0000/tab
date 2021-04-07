(() => {
  const btns = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () => {
      //全てのボタンからクラス除去後クリックしたボタンにクラス付与
      removeClass(btns);
      btns[i].classList.add('active');

      //全てのタブコンテンツからクラス除去
      //押されたボタンに対応するコンテンツにクラス付与
      removeClass(contents);
      contents[i].classList.add('active');
    });
  }
})();

function removeClass(elements) {
  elements.forEach((element) => {
    element.classList.remove('active');
  });
}
