$(function(){"use strict";var i=$("header");i.height($(window).height()),$(window).resize(function(){i.height($(window).height()),$("header .title").each(function(){$(this).css("paddingTop",($(window).height()-$("header .title").height()+$(".navbar").height())/2)})}),$("header .title").each(function(){$(this).css("paddingTop",($(window).height()-$("header .title").height()+$(".navbar").height())/2)}),$(".navbar .navbar-nav .nav-item").on("click",function(){$(this).addClass("active").siblings().removeClass("active")}),$(".navbar .nav-link").on("click",function(){$("html, body").animate({scrollTop:$("#"+$(this).data("value")).offset().top},1e3)}),$(window).scroll(function(){$(window).scrollTop()>$(window).height()?$("nav").addClass("fxtop"):$("nav").removeClass("fxtop")}),$(window).on("load",function(){$(".loading .spinner").fadeOut(function(){$(this).parent().fadeOut(function(){$("body").css("overflow","auto")})})})});