$(function () {
    $(document).scroll(function () {
      var $nav = $("#mainNav");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });


  });

  $('.navbar-nav li a').on('click', function () {
    if (!$(this).hasClass('dropdown-toggle')) {
      $('.navbar-collapse').collapse('hide');
    }
  });