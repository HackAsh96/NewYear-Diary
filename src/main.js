$(document).ready(function(){
  const typed = new Typed('.type', {
    strings: [
      'Hello everybody,',
      'This year has passed , now we are in 2019.',
      'I have made this app with some cool design,',
      'in order to thank you and thank all the CopenhagenJS community',
      'cause if I can do this now ,',
      'it is because of your teaching and help.',
      'Thank you',
      '2018'
    ],
    typeSpeed: 50,
    backSpeed: 10,
  });
  setTimeout(()=>{
    typed.typewrite('Toggle the switch 😎',0);
    $('.center')
    .css('display','block')
    .toggleClass('active')
    .click(function(){
      if(screen.width<= 812){
      $('li').css('animation','none');
      $('#container')
      .css('display','block')
      .animate({opacity:1},500);
      $('.type').css('display','none');
      $('#selector').css('display','none');
      $('.card')
      .css('display','block')
      .animate({opacity:1},500);
    }
    else{
      $('li').css('animation','none');
      $('#container').css('display','block');
      $('.type').css('display','none');
      $('#selector')
      .css('background','#000')
      .animate({opacity:0},2000);
      $('.card')
      .css('display','block')
      .animate({opacity:1},500);
      let id = setInterval(frame, 15);
      let pos = 0;
      function frame() {
        if (pos  == 80) {
          clearInterval(id);
          $('#selector').css('box-shadow','none');
        } else {
          pos++;
          $('#selector').css('top',pos+'px');
        }
      }
    }
      $('.center').click(function(){
        $('.center').removeClass('active');
        setTimeout(()=>{
          location.reload(true)
        },2000);
        $('.center').animate({opacity:0},500);
        $('#container').animate({opacity:0},500);
        $('.card')
        .animate({opacity:0},500)
        .css('display','none');
      })
    })
  },29000);
}).bind('touchstart',function() {},false);//this line is particular for the IOS system in order to catch the :hover
