

pageLoad();
$('.nav-bar__showHamburger').click(showMenu);
$('.nav-bar__exitHamburger').click(hideMenu);

function pageLoad() {
 $('.nav-bar__exitHamburger').hide();
 $('.hamburger').hide();
}

function showMenu() {
  $('.hamburger').slideToggle('slow', function() {
  $('.nav-bar__exitHamburger').show();
  $('.nav-bar__showHamburger').hide();
  })
}

function hideMenu() {
  $('.hamburger').slideToggle('slow', function() {
  $('.nav-bar__exitHamburger').hide();
  $('.nav-bar__showHamburger').show();
  })
}