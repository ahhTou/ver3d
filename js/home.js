//---------------------------------------全局变量------------------------------------------
let tm1,tm2;
let w=window.innerWidth;
let h=window.innerHeight;
let hideOrNot = 0;          //判断悬浮窗是否打开
let fSize1= w*0.2;          //获取ahhTou字体大小
let fSize12= fSize1 *1.05;  //获取ahhTou字体大小 ！放大后
let fSize2 = w*0.02;        //获取偷偷呼吸的死肥宅 电脑字体大小
let fSize22 = w*0.05;       //获取偷偷呼吸的死肥宅 手机字体大小
let fSizeCk = w*0.02;       //获取ck字体大小 电脑
let fSizeCk2 = w*0.05;      //获取ck字体大小 手机
let mskBtn1BoxW =w*0.5;                             //手机端按钮 宽
let mskBtn1BoxH =mskBtn1BoxW*0.3;                   //手机端按钮 高
let mskBtn1W = mskBtn1BoxW * 0.99;                //手机端按钮留白 高
let mskBtn1H = mskBtn1BoxH - (mskBtn1BoxW * 0.01); //留白宽
let  mskBtnText = w*0.05;                           //
        //悬浮窗----------------------------------------
        let floatBtn_leftAndBottomW = w*0.01;    //悬浮窗 电脑位置
        let floatBtn_left_P = w*0.01;            //悬浮窗 手机位置左
        let floatBtn_bottom_P= w*0.1;           //悬浮窗 电脑位置底

        let floatBtnPlusWW = w *0.05;                    //悬浮窗 + 号按钮 宽度 电脑
        let floatBtnPlusWP = h *0.1;                     //悬浮窗 + 号按钮 宽度 手机
        let floatBtnPlusPicWW = floatBtnPlusWW *0.3;     //悬浮窗 + 号按钮 图案 宽度 电脑
        let floatBtnPlusPicWP = floatBtnPlusWP *0.3;     //悬浮窗 + 号按钮 图案 宽度 手机
        let floatBtn1moreCriWW = floatBtnPlusWW *0.8;    //悬浮窗 子项 宽度 电脑
        let floatBtn1moreCriWP = floatBtnPlusWP *0.8;   //悬浮窗 子项 宽度 手机
        let floatBtn1moreCriPicR6andBiliWW = floatBtn1moreCriWW *0.625; //b站和R6按钮 宽 电脑
        let floatBtn1moreCriHomeWW = floatBtn1moreCriWW *0.5;           //HOME 宽 电脑
        let floatBtn1moreCriPicR6andBiliWP = floatBtn1moreCriWP *0.625;//b站和R6按钮 宽 手机
        let floatBtn1moreCriHomeWP = floatBtn1moreCriWP *0.5;          //HOME 宽 手机
        //悬浮窗END
//-----------------------------------------------------------------------------------------



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!开始
$(document).ready(function(){
//通用--------------------------------------------------------------------------------------------------------------
    let $id_min = $("#min");
    let $id_FloatBtn1 =$("#floatBtn1");
    let $id_FloatBtnHide =$("#floatBtnHide");
    let $id_CK = $("#ck");
    let $id_BtnLine = $("#btnLine");
    let $id_LtBtn = $("#LtBtn");
    let $class_MaskBtn1TextHide = $(".maskBtn1textHide");
    let $id_body0 = $("#body0");

    let $id_floatBtnMaxBox = $("#floatBtnMaxBox");

    $id_FloatBtnHide.hide();          //隐藏 悬浮窗
    $id_min.hide();                   //隐藏 偷偷呼吸的死肥宅
    $id_CK.hide();                    //隐藏 点击提示
    $id_BtnLine.hide();               //隐藏 按钮
    $id_LtBtn.hide();                 //隐藏 按钮 移动端
    $class_MaskBtn1TextHide.hide();      //隐藏
    $id_floatBtnMaxBox.hide();        //隐藏 悬浮窗

    $id_body0.addClass("body1");                                                       //由黑到白的转场
    $("#big").css({"font-size":fSize1 +"px"});                                           //设置ahhTou字体
    $("#ahhTouTextBox").css({"height":fSize1*1.5 +"px"});                                  //不让ahhTou字体影响其他div
    setTimeout(function(){  $id_body0.css({"background":"white"}); }, 1000);          //1s后屏幕开始变白
    setTimeout(function () {b1();},4500);                                               //4.5s后big开始动画
    setTimeout(function(){ $id_CK.fadeIn(2000); }, 2000);                             //2s后ck出现
//------------------------------------------------------------------------------------------------------------------
//--------------------------------------悬浮窗---------------------------------------------
    //点击时情况

    $id_FloatBtn1.click(function(){
        if(hideOrNot === 0){
            $id_FloatBtnHide.show().addClass("floatBtnHideAnm1");
            $("#floatBtn1").css({"background":"rgb(227,23,13,0.9)","transform":"scale(1.15,1.15)"});
            $("#floatBtnPic").css({"transform":"rotate(270deg) scale(1.5,1.5)","background":"white"});
            setTimeout(function (){$("#floatBtnHide").removeClass("floatBtnHideAnm1");},500);
            hideOrNot = 1;
        }else{
            hideOrNot = 0;
            $("#floatBtn1").css({"opacity":"1","background":"white","transform":"scale(1,1)"});
            $("#floatBtnPic").css({"transform":"rotate(45deg)","background":"url('http://ww1.sinaimg.cn/large/005YeTR9ly1gbp4b4ahe3j31fb0u0157.jpg')"});
            $id_FloatBtnHide.addClass("floatBtnHideAnm1Out");
            setTimeout(function (){$("#floatBtnHide").removeClass("floatBtnHideAnm1Out");},300);
            setTimeout(function (){$("#floatBtnHide").hide();},300);
        }
    });
    //指针进入时的两种情况
    $id_FloatBtn1.mouseenter(function(){
        if(hideOrNot===0){
            $("#floatBtn1").css({"transform":"scale(1.1,1.1)"});
        }else{
            $("#floatBtn1").css({"transform":"scale(1.25,1.25)"});
        }

    });
    //指针离开时的两种情况
    $id_FloatBtn1.mouseleave(function(){
        if(hideOrNot===0){
            $("#floatBtn1").css({"transform":"scale(1.0,1.0)"});
        }else {
            $("#floatBtn1").css({"transform":"scale(1.15,1.15)"});
        }

    });

//-----------------------------------------------------------------------------------------
    //**************************************************************手机端**************************************************************//
    //高度大于宽度时（手机）
    if(w<h){
        let $class_maskBtn1Box =  $(".maskBtn1box");
        let $id_maskBtn1Box1 = $("#maskBtn1box1");
        let $id_maskBtn1Box2 = $("#maskBtn1box2");
        let $id_maskBtn1Box3 = $("#maskBtn1box3");
        $id_min.css({"font-size":fSize22 +"px"});                                          //设置 偷偷呼吸的死肥宅字体
        $id_CK.css({"font-size":fSizeCk2+"px","opacity":"0.5"});                           //设置手机ck字体，w的0.2,初始透明度0.5
        $("#CkBox0").css({"top":h*0.3 + "px"});                                              //ck位置
        $("#btnBox").css({"top":h*0.1+"px"});                                                //btn的位置
        $class_maskBtn1Box.css({"width":mskBtn1BoxW +"px","height":mskBtn1BoxH+"px"});        //按钮宽高
        $(".maskBtn1text").css({"width":mskBtn1BoxW +"px","height":mskBtn1BoxH+"px"});      //字体宽高
        $class_MaskBtn1TextHide.css({"width":mskBtn1BoxW +"px","height":mskBtn1BoxH+"px"});      //字体宽高
        $(".maskBtn1").css({"width":mskBtn1W+"px","height":mskBtn1H+"px"});               //留白宽高
        $("#mskBtn1White").css({"width":mskBtn1W+"px","height":mskBtn1H+"px"});          //历史 留白宽高
        $class_maskBtn1Box.css({"font-size":mskBtnText +"px","margin":w*0.1+"px"});         //字体大小

        //手机端悬浮窗控制
            floatCtlWandP(floatBtnPlusWP,floatBtnPlusPicWP,floatBtn_left_P,floatBtn_bottom_P,floatBtn1moreCriWP,floatBtn1moreCriPicR6andBiliWP,floatBtn1moreCriHomeWP);


         //--------------------手机端按钮--------------------//
            //进入哔哩哔哩
                $id_maskBtn1Box1.hover(function(){ $id_maskBtn1Box1.css("font-size",mskBtnText *1.2+"px");},function(){ $id_maskBtn1Box1.css("font-size",mskBtnText+"px");});
                $id_maskBtn1Box1.mousedown(function(){ $id_maskBtn1Box1.css("font-size",mskBtnText*0.8 +"px");});

            //查看历史版本
                let maskIfHide = mskBtn1BoxH;
                $id_maskBtn1Box2.click(function (){
                    if(maskIfHide===mskBtn1BoxH){
                        $id_maskBtn1Box2.css({"height":mskBtn1BoxH *7+"px"});
                        $("#mskBtn1White").css({"height":mskBtn1BoxH *7- (mskBtn1BoxW * 0.01)+"px"});
                        maskIfHide=0;
                        $class_MaskBtn1TextHide.fadeIn(300);
                    }else{
                        $id_maskBtn1Box2.css({"height":mskBtn1BoxH+"px"});
                        $("#mskBtn1White").css({"height":mskBtn1H+"px"});
                        maskIfHide=mskBtn1BoxH;
                        $class_MaskBtn1TextHide.fadeOut(300);
                    }
                });

          //其他
        $id_maskBtn1Box3.hover(function(){ $id_maskBtn1Box3.css("font-size",mskBtnText *1.2+"px");},function(){ $id_maskBtn1Box3.css("font-size",mskBtnText+"px");});
        $id_maskBtn1Box3.mousedown(function(){ $id_maskBtn1Box3.css("font-size",mskBtnText*0.8 +"px");});
        $id_LtBtn.css({"top":w *0.1 +"px"});

        //--------------------手机端按钮-------------------//


        //4s后ck开始变大动画
        setTimeout(function () {$id_CK.addClass("CkBig");},4000);
        //4s后点击
        setTimeout(function () {   $("body").click(function(){
            $("#CkBox0").css({"opacity":"0"});
            setTimeout(function () {$("#big").addClass("anm22");},1000);
            setTimeout(function () {
                fourCkFun2();
                setTimeout(function () {$id_LtBtn.fadeIn(2000);$id_floatBtnMaxBox.fadeIn(2000);},3000);
            },500);
        });},4000)}

        //**************************************************************手机端**************************************************************//


        //**************************************************************电脑端**************************************************************//

    else{
        $id_min.css({"font-size":fSize2 +"px"});                                              //设置 偷偷呼吸的死肥宅字体
        $id_CK.css({"font-size":fSizeCk+"px"});                                                //设置电脑ck字体，宽度的0.05
        $("#CkBox0").css({"top":h*0.3 + "px"});                                                  //ck位置
        $("#btnBox").css({"top":h*0.1+"px"});                                                   //btn的位置

        //悬浮窗长度宽度控制
        floatCtlWandP(floatBtnPlusWW,floatBtnPlusPicWW,floatBtn_leftAndBottomW,floatBtn_leftAndBottomW,floatBtn1moreCriWW,floatBtn1moreCriPicR6andBiliWW,floatBtn1moreCriHomeWW);

        //4s后ck开始上升动画
        setTimeout(function () {$id_CK.addClass("CkJump");},4000);

        //4s后点击屏幕得到的
        setTimeout(function () {   $("body").click(function(){
            $("#CkBox0").css({"opacity":"0"});
            setTimeout(function () {$("#big").addClass("anm22");},1000);
            setTimeout(function () {
                //通用函数 1；
                fourCkFun2();
                setTimeout(function () {$id_BtnLine.fadeIn(2000);$id_floatBtnMaxBox.fadeIn(2000);},3000);
            },500);
        });},4000)}

        //**************************************************************电脑端**************************************************************//

});  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!结束


//-------------------------------------函数-------------------------------------//
    //大标题循环动画
    function b1(){
        $("#big").css({"fontSize":fSize1+"px"});
        setTimeout(function () {b2();clearTimeout(tm1); },4000)
    }
    function b2(){
        $("#big").css({"fontSize":fSize12+"px"});
        tm2=setTimeout(function(){b1();clearTimeout(tm2);},4000);
    }

    //通用
    function fourCkFun2(){
        let $id_min = $("#min");

        $("#CkBox0").hide();
        $("#big").addClass("bigZgo");   //ahhTou字体动画

        $id_min.fadeIn(2000);         //min登场
        $id_min.addClass("anm4");     //tt字体动画
    }

    //悬浮窗位置宽度设置
    function floatCtlWandP(btnW,picW,lf,bt,sonW,rb,home){
        // btnW 主按钮宽 picW 主按钮图宽 lf，bt固定位置 ，snow子按钮宽，rb，home，子按钮图案

        $("#floatBtnMaxBox").css({"left":lf + "px","bottom":bt + "px"});
        $("#floatBtn1").css({"height":btnW + "px","width":btnW + "px"});
        $("#floatBtnPic").css({"height":picW +"px","width":picW +"px"});
        $(".floatBtn1moreCri").css({"height":sonW +"px","width":sonW +"px"});
        $("#floatBtnMore1Pic").css({"height":rb +"px","width":rb +"px"});
        $("#floatBtnMoreBPic").css({"height":rb +"px","width":rb +"px"});
        $("#floatBtnMoreHomePic").css({"height":home +"px","width":home +"px"});
    }
//-----------------------------------------------------------------------------//

