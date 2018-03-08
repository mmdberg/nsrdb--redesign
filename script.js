$('.content-container').hover(function(){
    $('div').toggleClass('show').toggleClass('hide');
    return false;
});

// $('.content-container').click(function(){
//     $('div').toggleClass('show').toggleClass('hide');
//     return false;
// });




$('#what-is__toggle').click(readWhatIsToggle);
function readWhatIsToggle() {
  var elem = $('#what-is__toggle').text();
  if(elem === "Read More"){
    $('#what-is__toggle').text("Read Less");
    $('#read-more-text__what-is').slideDown()
    $('.main__what-is').css('height', '487px')
  } else {
    $('#what-is__toggle').text("Read More");
    $('#read-more-text__what-is').slideUp()
    $('.main__what-is').css('height', '340px')
  }
}

$('#sunshot__toggle').click(readSunshotToggle);
function readSunshotToggle() {
  var elem = $('#sunshot__toggle').text();
  if(elem === "Read More"){
    $('#sunshot__toggle').text("Read Less");
    $('#read-more-text__sunshot').slideDown()
    $('.main__sunshot').css('height', '445px')
  } else {
    $('#sunshot__toggle').text("Read More");
    $('#read-more-text__sunshot').slideUp()
    $('.main__sunshot').css('height', '270px')
  }
}


// pageLoad();
// $('.header__nav-bar__showHamburger').click(showMenu);
// $('.header__nav-bar__exitHamburger').click(hideMenu);

// function pageLoad() {
//  $('.header__nav-bar__exitHamburger').hide();
//  $('.header__hamburger').hide();
// }

// function showMenu() {
//   $('h1').hide();
//   $('h2').hide();
//   $('.header__hamburger').slideToggle('slow', function() {
//   $('.header__nav-bar__exitHamburger').show();
//   $('.header__nav-bar__showHamburger').hide();
//   })
// }

// function hideMenu() {
//   $('.header__hamburger').slideToggle('slow', function() {
//   $('h1').show();
//   $('h2').show();
//   $('.header__nav-bar__exitHamburger').hide();
//   $('.header__nav-bar__showHamburger').show();
//   })
// }