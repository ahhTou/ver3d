function init() {
    var a1 = document.getElementById("j1");
    a1.style.height = 120 + 'px';
    a1.style.width = 120 + 'px';
    a1.style.borderRadius = "60px";
    a1.style.fontSize = "20px";
    a1.style.background = "rgba(251,114,153,1)";
    a1.style.color = "white";
    a1.style.lineHeight = "120px";
}
function down(){
    document.getElementById("j1").innerHTML = "进入主页"
    var a1 = document.getElementById("j1");
    var t = 0;
    a1.style.borderRadius="60px"
    a1.style.fontSize = "10px"
    a1.style.transform = "scale(0.9,0.9)"

    var id = setInterval(frame, 10);
    function frame() {
        if (t == 30) {
            clearInterval(id);
            window.open("https://space.bilibili.com/6192593");
            document.getElementById("j1").innerHTML = "点击我"

        } else {
            t++;
            document.getElementById("j1").innerHTML = "前往中"

        }
    }
}
function out(){
    var a1 = document.getElementById("j1");
    a1.style.transform = "scale(1,1)"
    a1.style.height=60 + 'px';
    a1.style.width=150 + 'px';
    a1.style.borderRadius="8px";
    a1.style.fontSize = "20px";
    a1.style.background = "rgb(2,181,218)"
    a1.style.color="white"
    a1.style.lineHeight = "60px";
}

function up() {
    var a1 = document.getElementById("j1");
    a1.style.height=60 + 'px';
    a1.style.width=150 + 'px';
    a1.style.lineHeight = "60px";
    a1.style.borderRadius="8px";
    a1.style.fontSize = "25px";
    a1.style.background = "rgba(251,114,153.80)"

}