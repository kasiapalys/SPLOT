$(document).ready(function(){
  $('.zoom').zoom({
    magnify: 0.2,
    touch: false,
  })

  $('.picture').on('click', function() {
    var sciezka = $(this).attr('src') 
    $('.bigPicture').attr('src', sciezka)
  })

    var name = $('.productName').text()
    $('.inputSize').attr('value', name)
  
});