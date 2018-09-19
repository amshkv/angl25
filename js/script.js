'use strict';

$('.speaker__video-container').click(function() {
  if (!$('.speaker__video-container iframe').length) {
    $(this).append(
      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/aKaH46P3rys?enablejsapi=1&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    );
  }
});

$('.js-phone').mask('+7 (999) 999-99-99');

timer();

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function timer() {
  var nowDate = new Date();
  var achiveDate = new Date(2018, 8, 25, 20, 0, 0); //Задаем дату, к которой будет осуществляться обратный отсчет
  var result = achiveDate - nowDate + 1000;
  if (result < 0) {
    return undefined;
  }
  var seconds = Math.floor((result / 1000) % 60);
  var minutes = Math.floor((result / 1000 / 60) % 60);
  var hours = Math.floor((result / 1000 / 60 / 60) % 24);
  var days = Math.floor(result / 1000 / 60 / 60 / 24);
  if (seconds < 10) seconds = '0' + seconds;
  if (minutes < 10) minutes = '0' + minutes;
  if (hours < 10) hours = '0' + hours;

  $('.time__item--day .time__item-number').text(days);
  $('.time__item--hour .time__item-number').text(hours);
  $('.time__item--minutes .time__item-number').text(minutes);
  $('.time__item--seconds .time__item-number').text(seconds);

  $('.time__item--day .time__item-text').text(
    declText(days, ['день', 'дня', 'дней'])
  );
  $('.time__item--hour .time__item-text').text(
    declText(hours, ['час', 'часа', 'часов'])
  );
  $('.time__item--minutes .time__item-text').text(
    declText(minutes, ['минута', 'минуты', 'минут'])
  );
  $('.time__item--seconds .time__item-text').text(
    declText(seconds, ['секунда', 'секунды', 'секунд'])
  );

  setTimeout(timer, 1000);
}

function declText(number, titles) {
  var cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
