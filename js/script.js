'use strict';

$('.speaker__video-container').click(function() {
  if (!$('.speaker__video-container iframe').length) {
    $(this).append(
      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/aKaH46P3rys?enablejsapi=1&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    );
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
