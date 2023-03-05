const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (event) => {
    let tabsCurrent = event.target.parentElement.children;
    for (let t = 0; t < tabsCurrent.length; t++) {
      tabsCurrent[t].classList.remove("tab--active");
    }
    event.target.classList.add("tab--active");
  });


  tabs[i].addEventListener("click", (event) => {
    let contentsCurrent = event.target.parentElement.nextElementSibling.children;
    for (let c = 0; c < contentsCurrent.length; c++) {
      contentsCurrent[c].classList.remove("content--active");
    }
    contents[i].classList.add("content--active");
  });
}
const events = document.querySelector('.event--active')
const eventsCont = document.getElementById('evcontent')
const evButton = document.getElementById('eventButton');
const evBuy = document.querySelector('.event__buy');
const payment = document.querySelector('.payment')
const evButtonClose = document.getElementById('evButtonClose');

evButton.addEventListener('click', () =>{
  events.classList.remove('event--active');
  eventsCont.style.display = "none";
  evBuy.classList.add('event__buy--active')
  payment.classList.add('payment--active')
})
evButtonClose.addEventListener('click', () =>{
  events.classList.add('event--active');
  eventsCont.style.display = "block";
  evBuy.classList.remove('event__buy--active')
  payment.classList.remove('payment--active')
})
const paymodal = document.getElementById('paymentmodal');
const pay = document.getElementById('pay');
const payClose = document.querySelector('.close');
pay.onclick = function(){
  paymodal.style.display = 'block'
}
payClose.onclick = function(){
  paymodal.style.display = 'none'
}
window.onclick = function(event) {
  if (event.target == paymodal) {
    paymodal.style.display = "none";
  }
}




























var cinemaHall1 = {
  row: [10, 20, 30, 30, 30, 30, 30, 30, 30, 30, 30]
},
cinemaHallMap = '';
$.each(cinemaHall1.row, function(row, numberOfSeats) {
cinemaHallRow = '';
for (i = 1; i <= numberOfSeats; i++) {
  cinemaHallRow += '<div class="seat" data-row="' +
    i + '" data-seat="' +
    i + '">&nbsp;</div>';
}
cinemaHallMap += cinemaHallRow + '<div class="passageBetween">&nbsp;</div>';
});

$('.zal1').html(cinemaHallMap);
$('.seat').on('click', function(e) {
$(e.currentTarget).toggleClass('bay');
showBaySeat();
});

function showBaySeat() {
result = '';
$.each($('.seat.bay'), function(key, item) {
  result += '<div class="ticket">Ряд: ' +
    $(item).data().row + ' Место:' +
    $(item).data().seat + '</div>';
});

$('.result').html(result);
}