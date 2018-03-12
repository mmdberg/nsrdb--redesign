$('.nav__drop-down__button').click(showDropDown)

function showDropDown() {
  $('.nav__drop-down__content').toggleClass('show');
  $('.nav__drop-down__button').toggleClass('cancel')

}
