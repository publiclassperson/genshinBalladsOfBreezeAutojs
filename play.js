auto();
requestScreenCapture(false);
//检查获取截图权限与无障碍权限 
//游戏记得调低帧率24/30
//找出八个白色四角星中心点坐标 截图自己找对应点楼主2800*1752;
const addresses = {
    ru: [2170, 850]
    , rr: [2470, 1160]
    , rd: [2160, 1460]
    , rl: [1860, 1160]
    , lu: [630, 850]
    , lr: [940, 1160]
    , ld: [630, 1460]
    , ll: [320, 1150]
}
//初始化随机延迟
const delay = random(450, 460)
//中间颜色色值
const destColor = "#fffbf2";
//相似度
const similar = 4;

// 循环跑起来
while (true) {
    let points = findWhitePoint();
    points.length > 0 && ClickAll(points);
}


function consoleSHOW() {
    //获取设备宽度
    var devWidth = device.width;
    //获取设备高度
    var devHeight = device.height;

    //设置控制台显示大小与位置
    console.show();
    console.setSize(500, 500);
    console.setPosition(devWidth / 16, devHeight / 16);
    // n = console.rawI11112nput("请输入数字1开始弹琴:")
}

//等待原神打开
function waitForYuanshen() {
    const activityPackage = "com.miHoYo.Yuanshen"
    const activityPages = "com.miHoYo.GetMobileInfo.MainActivity";
    const playPage = "com.afollestad.materialdialogs.MaterialDialog";

    waitForPackage(activityPackage, 3000)
    // waitForActivity(activityPages, 3000)
    // waitForActivity(playPage, 3000)
}
//遍历八个点,找出符合颜色的点 
function findWhitePoint() {
    let arr = []
    // 遍历八个点，查找符合颜色的点
    let cs = captureScreen()
    for (let k in addresses) {
        let x = addresses[k][0];
        let y = addresses[k][1];

        let flag = similarCheck(cs, x, y);
        let rd = random(-10, 10)
        flag && arr.push({ x: x + rd, y: y + rd });
    }
    //如果可点击的数组容量大于0，点起来
    return arr ? arr : [];

    /**
     * @param {坐标x} x 
     * @param {坐标y} y 
     */
    function similarCheck(x, y) {
        //点击队列
        let c1 = cs.pixel(x, y);
        let c2 = colors.parseColor(destColor);
        return colors.isSimilar(c1, c2, similar)
    }

}
//点击所有可点击点
function ClickAll(arrp) {
    let parmsize = arrp.length;
    if (parmsize > 0) {
        console.time("ClickAll")
        //组装点击参数数组
        let arrClick = [];
        log("找到" + parmsize + "个点需要点！");
        for (let i = 0; i < parmsize; i++) {
            arrClick.push([0, delay, [arrp[i].x, arrp[i].y],]);
        }
        //多点操作
        arrClick.length > 0 && gestures.apply(null, arrClick);
        console.timeEnd("ClickAll")
    }

}

