$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.fill').toggleClass('fill-active');
  $('.sidebar-menu').toggleClass('sidebar-menu-show');
});

$('.fill').on('click', function() {
  $('.menu-btn').toggleClass('menu-btn_active');
  $('.fill').toggleClass('fill-active');
  $('.sidebar-menu').toggleClass('sidebar-menu-show');
});