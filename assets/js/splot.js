$(document).ready(function(){
  $('.zoom').zoom({
    magnify: 0.5,
    touch: false,
  })

  $('.picture').on('click', function() {
    var sciezka = $(this).attr('src') 
    $('.bigPicture').attr('src', sciezka)
  })

  var name = $('.productName').text()
  $('.inputSize').attr('value', name)

     // Initialize the plugin http://dev.vast.com/jquery-popup-overlay/
  $('#my_popup').popup({
    autoopen: true,
  })
  
  $('.popupMain .popupClose,.popupGrey').on('click', function() {
    $('.popupLayout').fadeOut(1000)
  })
});