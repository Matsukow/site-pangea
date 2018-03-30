  window.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector('.nav.hamburguer')
      .addEventListener('click', function() { 
        document.querySelector('.nav.menu').classList.toggle('aberto');
      }, false);
  }, false);

  var vid = document.getElementById("video_target");

  function enableMute(){
    vid.muted == true ? vid.muted = false : vid.muted = true; 
  }

    vid.addEventListener('ended', function(e) {
        $('video').animate({opacity: '0'}, 2500);
        $('.speaker').css({'display' : 'none'});
        $('.single-capa').css({'box-shadow' : '10px 10px 5px #000'});
    })

  $(window).ready(function(){

    $('.speaker').click(function(){
      enableMute();
    });

    if ($(window).width() <= 750) {
    } else if ($(window).width() > 750) {
      vid.autoplay = true;
    }

      $('#speaker').click(function(e) {
      e.preventDefault();

      $(this).toggleClass('mute');
      });

      $('.caixa-letra-1-linha h2').click(function(e) {
      e.preventDefault();

      $(this).toggleClass('aberto');
      });

      $('.caixa-letra-2-linhas h2').click(function(e) {
      e.preventDefault();

      $(this).toggleClass('aberto');
      });

      $('.laboratorio-letra h3').click(function(e) {
      e.preventDefault();

      $(this).toggleClass('aberto');
      });
      $('.nausea-letra h3').click(function(e) {
      e.preventDefault();

      $(this).toggleClass('aberto');
      });
      $('.imovel-letra h3').click(function(e) {
      e.preventDefault();

      $(this).toggleClass('aberto');
      });

    $('.caixa-letra-1-linha h2').click(function(){
      if ($(".caixa-letra-1-linha h2").hasClass("aberto") === true) {
        $(".caixa-letra-1-linha").animate({height: 450}, 400);
      } else {
        $(".caixa-letra-1-linha").animate({height: 55}, 400);
      }      
    });

    $('.caixa-letra-2-linhas h2').click(function() {
      if ($(".caixa-letra-2-linhas h2").hasClass("aberto") === true) {
        $('.caixa-letra-2-linhas h3').css({'visibility' : 'visible'});
        $('.caixa-clipao').css({'display' : 'none'});
        $(".caixa-letra-2-linhas").animate({height: 1000}, 400);
      } else {
        if ($(window).width() < 815){
          $(".caixa-letra-2-linhas").animate({height: 85}, 400);
        } else {
          $(".caixa-letra-2-linhas").animate({height: 60}, 400);
        }        
        $('.caixa-letra-2-linhas h3').css({'visibility' : 'hidden'});
        $('.caixa-clipao').css({'display' : 'initial'});
      }
    });

    $('.laboratorio-letra h3').click(function() {
      if ($(".laboratorio-letra h3").hasClass("aberto") === true) {
        $('.laboratorio-letra h4').css({'visibility' : 'visible'});
        $(".laboratorio-letra").animate({height: 1120}, 400);
      } else {
        if ($(window).width() >= 1100) {
          $(".laboratorio-letra").animate({height: 60}, 400);
        } else if ($(window).width() >= 750) {
          $(".laboratorio-letra").animate({height: 80}, 400);
        } else {
          $(".laboratorio-letra").animate({height: 70}, 400);
        }
        $('.laboratorio-letra h4').css({'visibility' : 'hidden'});
      }
    });

    $('.nausea-letra h3').click(function() {
      if ($(".nausea-letra h3").hasClass("aberto") === true) {
        $(".nausea-letra").animate({height: 970}, 400);
      } else {
        $(".nausea-letra").animate({height: 60}, 400);
      }
    });
    $('.imovel-letra h3').click(function() {
      if ($(".imovel-letra h3").hasClass("aberto") === true) {
        $(".imovel-letra").animate({height: 920}, 400);
      } else {
        $(".imovel-letra").animate({height: 60}, 400);
      }
    });

  });

  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

          var $target = $(target);
          // $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            // $target.focus();
          };
        });
      }
    }
  });