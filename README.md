## 个人MD风格博客系统（未完成）

### 简介：
##### 历程：
从大上周周日开始写，写了也有块半个月了。本来代码就是打算用bootstrap怼怼的，结果MDUI这框架深得我心，写着写着越写越复杂，代码一次又一次的增删改查，重构，为了实现一个小功能去查阅更多的技术，一次又一次的读技术文档，查阅技术文档，API，学Jquery是因为我当初想去找一个类名为XXXXXX的元素，就是继承的关系，我用document.getElementClassName()这个东西实现起来很麻烦，写了一堆for循环，直到我发现了Jquery的层叠选择器。。。。。，然后照着Jquery文档用Jquery重构了一遍。。。。<br/>
　　有一次我给侧边栏的那个导航添加超链接，用那个a标签，结果发现a标签有个外边距，于是在button里面写的onclick，后来发现这么多页面一个个加太麻烦了，我就用JQ加的click函数，重构了一遍。<br/>
　　有一次我想在顶部导航栏加个按钮，就那个主页键，我是这么想的，就是手机端，我觉得手机端要是想要回到主页还得点那个侧边栏很麻烦，就想着在上边加个主页按钮，我一个一个加，我感觉有点蛮烦啊，然后看Vue.js居然可以直接用js写html，然后就用jq加的。。。。方便方便。。。<br/>
　　后面又涉及到手机端适配的问题我在博客上学习了媒体查询，摄影那个界面我想加个边框，又不能写padding和margin，就学了css3弹性盒子。。。。。其实还有很多，主要是html5，css3和js、jq的API部分。。。

##### ==适配：==

==所有端实现响应式，包括手机端，平板端，PC，超大PC。==<br>
为了实现手机端和平板端的良好效果写了大量的媒体查询代码
尤其是手机端和IPAD端，浏览体验不比PC端差。<br/>
基于火狐和Chrome开发，开发用的Firefox调试。 <br/>
由于API啥新用啥，所以<br/>仅支持最新的Chrome、Firfox浏览器和任何基于**Chrome内核**或者**Webkit内核**的浏览器，以及==IE10==（可能连IE10也不支持）。<br/>**不支持老版本Chrome、Firfox以及IE9 IE8.** <br/>
**对手机端和平板端适配非常非常良好，包括横屏竖屏**
### 如何使用：
请点击==Welcome.html==即可体验，另外I==PAD和手机==浏览效果更佳。</br>
index.html是主页


### 前端：



#### 框架选择：
- Jquery 
- MDUI :类似Bootstrap的CSS框架，谷歌==Material Design==风格 <br/> 语法和Bootstrap也很相似

#### 插件选择：

- Viewer.js：图片查看插件
- Share.js：时间原因功能未完美实现，有Bug）
- shuffle.js：相册插件，忘记实现了。。。。

#### 页面说明：
页面一共是分为以下10个页面，有1个页面没有实现，1个是模板

- welcome.html：欢迎界面
- index.html：主页
- about.html：关于
- article.html：文章列表
- login.html: 登录页面
- register.html：注册界面
- photography.html：相册列表（另外说一声，那个图片是可以点击放大的）
- video.html：视频列表页
- blank.html：空白页（模板）
- video_display_1.html：视频详情页（没有精力实现了）

#### 文件夹说明：
##### css:
- mdui.css :MDUI框架CSS文件
- share.min.css：分享插件，没有实现
- style.css：主要的css文件
- viewer.mim.css：图片点击插件css文件
##### fonts:
MDUI默认字体文件
##### icons：
MDUI默认图标
##### images:
- Photo：照片
- 其他图片请看文件名
##### js:
- jquery-3.4.0.min.js：Jquery主文件
- mdui.js：mdui框架主js文件
- main.js：主要的JS文件
- main2.js：文章字体字数超出限制自动截断代码，article.html里面有引用
- returnTop.js：右下角那个返回顶部按钮的js文件
- qrcode.js: 二维码生成工具
- viewer.min.js：摄影那一栏的图片是可以点击的，点击之后可以放大缩小查看幻灯片等操作。

##### XXXXXX.html：各自的页面文件，请看上面的页面说明

### 功能介绍：

#### 主要功能：

双击index.html或者welcome.html就是功能了，哈哈哈哈，我可真机智。
#### 未完成功能：
 分享功能的剪切板。<br/>
 XX功能：这个靠脑子想，想出来一个就写一个，写到天荒地老，对了今天（**2019-05-05**）写那个欢迎界面的字，想用递归调，调了半天没出来。。。。，就索性用定时器写了。<br/>
 还有n多页面没写。。。

#### 已实现功能 
主要有顶部导航(.mdui-appbar)、侧边导航(.mdui-drawer)和主内容(.mdui-container)三个部分组成

绝大部分功能依靠HTML实现，有时候嫌麻烦就用jq直接after或者append到DOM文档里面了，因此JS代码主要是添加一些重复量很大的HTML代码和一些重复量过多的功能，比如使用`Jqobject.click(function(){windows.location.href:"XXX.html"})`替换掉了a标签作为点击跳转链接的作用，有一些效果代码依靠JS实现，比如主题系统。


#### ==特色功能==

#### 特色功能：==1.主题系统：==
这个玩意就是顶部导航栏上的==调色盘==啊，==切记要尝试一下==啊，我代码写了一大堆啊，调试了半天BUG！

##### 功能实现：
通过替换body中名为`mdui-theme-primary-颜色 mdui-theme-accent-颜色`的两个class类名（属性），以实现颜色切换的目的。<br/>
例子：<br/>
　　把`mdui-theme-primary-blue mdui-theme-accent-blue`改为`mdui-theme-primary-red mdui-theme-accent-red`就可以实现整体的颜色的切换，为body添加`mdui-theme-color`为MDUI的主题颜色系统。<br/>
<br>
- 颜色切换核心代码
```
//DOM
<ul class="mdui-menu mdui-menu-cascade mdui-menu-open" id="theme-bottom-id" style="top: 56px; left: 514px; transform-origin: 100% 0px 0px; position: absolute;">
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple mdui-text-color-red">
      <i class="mdui-menu-item-icon mdui-icon material-icons">format_color_text</i>
      姨妈红
    </a>
  </li>
  <li class="mdui-menu-item">
    <a href="javascript:;" class="mdui-ripple mdui-text-color-pink">
      <i class="mdui-menu-item-icon mdui-icon material-icons">format_color_text</i>
      哔哩粉
    </a>
  </li>
</ul>
//JS功能
    //调用绑定click事件
$("#theme-bottom-id li:nth-child(3)").click(function () {
    ChangThemeColor('red');
});
......

    //*类名替换函数
    
```  
<br/>


- 主题颜色更改函数
```
function ChangThemeColor(color){
    var class1 = "mdui-theme-primary-";
    var class2 = "mdui-theme-accent-";
    class1 = class1+color;
    class2 = class2+color;
// mdui-theme-primary-indigo mdui-theme-accent-indigo
    var allBodyClassName = $("body")[0].className;
    var className = allBodyClassName.toString();
    arrClassName = className.split(" ");
    var tempClass1;
    var tempClass2;
    for ( x in arrClassName){
        if (arrClassName[x].indexOf("mdui-theme-primary")){
        }else {
            tempClass1 = arrClassName[x];
        }

        if (arrClassName[x].indexOf("mdui-theme-accent")){
        }else {
            tempClass2 = arrClassName[x];
        }
    }
    $("body").removeClass(tempClass1);
    $("body").removeClass(tempClass2);
    $("body").addClass(class1);
    $("body").addClass(class2);
    setTimeout("changeMask()",100);
}
```
- 颜色切换核心代码:  

```
    //DOM
<ul class="mdui-menu mdui-menu-cascade mdui-menu-open" id="theme-bottom-id" style="top: 56px; left: 514px; transform-origin: 100% 0px 0px; position: absolute;">
  <li class="mdui-menu-item" style="display: none" id="DaySwitch">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon mdui-icon material-icons">brightness_high</i>
      日间模式
    </a>
  </li>
  <li class="mdui-menu-item" id="DarkSwitch">
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-menu-item-icon mdui-icon material-icons">brightness_2</i>
      夜间模式
    </a>
  </li>
</ul>
  
    //行为
$("#theme-bottom-id li:nth-child(1)").click(function () {
    $("body").removeClass("mdui-theme-layout-dark");
    $("#theme-bottom-id #DaySwitch").hide();
    document.getElementById("DarkSwitch").style.display="block";
    setTimeout("changeMask()",100);
});

$("#theme-bottom-id li:nth-child(2)").click(function () {
    $("body").addClass("mdui-theme-layout-dark");
    $("#theme-bottom-id #DarkSwitch").hide();
    document.getElementById("DaySwitch").style.display="block";
    $(".color_card_mask").css("background-color","#000");
});
    //默认颜色
        // 默认颜色调用
            setTimeout("changeMask()",100);
        //设置整体的主题
            $("body").addClass("mdui-theme-primary-indigo mdui-theme-accent-indigo");
```
图片蒙版颜色切换代码
```
    //DOM
<div class="mdui-drawer mdui-color-theme" id="left-drawer">
    <ul class="mdui-list">    
        <div class="mdui-card">
            <div class="mdui-card-media">
                <div class="color_card_mask"></div>
                <img src="image/MainSection.png">
                <div class="mdui-card-media-covered">
                    <div class="mdui-card-primary">
                        <div class="mdui-card-primary-title">流水吾情</div>
                        <div class="mdui-card-primary-subtitle">苦逼大一狗</div>
                    </div>
                </div>
            </div>
        </div>
     ....
    //行为
    //可以根据父类card标签的宽高自适应本身的宽度和高度，
    function setMaskSize() {
        var imgWidth = $(".mdui-drawer .mdui-card").css("width");
        var imgHeight = $(".mdui-drawer .mdui-card").css("height");
        $(".color_card_mask").css("width",imgWidth);
        $(".color_card_mask").css("height",imgHeight);
    }
    // 颜色切换代码
    // 蒙版也在全局主题里，所以在ChangThemeColor()时一起调用了
```
    //CSS文件
    .color_card_mask{
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.3;
    }
    //
    

#### 特色功能：2.全局响应式

- 由于框架自带响应式，所以必定支持响应式。
- 但是自己对框架有的地方不满意，写了大量的媒体查询，对IPAD、手机、手机横屏进行了完美适配。<br/>  
代码端：
```
@media screen and (max-width: 600px){
    .index-card-photo-title .mdui-card-media{
        width: 100%;
    }
    .index-card-photo-title .mdui-card-primary .mdui-typo span{
        display: none;
    }
    .index-card-photo-title .mdui-card-primary .mdui-typo h1{
        width: 10rem;
    }
}
@media screen and (max-width: 1000px){
    .index-card-photo-title .mdui-card-primary{
        padding-left: 20px;
        padding-top: 0px;
    }
}
```

#### 特色功能：3.浏览器判断
- 由于使用了绝大多数最新的API，所以仅支持最新浏览器。所以写了以下代码进行了浏览器内核判断。

Code：
```
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
```

#### 特色功能：4.视频页框架内嵌
- 可以将别的视频网站的视频直接用iframe嵌入进来，实现在线视频。
Code：
```
    // DOM
    <div class="mdui-card-media">
            <div class="video-load-img">
                <img src="image/video1_pic1.png" class="card-title-head-photo"/>
                <button  id="video_button_play" class="mdui-fab mdui-ripple mdui-text-color-grey-500 video_button_play" ><i class="mdui-icon material-icons mdui-center mdui-valign">play_arrow</i></button>
                <div class="mdui-video-container">
                    <iframe src="//player.bilibili.com/player.html?aid=24493376&cid=41136449&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                </div>
            </div>
        ···    
        
    // CSS
#video_button_play{
    position: absolute;
    right: 50%;
    top: 50%;
    width: 6rem;
    height: 6rem;
    margin-right: -3rem;
    margin-top: -3rem;
}
#video_button_play .mdui-icon{
    position: relative;
    font-size: 6rem;
    line-height: 5rem;
    text-align: center;
    width: 6rem;
    height: 6rem;
    margin-top: 0.5rem;
    opacity: 0.8;
}

    // Javascript
$("#video_button_play").click(function () {
    scrollPosition = $(document).scrollTop();
    $(".mdui-card-media .video-load-img .card-title-head-photo,#video_button_play").hide(0);
    $(".mdui-card-media .mdui-video-container").show(0);
    $(document).scrollTop(scrollPosition);
    $(".mdui-card-media .mdui-video-container iframe").attr('src', $('.mdui-card-media .mdui-video-container iframe').attr('src'));
});

```
#### 特色功能：5.一键分享
---


#### 另外页面或多或少有点Bug，暂时没有精力修复。很多函数调用根本没法这个调那个，因为有线程和函数声明周期的锅，多线程和异步又不会，只能用定时器来凑。。。 
##### 另外代码托管在Gitee上，用户名为SpringWaterLikeMe
### 后端：
根本没有精力写。。。。准备用node.js