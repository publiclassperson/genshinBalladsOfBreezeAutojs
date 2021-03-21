auto()
requestScreenCapture(false);
//检查获取截图权限与无障碍权限 
//游戏记得调低帧率24/30
//找出八个白色四角星中心点坐标 截图自己找对应点楼主2800*1752;
var adresses = {
    ru: [2170, 850]
    , rr: [2470, 1160]
    , rd: [2160, 1460]
    , rl: [1860, 1160]
    ,lu: [630, 850]
    , lr: [940, 1160]
    , ld: [630, 1460]
    , ll: [320, 1150]
}

//中间颜色色值
var colorTap = "#fffbf2";

// 循环跑起来
while(true){
    presstap(adresses);
}

//遍历点击八个点
function presstap(tap){
    for (var k in tap) {
        var key = tap[k];
        // log(key)
        var ig = captureScreen();
        var c1 = ig.pixel(key[0], key[1])
        var c2 = colors.parseColor(colorTap); 
        var str =colors.toString(c1);
        // log("从点拿到的色值为:"+str)        
        if(colors.isSimilar(c1,c2,4)){
            var ff = random(-20,20)
            press(key[0]+ff, key[1]-ff,5)
        }
    }
}
