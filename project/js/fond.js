/*global $, alert, console */

$(function (){
  'use strict';


  // Adjust Header Height
  var myHeader = $('header');
  myHeader.height($(window).height());
  $(window).resize(function (){
    myHeader.height($(window).height());
    
    // Window .Height
    $('header .title').each(function () {

      $(this).css('paddingTop', ($(window).height() - $('header .title').height() + $('.navbar').height()) / 2 );
  
    }); 

    
  });

  // Window .Height
  $('header .title').each(function () {

    $(this).css('paddingTop', ($(window).height() - $('header .title').height() + $('.navbar').height()) / 2 );

  });

  // Link Active
  $('.navbar .navbar-nav .nav-item').on('click', function () {

    $(this).addClass('active').siblings().removeClass('active');
  });

  //

  $('.navbar .nav-link').on('click', function () {

    $('html, body').animate({

      scrollTop: $('#' + $(this).data('value')).offset().top

    }, 1000);

  });

  //

  // Scroll 
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $('nav').addClass('fxtop');
    } else {
      $('nav').removeClass('fxtop');
    }
  });


  // loading Site 
  $(window).on('load', function () {
    $('.loading .spinner').fadeOut(),
    $('.loading').fadeOut(),
    $('body').css("overflow", "auto");

  });
  


});
