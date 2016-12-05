require('../scss/six.scss');
require('./main');
$('.six_ganjue ul').on('click','li',function(){
    $(this).addClass('red').siblings().removeClass('red');
});
$('.six_btn').on('click',function(){
    location.href= 'seven.html';
});