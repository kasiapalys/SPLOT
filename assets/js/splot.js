$(document).ready(function(){
  $('.zoom').zoom({
    magnify: 0.2,
  })

  $('.picture').on('click', function() {
    var sciezka = $(this).attr('src') 
    $('.bigPicture').attr('src', sciezka)
  })
});