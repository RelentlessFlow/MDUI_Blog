//设置整体的主题

// mdui-theme-accent-indigo
// mdui-theme-primary-indigo
$("body").addClass("mdui-theme-primary-indigo mdui-theme-accent-indigo");


//定义判断浏览器对话框文本
var isBrowserHTML = "<div class=\"mdui-dialog\" id=\"device-help\">\n" +
    "    <div class=\"mdui-dialog-title\">温馨提示</div>\n" +
    "    <div class=\"mdui-dialog-content\">为了您的使用体验，请使用Chrome、Firefox、Edge等浏览器进行浏览，并将浏览器升级为最新版本。</div>\n" +
    "    <div class=\"mdui-dialog-actions\">\n" +
    "        <button class=\"mdui-btn mdui-ripple\">帮助</button>\n" +
    "        <button class=\"mdui-btn mdui-ripple\" mdui-dialog-cancel>确定</button>\n" +
    "    </div>\n" +
    "</div>";
$("body").append(isBrowserHTML);

//实例化提示窗口函数
function CreateIsBrowserHTML() {
    var deviceHelp = new mdui.Dialog('#device-help');
    deviceHelp.open();
    //调用MDUI对话框函数
}

/*
1、 判断浏览器哦类型并处理
function isBrowser() {
    var userAgent = navigator.userAgent;
    //微信内置浏览器
    if(userAgent.match(/MicroMessenger/i) == 'MicroMessenger') {
        CreateIsBrowserHTML();
        alert("为了您的使用体验，请您使用最新的Chrome浏览器或Firefox(火狐)浏览器进行浏览。");
    }
    //QQ内置浏览器
    else if(userAgent.match(/QQ/i) == 'QQ') {
        CreateIsBrowserHTML();
        alert("为了您的使用体验，请您使用最新的Chrome浏览器或Firefox(火狐)浏览器进行浏览。");
    }
    //Chrome
    else if(userAgent.match(/Chrome/i) == 'Chrome') {
        return "Chrome";
    }
    //Opera
    else if(userAgent.match(/Opera/i) == 'Opera') {
        CreateIsBrowserHTML();
        alert("为了您的使用体验，请您使用最新的Chrome浏览器或Firefox(火狐)浏览器进行浏览。");
    }
    //Firefox
    else if(userAgent.match(/Firefox/i) == 'Firefox') {
        return "Firefox";
    }
    //Safari
    else if(userAgent.match(/Safari/i) == 'Safari') {
        CreateIsBrowserHTML();
        alert("为了您的使用体验，请您使用最新的Chrome浏览器或Firefox(火狐)浏览器进行浏览。");
    }
    //IE
    else if(!!window.ActiveXObject || "ActiveXObject" in window) {
        CreateIsBrowserHTML();
        alert("为了您的使用体验，请您使用最新的Chrome浏览器或Firefox(火狐)浏览器进行浏览。");
    }
}

isBrowser();

*/

// 2、判断浏览器哦类型并处理
function userBrowser() {
    var browserName = navigator.userAgent.toLowerCase();
    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
        CreateIsBrowserHTML();
        alert("为了您的使用体验，请您使用最新的Chrome浏览器或Firefox(火狐)浏览器进行浏览。");
        return "ie";
    } else if (/firefox/i.test(browserName)) {
        return "firefox";
    } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
        return "chrome";
    } else if (/opera/i.test(browserName)) {
        CreateIsBrowserHTML();
        alert("为了您的使用体验，请您使用最新的Chrome浏览器或Firefox(火狐)浏览器进行浏览。");
        return "opera";
    } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
        return "webkit";
    } else {
        CreateIsBrowserHTML();
        alert("为了您的使用体验，请您使用最新的Chrome浏览器或Firefox(火狐)浏览器进行浏览。");
        return "unknown";
    }
}

userBrowser();

/*
    自定义返回class节点函数
    返回值为一个数组
    调用方式：
        document.getElementsClass("div1")[0].onclick=function(){
            //  代码块
        }
function getElementsClass(classnames) {
    var classobj = [];//定义数组
    var classint = 0;//定义数组的下标
    var tags = document.getElementsByTagName("*");//获取HTML的所有标签
    for (var i in tags) {//对标签进行遍历
        if (tags[i].nodeType == 1) {//判断节点类型
            if (tags[i].getAttribute("class") == classnames){//判断和需要CLASS名字相同的，并组成一个数组
                classobj[classint] = tags[i];
                classint++;
            }
        }
    }
    return classobj;//返回组成的数组
}
*/
//给大标题一个点击事件
// getElementsClass("mdui-typo-headline")[0].onclick=function () {
//     window.location.href="index.html";
// };

//页面刷新代码
function reloadPage() {
    window.location.reload();
}

//将地址打印到dialog上 id为nowLocation
var nowLocation = window.location.href;
document.getElementById("printLocation").innerHTML = "流水无情的博客：</br>" + nowLocation;

//dialog内复制代码
function CopyLocation() {
    mdui.snackbar({
        message: '请升级至最新的Chrome浏览器以实现该功能.'
    });
}


// mdui-appbar
// mdui-typo-headline


//给侧边栏跳转链接
$(".mdui-drawer .mdui-list .mdui-list-item:nth-child(2)").click(function () {
    window.location.href = "index.html";
});

$(".mdui-drawer .mdui-list .mdui-list-item:nth-child(3)").click(function () {
    window.location.href = "about.html";
});

$(".mdui-drawer .mdui-list .mdui-list-item:nth-child(5)").click(function () {
    window.location.href = "video.html";
});

$(".mdui-drawer .mdui-list .mdui-list-item:nth-child(6)").click(function () {
    window.location.href = "article.html";
});

$(".mdui-drawer .mdui-list .mdui-list-item:nth-child(7)").click(function () {
    window.location.href = "photography.html";
});

$("#mdui-card-video-1 .mdui-card-actions .mdui-btn:nth-child(1)").click(function () {
    window.location.href = "video_display_1.html";
});
//用jq向网页里添加元素：

//1、卡片标题自动隐藏代码
$(".mdui-card-primary-title").addClass("mdui-text-truncate");


//导航栏
//dom 欢迎按钮
$(".mdui-drawer .mdui-list .mdui-list-item:nth-child(11)").after(
    "<li class=\"mdui-subheader\">附加组件</li>\n" +
    "<li class=\"mdui-list-item mdui-ripple\">\n" +
    "            <i class=\"mdui-list-item-icon mdui-icon material-icons\">landscape</i>\n" +
    "            <div class=\"mdui-list-item-content\">欢迎界面</div>\n" +
    "        </li>"
);
//点击功能
$(".mdui-drawer .mdui-list .mdui-list-item:nth-child(13)").click(function () {
    window.location.href = "welcome.html";
});
//导航按钮

//主页键
$(".mdui-toolbar .mdui-btn:nth-child(4)").after("<a class=\"mdui-btn mdui-btn-icon\" href=\"javascript:\"><i class=\"mdui-icon material-icons\">home</i></a>");
$(".mdui-appbar .mdui-toolbar .mdui-btn:nth-child(5)").click(function () {
    window.location.href = "index.html";
});
//
// 主题按钮
// DOM
$(".mdui-toolbar .mdui-btn:nth-child(5)").after(
    "<a class=\"mdui-btn mdui-btn-icon\" href=\"javascript:\" mdui-menu=\"{target: '#theme-bottom-id'}\"><i class=\"mdui-icon material-icons\">color_lens</i></a>\n" +
    "\n" +
    "<ul class=\"mdui-menu mdui-menu-cascade\" id=\"theme-bottom-id\">\n" +
    "  <li class=\"mdui-menu-item\" style='display: none' id='DaySwitch'>\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">brightness_high</i>\n" +
    "      日间模式\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\" id='DarkSwitch'>\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">brightness_2</i>\n" +
    "      夜间模式\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-red\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      姨妈红\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-pink\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      哔哩粉\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-purple\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      基佬紫\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-indigo\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      颐堤蓝\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-blue\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      经典蓝\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-light-blue\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      钻石蓝\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-cyan\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      古铜绿\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-teal\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      水鸭青\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-green\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      自然色\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-light-green\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      春风绿\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-lime\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      柠檬黄\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-yellow\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      经典黄\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-amber\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      伊藤橙\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-deep-orange\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      水果橙\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-brown\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      古铜棕\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-grey\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      绅士灰\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li class=\"mdui-menu-item\">\n" +
    "    <a href=\"javascript:;\" class=\"mdui-ripple mdui-text-color-blue-grey\">\n" +
    "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">format_color_text</i>\n" +
    "      低调灰\n" +
    "    </a>\n" +
    "  </li>\n" +
    "<li class=\"mdui-list-item mdui-ripple\">\n" +
    "    <i class=\"mdui-list-item-icon mdui-icon material-icons\">image</i>\n" +
    "    <div class=\"mdui-list-item-content\">沉浸模式</div>\n" +
    "    <label class=\"mdui-switch\">\n" +
    "      <input type=\"checkbox\" id='immersionMode' />\n" +
    "      <i class=\"mdui-switch-icon\"></i>\n" +
    "    </label>\n" +
    "  </li>"
);
// 功能
$("#theme-bottom-id li:nth-child(1)").click(function () {
    var immersionModeChecked = document.getElementById("immersionMode").checked;
    if (immersionModeChecked === true){
        mdui.snackbar({
            message: '沉浸模式时无法切换到日间模式'
        });
    }else {
        $("body").removeClass("mdui-theme-layout-dark");
        $("#theme-bottom-id #DaySwitch").hide();
        document.getElementById("DarkSwitch").style.display = "block";
        setTimeout("changeMask()", 100);
    }
});

$("#theme-bottom-id li:nth-child(2)").click(function () {
    var immersionModeChecked = document.getElementById("immersionMode").checked;
    if (immersionModeChecked === true){
        mdui.snackbar({
            message: '沉浸模式时无法切换到日间模式'
        });
    }else {
        $("body").addClass("mdui-theme-layout-dark");
        $("#theme-bottom-id #DarkSwitch").hide();
        document.getElementById("DaySwitch").style.display = "block";
        $(".color_card_mask").css("background-color", "#000");
    }
});


$("#theme-bottom-id li:nth-child(3)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(1)").show();
    ChangThemeColor('red');
});

$("#theme-bottom-id li:nth-child(4)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(2)").show();
    ChangThemeColor('pink');
});

$("#theme-bottom-id li:nth-child(5)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(3)").show();
    ChangThemeColor('purple');
});

$("#theme-bottom-id li:nth-child(6)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(4)").show();
    ChangThemeColor('indigo');
});
$("#theme-bottom-id li:nth-child(7)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(5)").show();
    ChangThemeColor('blue');
});
$("#theme-bottom-id li:nth-child(8)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(6)").show();
    ChangThemeColor('light-blue');
});
$("#theme-bottom-id li:nth-child(9)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(7)").show();
    ChangThemeColor('cyan');
});
$("#theme-bottom-id li:nth-child(10)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(8)").show();
    ChangThemeColor('teal');
});
$("#theme-bottom-id li:nth-child(11)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(9)").show();
    ChangThemeColor('green');
});
$("#theme-bottom-id li:nth-child(12)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(10)").show();
    ChangThemeColor('light-green');
});
$("#theme-bottom-id li:nth-child(13)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(11)").show();
    ChangThemeColor('lime');
});
$("#theme-bottom-id li:nth-child(14)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(12)").show();
    ChangThemeColor('yellow');
});
$("#theme-bottom-id li:nth-child(15)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(13)").show();
    ChangThemeColor('orange');
});
$("#theme-bottom-id li:nth-child(16)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(14)").show();
    ChangThemeColor('deep-orange');
});
$("#theme-bottom-id li:nth-child(17)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(15)").show();
    ChangThemeColor('brown');
});
$("#theme-bottom-id li:nth-child(18)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(16)").show();
    ChangThemeColor('grey');
});
$("#theme-bottom-id li:nth-child(19)").click(function () {
    $("#bgCarousel img").css("display","none");
    $("#bgCarousel img:nth-child(17)").show();
    ChangThemeColor('blue-grey');
});
$("#theme-bottom-id li:nth-child(20) input").click(function () {
    if (document.getElementById("DaySwitch").style.display == "block"){
        mdui.snackbar({
            message: '注意：由于您的浏览器过低，夜间模式和沉浸模式无法同时设置，兼容性不佳，可能会影响您的使用体验'
        });
    }
    var immersionModeChecked = document.getElementById("immersionMode").checked;
    if (immersionModeChecked === true){
        localStorage.setItem("themeSetting","1");
        $(".bgCarouselMaks").css("display","inline");
        $("#bgCarousel").show();
        $("#bgCarousel img:last-child").show();
        $("body").addClass("mdui-theme-layout-dark");
        transparentMode();
    }
    if (immersionModeChecked === false){
        localStorage.setItem("themeSetting","0");
        $(".bgCarouselMaks").css("display","none");
        $("#bgCarousel").hide();
        $("body").removeClass("mdui-theme-layout-dark");
        roveTransparentMode();
    }
});

$(".bgCarouselMaks").css("display","none");




// $("#theme-bottom-id #DarkSwitch").click(function () {
//     $("body").addClass("mdui-theme-layout-dark");
//     $("#theme-bottom-id #DarkSwitch").after(
//         "  <li class=\"mdui-menu-item\" onclick='DarkSwitch()' id='DaySwitch'>\n" +
//         "    <a href=\"javascript:;\" class=\"mdui-ripple\">\n" +
//         "      <i class=\"mdui-menu-item-icon mdui-icon material-icons\">brightness_high</i>\n" +
//         "      日间模式\n" +
//         "    </a>\n" +
//         "  </li>\n"
//     );
//     $("#theme-bottom-id #DarkSwitch").remove();
// });
//主题颜色更改函数
function ChangThemeColor(color) {
    var class1 = "mdui-theme-primary-";
    var class2 = "mdui-theme-accent-";
    class1 = class1 + color;
    class2 = class2 + color;
// mdui-theme-primary-indigo mdui-theme-accent-indigo
    var allBodyClassName = $("body")[0].className;
    var className = allBodyClassName.toString();
    arrClassName = className.split(" ");
    var tempClass1;
    var tempClass2;
    for (x in arrClassName) {
        if (arrClassName[x].indexOf("mdui-theme-primary")) {
        } else {
            tempClass1 = arrClassName[x];
        }

        if (arrClassName[x].indexOf("mdui-theme-accent")) {
        } else {
            tempClass2 = arrClassName[x];
        }
    }
    $("body").removeClass(tempClass1);
    $("body").removeClass(tempClass2);
    $("body").addClass(class1);
    $("body").addClass(class2);
    changeMask();
}

//设置蒙版大小
function setMaskSize() {
    var imgWidth = $(".mdui-drawer .mdui-card").css("width");
    var imgHeight = $(".mdui-drawer .mdui-card").css("height");
    $(".color_card_mask").css("width", imgWidth);
    $(".color_card_mask").css("height", imgHeight);
}

setMaskSize();

window.onresize = function () {
    setMaskSize();
};



// 沉浸模式透明函数
function transparentMode(){
    $(".mdui-appbar .mdui-toolbar").removeClass("mdui-color-theme");
    $("#left-drawer .mdui-card").css("background-color","transparent");
    $("#left-drawer .color_card_mask").css("opacity","0");
    $("#left-drawer .mdui-list .mdui-card .mdui-card-media img").css("opacity","0.0");
}
//移除透明函数
function roveTransparentMode(){
    $(".mdui-appbar .mdui-toolbar").addClass("mdui-color-theme");
    $("#left-drawer .color_card_mask").css("opacity","0.4");
    $("#left-drawer .mdui-list .mdui-card .mdui-card-media img").css("opacity","1");
}


// localStorage 设置开始时主题颜色
if (localStorage.getItem("themeSetting")==1){
    defaultThemeMode();
}
function defaultThemeMode(){
    $(".bgCarouselMaks").css("display","inline");
    $("#bgCarousel").show();
    $("#bgCarousel img:last-child").show();
    $("body").addClass("mdui-theme-layout-dark");
    transparentMode();
    document.getElementById("immersionMode").click();
}
//$("#bgCarousel img").css("display","none");




//3、大标题主页跳转
$(".mdui-appbar .mdui-typo-headline").click(function () {
    window.location.href = "index.html";
});
// $(".mdui-container").after("<div class=\"social-share\"></div>");


//4、视频卡片图片跳转b站框架代码

//mdui-video-container
$(".video-load-img .mdui-video-container").hide(0);
// $(".mdui-card-media .mdui-video-container").show(500);

$("#video_button_play").click(function () {
    scrollPosition = $(document).scrollTop();
    $(".mdui-card-media .video-load-img .card-title-head-photo,#video_button_play").hide(0);
    $(".mdui-card-media .mdui-video-container").show(0);
    $(document).scrollTop(scrollPosition);
    $(".mdui-card-media .mdui-video-container iframe").attr('src', $('.mdui-card-media .mdui-video-container iframe').attr('src'));
});




//分享插件
$("#shareButton .mdui-dialog-actions").append("<button class=\"mdui-btn mdui-ripple\" onclick=\"openshareQzone()\">QQ空间分享</button>");
$("#shareButton .mdui-dialog-actions").append("<button class=\"mdui-btn mdui-ripple\" onclick=\"window.open('//shang.qq.com/wpa/qunwpa?idkey=f1ca512cc4536ef5d3ce2f5e6cf077509eba80af6b64847bc1653a148c5396f5')\">加入QQ群</button>\n");


// 空间分享
function openshareQzone() {
    var shareQzoneString1 = "http://connect.qq.com/widget/shareqq/index.html?url="
        +window.location.href+"&sharesource=qzone&title=分享一个有温度的博客&pics=你的分享图片地址&summary=SpringWaterLikeMe&desc=流水吾情:计算机专业科技爱好者，加QQ群：724456706";
    window.open(shareQzoneString1);
}

// 二维码分享
$("#printLocation").append("<div id=\"qrcode\"></div>");
    jQuery(function(){
    jQuery('#qrcode').qrcode(window.location.href);
});



    // Welcome.html
$(".welcomeButton button:nth-child(1)").click(function () {
    localStorage.setItem("themeSetting","0");
    window.location.href = "index.html";
});
$(".welcomeButton button:nth-child(2)").click(function () {
    localStorage.setItem("themeSetting","1");
    window.location.href = "index.html";
});




