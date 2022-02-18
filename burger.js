$(document).ready(function(){
    $('.header_burger').click(function(event) {
        $('.headrer_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});