$(document).ready(function(){
  const typed = new Typed(".type", {
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
    backSpeed: 20,
  });
  setTimeout(()=>{
    typed.typewrite('Toggle the switch 😎',0);
    $('.center').css('display','block').click(function(){
      setTimeout(()=>{
        $('#container').css('display','block');
        $('.checkbox').css('display','block');
        $('.center').css('display','none');
        $('.type').css('display','none');
        $('.inner').toggleClass('active');
        $('body').css({'background':'#000','overflow':'auto'});
        $('#selector').css('background','#000').animate({opacity:0},500);
        $('.card').animate({opacity:1},500);
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
        $('.toggle').click(function(){
          $('.inner').removeClass('active')
          setTimeout(()=>{location.reload(true)},1000);
          $('body').css('background','black');
          $('#container').animate({opacity:0},500);
          $('.card').animate({opacity:0},500);
        })
      },1000);
    })
  },40000);
})
