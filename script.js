

pageLoad();
$('.header__nav-bar__showHamburger').click(showMenu);
$('.header__nav-bar__exitHamburger').click(hideMenu);

function pageLoad() {
 $('.header__nav-bar__exitHamburger').hide();
 $('.header__hamburger').hide();
}

function showMenu() {
  $('h1').hide();
  $('h2').hide();
  $('.header__hamburger').slideToggle('slow', function() {
  $('.header__nav-bar__exitHamburger').show();
  $('.header__nav-bar__showHamburger').hide();
  })
}

function hideMenu() {
  $('.header__hamburger').slideToggle('slow', function() {
  $('h1').show();
  $('h2').show();
  $('.header__nav-bar__exitHamburger').hide();
  $('.header__nav-bar__showHamburger').show();
  })
}