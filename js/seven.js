require('../scss/seven.scss');
require('./main');

//结果页菜单伸缩效果
$('.downy').on('click',function(){
    if(!$(this).hasClass("rotate")){
        $(this).addClass("rotate");
        $('.sevn_ybox').show();
    }else{
        $(this).removeClass("rotate");
        $('.sevn_ybox').hide();
    }
}); 
$('.downb').on('click',function(){
    if(!$(this).hasClass("rotate")){
        $(this).addClass("rotate");
        $('.sevn_bbox').show();
    }else{
        $(this).removeClass("rotate");
        $('.sevn_bbox').hide();
    }
});
