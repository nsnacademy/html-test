
// Получаем шапку
const header = document.querySelector('.header');

// Добавляем обработчик события для прокрутки
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Когда прокручиваем больше 50px
    header.classList.add('sticky'); // Добавляем класс для затемнения
  } else {
    header.classList.remove('sticky'); // Убираем затемнение
  }
});




const hamb = document.querySelector(".header__burger");
const popup = document.querySelector(".header__nav");
const body = document.body;

hamb.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

popup.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    popup.classList.remove("active");
    hamb.classList.remove("active");
    body.classList.remove("no-scroll");
  }
});

document.addEventListener("click", (e) => {
  if (!hamb.contains(e.target) && !popup.contains(e.target)) {
    popup.classList.remove("active");
    hamb.classList.remove("active");
    body.classList.remove("no-scroll");
  }
});





function testFormat(mime) {
  return new Promise((res) => {
    const img = new Image();
    img.onload = () => res(img.width > 0);
    img.onerror = () => res(false);
    const base64s = {
      avif: "UklGRiIAAABXRUJQVlA4TA0AAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      webp: "UklGRiIAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSAwAAAAQUFBQUFBQUFBQUFBQUFBQUA="
    };
    img.src = `data:image/${mime};base64,${base64s[mime]}`;
  });
}

(async () => {
  if (await testFormat("avif")) {
    document.body.classList.add("has-avif");
  } else if (await testFormat("webp")) {
    document.body.classList.add("has-webp");
  }
})();




