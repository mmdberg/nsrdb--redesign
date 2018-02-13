

pageLoad();
$('.showHamburger').click(showMenu);
$('.exitHamburger').click(hideMenu);

function pageLoad() {
 $('.exitHamburger').hide();
 $('.hamburger').hide();
}

function showMenu() {
  $('.hamburger').slideToggle('slow', function() {
  $('.exitHamburger').show();
  $('.showHamburger').hide();
  })
}

function hideMenu() {
  $('.hamburger').slideToggle('slow', function() {
  $('.exitHamburger').hide();
  $('.showHamburger').show();
  })
}