require('../scss/four.scss');
require('./main');
$('.fo_noyo span').on('click',function(){
    if($(this).index()==1){
        $('.fo_jibing').show();
    }else{
        $('.fo_jibing').hide();
    }
});
$('.fo_jibing ul').on('click','li',function(){
    if($(this).hasClass('red')){
        $(this).removeClass('red');
    }else{
        $(this).addClass('red');
    }
});
$('.fo_btn').on('click',function(){

    location.href ='fiew.html'
});