$(document).ready(function(){


var offset=$('.navbar').offset();
	
$(window).scroll(function(){

    if($(window).scrollTop()>offset.top){
        $('.navbar').addClass('fixedNav');

    } else {
        $('.navbar').removeClass('fixedNav');
    }
});

$('a[href^="#"]').click(function(){

    let target=$(this).attr('href');
    $('html,body').animate(
    {
        scrollTop:$(target).offset().top
    },
    800
    );
    
});

})