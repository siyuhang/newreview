require(['../scss/two.scss','./main.js']);

$('.yt_btn').on('click',function(e){
    e.preventDefault();
   var checkedBox= $(this).parent('.yt_tdbox').find(":checked"),
        len= checkedBox.length;
    if(len==1){
        location.href="three.html"
    }else{
       alert(请选择性别);
    }
});

