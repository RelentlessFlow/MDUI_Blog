
    // 文章超出内容自动隐藏 桌面端300字符

    function hideOne(num) {
        var artilceLengtn =  $(".mdui-card-primary .mdui-card-content").text().substring(0,num);
        artilceLengtn+="...";
        var replaceP = $(".mdui-card-primary .mdui-card-content");
        replaceP.text(artilceLengtn);
    }
    function hideOneMoble(){
        hideOne(50);
    }

    if (window.innerWidth<=600){
        hideOneMoble();
    }
    if (window.innerWidth>600){
        hideOne(300);
    }

    window.onresize = function (){
        if (window.innerWidth<=600){
            hideOneMoble();
        }
        $(".mdui-container .mdui-card").height();

        // }
    };
    // var carWidth = $(".mdui-container .mdui-card").width();
    // var cardHeight = $(".mdui-container .mdui-card").height();
    // var imgWidth = $(".mdui-container .mdui-card-media img").width();
    // var imgHeigh = $(".mdui-container .mdui-card-media img").height();
    // var articleWidth = $(".mdui-container .mdui-card-primary").width();
    // $(".mdui-container .mdui-card-primary").width(carWidth - imgWidth - carWidth*0.1);
    //
    //
    // imgHeigh/imgWidth
    // $(".mdui-container .mdui-card-media").height(cardHeight);
    // $(".mdui-container .mdui-card-media").width(cardHeight*imgWidth/imgHeigh);






