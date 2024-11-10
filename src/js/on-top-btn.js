export function onTopBtn() {
  document.addEventListener('DOMContentLoaded', function () {
    const upBtn = document.querySelector('.up-btn');

    upBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      document.body.classList.add('scrolling');
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        upBtn.classList.add('show');
      } else {
        upBtn.classList.remove('show');
      }

      if (
        document.body.classList.contains('scrolling') &&
        window.scrollY === 0
      ) {
        document.body.classList.remove('scrolling');
      }
    });
  });
}
