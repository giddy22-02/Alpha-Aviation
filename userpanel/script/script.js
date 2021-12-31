$(document).ready(function(){

    $('#menu-bar').click(function(){
       
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

       
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){


            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

});