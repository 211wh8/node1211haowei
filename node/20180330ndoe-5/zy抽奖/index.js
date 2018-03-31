var oLun = document.getElementById("lun");
var oBtn = document.getElementById("btn");
var oHand = document.getElementById("hand");
var oSpan1 = document.getElementById("span1");
var oSpan2 = document.getElementById("span2");
var a = 6;//默认停止为
var deg = 0;
var odeg = 0;//要停止的角度
var stopSpeed = 4;
var ssFalg = 0;//停止速度控制器
var flag = 0;
var flagA = true;
var oTimer = null;
var oStopTimer = null;

ajax_get("/spanA",function (res) {
    // console.log(res)
     if(res != ""){
       oHand.innerHTML = "欢迎"+ res;
     }
});

oBtn.onclick = function () {
     if (flagA){
         start();
         flagA = false;
     }
};
oSpan1.onclick = function () {
    var urls = "/span1";
    ajax_get(urls,function (res) {
           console.log(res)
    });
}
oSpan2.onclick = function () {
    var urlstop = "/span2";
    ajax_get(urlstop,function (res) {

    });
}
function start() {
     oTimer = setInterval(function () {
        oLun.style.transform = "rotate("+deg+"deg)";
        if(deg==360){
            deg =0;
        }
        if(flag==200){
            ajaxGet(deg);
        }
        flag++;
        deg+=10;
    },20);
}
function ajaxGet(deg) {
    var urlstop = "/stop";
    ajax_get(urlstop,function (res) {
        oJson = strToJson(res);

        a = oJson["jiang"];
        stop(deg);
    });

}
function stop(deg) {
    switch (a) {
        case 1:
            odeg = 60 * a;
            break;
        case 2:
            odeg = 60 * a;
            break;
        case 3:
            odeg = 60 * a;
            break;
        case 4:
            odeg = 60 * a;
            break;
        case 5:
            odeg = 60 * a;
            break;
        case 6:
            odeg = 60 * a;
            break;
        default:break;
    }
   deg-=360;
    clearInterval(oTimer);
    oStopTimer = setInterval(function () {
        ssFalg++;

        deg+=2;

        if (deg==odeg){
          clearInterval(oStopTimer);
        }
        if(deg==360){
            deg =0;
        }
        oLun.style.transform = "rotate(" + deg + "deg)";

    },20);
    // oLun.style.transform = "rotate(" + odeg + "deg)";
}


function strToJson(str) {
    var json = eval('(' + str + ')');
    return json;
}

function ajax_get(url, callback) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.open("get", url, true);
    xhr.send();

    return;
}