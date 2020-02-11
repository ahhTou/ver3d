


$(document).ready(function(){
    $("#floatBtnHide").hide();
    var hideOrNot = 0;
    $("#floatBtn1").click(function(){
        if(hideOrNot == 0){
            $("#floatBtnHide").show().addClass("floatBtnHideAnm1");
            setTimeout(function (){$("#floatBtnHide").removeClass("floatBtnHideAnm1");},500);
            hideOrNot = 1;
        }else{
            hideOrNot = 0;
            $("#floatBtnHide").addClass("floatBtnHideAnm1Out");
            setTimeout(function (){$("#floatBtnHide").removeClass("floatBtnHideAnm1Out");},300);
            setTimeout(function (){$("#floatBtnHide").hide();},300);
        }
    });
});