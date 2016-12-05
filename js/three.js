require('../scss/three.scss');
require('./main');
/*document.getElementsByClass('re_noyo input').on('click',function(){
    alert(1)
});*/
$('.re_noyo span').on('click',function(){
    if($(this).index()==1){
        $('.re_jibing').show();
    }else{
        $('.re_jibing').hide();
    }
});
$('.re_jibing ul').on('click','li',function(){
    if($(this).hasClass('red')){
        $(this).removeClass('red');
    }else{
        $(this).addClass('red');
    }
});
$('.re_btn').on('click',function(){

    location.href ='four.html'
});



