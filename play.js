
auto();
requestScreenCapture(false);
console.show();
//检查获取截图权限与无障碍权限 
//游戏记得调低帧率24/30

// 比例形式 way = 0(楼主按自己的平板比例来的等待测试)
// 坐标模式 way = 1(需要自己定位)
var way = 0;

//比例形式
var adresses = {
    ru: [0.775, 0.485],
    rr: [0.882, 0.662],
    rd: [0.771, 0.833],
    rl: [0.664, 0.662],
    lu: [0.225, 0.485],
    lr: [0.336, 0.662],
    ld: [0.225, 0.833],
    ll: [0.114, 0.662]
}

//找出八个白色四角星中心点坐标 截图自己找对应点楼主2800*1752;
var adressesX = {
    ru: [2170, 850]
    , rr: [2470, 1160]
    , rd: [2160, 1460]
    , rl: [1860, 1160]
    , lu: [630, 850]
    , lr: [940, 1160]
    , ld: [630, 1460]
    , ll: [320, 1150]
}


//中间颜色色值
var colorTap = "#fffbf2";

//获取设备宽度
var devWidth = device.width;
//获取设备高度
var devHeight = device.height;


// 循环跑起来
if (way == 0) {
    while (true) {
        presstap(adresses);
    }
} else {
    while (true) {
        presstapX(adressesX);
    }
}

//遍历八个点,找出符合颜色的点，并点击 
function presstap(tap) {

    // var time1 = new Date()
    // 初始化可点击对象
    var arr = []
    var cS = captureScreen();
    var uu = random(280, 330)

    // 遍历八个点，查找符合颜色的点
    for (var k in tap) {
        var key = tap[k];
        var x = parseInt(key[0] * devWidth);
        var y = parseInt(key[1] * devHeight);
        var c1 = cS.pixel(x, y)
        var c2 = colors.parseColor(colorTap);

        if (colors.isSimilar(c1, c2, 4)) {
            var rd = random(-20, 20)
            // rd = 0
            //组装出多点数组
            arr.push({ x: x + rd, y: y - rd })

        }
    }
    //如果可点击的数组容量大于0，点起来

    if (arr.length > 0) {
        // var time2 = new Date()
        // log(time2 - time1)
        log("找到" + arr.length + "个点需要点！")
        //组装点击参数数组
        var arrClick = []
        for (var i = 0; i < arr.length; i++) {

            arrClick.push([0, uu, [arr[i].x, arr[i].y],])

        }
        // var time3 = new Date()
        // log(time3 - time1)

        //多点操作
        // log(arrClick)
        // gesture(arrClick)
        gestures.apply(null, arrClick)
        // var time4 = new Date()
        // log(time4 - time1)

    }
}
//遍历八个点,找出符合颜色的点，并点击 
function presstapX(tap) {

    // var time1 = new Date()
    // 初始化可点击对象
    var arr = []
    var cS = captureScreen();
    var uu = random(280, 330)

    // 遍历八个点，查找符合颜色的点
    for (var k in tap) {
        var key = tap[k];
        var x = key[0];
        var y = key[1];

        var c1 = cS.pixel(x, y)
        var c2 = colors.parseColor(colorTap);

        if (colors.isSimilar(c1, c2, 4)) {
            var rd = random(-20, 20)
            //组装出多点数组
            arr.push({ x: parseInt(x) + rd, y: parseInt(y) - rd })

        }
    }
    //如果可点击的数组容量大于0，点起来
    if (arr.length > 0) {
        // var time2 = new Date()
        // log(time2 - time1)
        log("找到" + arr.length + "个点需要点！")
        //组装点击参数数组
        var arrClick = []
        for (var i = 0; i < arr.length; i++) {
            arrClick.push([0, uu, [arr[i].x, arr[i].y],])
        }
        // var time3 = new Date()
        // log(time3 - time1)

        //多点操作
        gestures.apply(null, arrClick);
        // var time4 = new Date()
        // log(time4 - time1)

    }
}
