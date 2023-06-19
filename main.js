$(function(){

  $('a[href="#"]').click(function () {
    $('html, body').animate({
            scrollTop: 0
    }, 600);
  });

  $('#mask').hide();

  $('#menu-btn').click(function(){
    if($('#mask').is(':animated')){
      console.log("きた！");
      return false;
    }

    $('header').fadeToggle(500);
    $('#mask').fadeToggle(500);
    $('.side').toggleClass('side-add');

    $('#menu-btn span').removeClass('nazo');

    $('.wrap').toggleClass('active', function(){
      $('#menu-btn span').addClass('transition');
    }); 
  
    
    // TA藤田さんメモ
    // activeクラスが外れても、モーションが終わるまではtransitionを聴かせておきたい！
  });

  $(window).scroll(function() {
    if($(window).scrollTop() < 75){
      $('#menu-btn span').addClass('nazo');
      $('#menu-btn span').removeClass('span-add');
      $('header').removeClass('header-add');
    }else{
      $('#menu-btn span').addClass('nazo');
      $('#menu-btn span').addClass('span-add');
      $('header').addClass('header-add');
    }
  });

});