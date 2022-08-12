// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let search=document.querySelector(".search");
let body=document.querySelector('body');
search.addEventListener("click", function (e) {
   e.stopPropagation();
   search.classList.add('searchOpen');
});
body.addEventListener("click", function(e) {
   search.classList.remove('searchOpen');
});

const picker = datepicker('[data-calendar]', {
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString();
    input.value = value; // => '1/1/2099'
  }
});


  const priceRange = document.querySelector('.range-block');
	priceRange.addEventListener('click', function(e) {
		e.stopPropagation();
		priceRange.classList.add("_range-open");
	});
	body.addEventListener('click', function(e) {
		priceRange.classList.remove("_range-open");
	});


/* let start = Date.now(); // запомнить время начала
let timePassed = Date.now() - start;
let timeLine = document.querySelector("slider-controll__timeline"); */
//let buttonLeft = document.querySelector("swiper-button-prev");

/* buttonLeft.addEventListener('click', function(e){
   clearInterval(timer);
}) */
/* let timer = setInterval(function() {
  // сколько времени прошло с начала анимации?
  let timePassed = Date.now() - start;

  if (timePassed >= 3500) {
    clearInterval(timer); // закончить анимацию через 2 секунды
    return;
  }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);

}, 20); */

// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px

/* function load(timePassed) {
  timeLine.style.width = timePassed / 14 + 'px';
}
load(); */