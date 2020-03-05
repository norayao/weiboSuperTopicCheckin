function getTargetTime() {
    var timezone = 32; //目标时区时间，东八区 + 24小时，假设签到目标时间为第二天0点整
    var offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
    var nowDate = new Date().getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
    var availableTime = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
    availableTime.setHours(0);
    availableTime.setMinutes(0);
    availableTime.setSeconds(0);
    availableTime.setMilliseconds(0);
    return availableTime;
}
function getBeijingtime() {
    //获得当前运行环境时间
    var d = new Date();
    currentDate = new Date();
    tmpHours = currentDate.getHours();
    //算得时区
    var time_zone = -d.getTimezoneOffset() / 60;
    if (time_zone < 0) {
        time_zone = Math.abs(time_zone) + 8; currentDate.setHours(tmpHours + time_zone);
    } else {
        time_zone -= 8; currentDate.setHours(tmpHours - time_zone);
    }
    return currentDate;
}
var targetDate = getTargetTime();
function check_click(){
    nowDate = getBeijingtime();
    //时间到,则进行点击
    if (nowDate > targetDate){
        var btn = document.querySelector("#Pl_Core_StuffHeader__1 > div > div.header_wrap.S_bg2.S_line2 > div > div.pf_opt > div > div:nth-child(3) > a");
        btn.click();
    }
    else{
        //每隔0.1秒检测一次时间
        setTimeout(check_click,100);
    }
}

check_click();
