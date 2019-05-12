var btn = document.getElementById('btn');
var scrollTop ;
var timer = null;
window.onscroll = function(){
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop;//兼容性写法，并且在滚动事件内可以实时获得滚动条距顶部的距离
    //console.log(scrollTop)
    return scrollTop;
}
btn.onclick = function(){
        clearInterval(timer);
//        var now = scrollTop;
//        var speed = (0-now)/10;
//        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        timer = setInterval(function(){
            var now = scrollTop;
            var speed = (0-now)/10;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);//这三步设置是定时器里面可以使速度动态变化，达到有缓冲的效果，如果房子定时器外面的话，返回顶部的速度是匀速的。

            if(scrollTop==0){
                clearInterval(timer);
            }
            document.documentElement.scrollTop =  scrollTop + speed;
            document.body.scrollTop =  scrollTop + speed;

        },30)

    };