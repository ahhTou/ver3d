///<reference path="jquery-3.4.1.js"/>
function up2(){
    var t=0;
    var id = setInterval(frame, 100);
    function frame(){
        if(t==9){
            clearInterval(id);
            window.open("https://space.bilibili.com/6192593");
            document.getElementById("f1").innerHTML = "按钮"
        }else{
            document.getElementById("f1").innerHTML = ""
            t++;
        }
    }

}
$(document).ready(function(){
    var s0 = $(".s0")
    s0.hide();
    $("#bt1").mousedown(function(){
        s0.show();
        var s1 = $("#s1");
        var s2 = $("#s2");
        var s3 = $("#s3");

        s1.addClass("big");
        setTimeout(function(){ s2.addClass("big"); }, 300);
        setTimeout(function(){ s3.addClass("big"); }, 600);
        setTimeout(function(){ s1. removeClass("big");s2. removeClass("big");s3. removeClass("big");s0.hide(); }, 2000);

    });
});
