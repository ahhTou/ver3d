function masklink(){
    var t=0;
    var id = setInterval(frame, 10);
    function frame() {
        if (t == 30) {
            clearInterval(id);
            window.open("https://space.bilibili.com/6192593");
        }
        else{
            t++;
        }
    }
}