$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>5){
            $('.scroll').addClass('sticky');
        }
        else{
            $('.scroll').removeClass('sticky');
        }
    })
});