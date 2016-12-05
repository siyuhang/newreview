require(['../scss/seven.scss','./main.js','../lib/iscroll5.js']);

var isc = new IScroll("#isco");
 isc.refresh();
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
