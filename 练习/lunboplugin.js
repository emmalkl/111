;(function($){
   $.fn.scroll=function(options){
       var root=this,      //把当前对象div存入root中
           timer=[],      //计时器
           ultag=$('>ul',root),  //获取ul标签
           litag=$('>li',ultag), //li标签
           linum=litag.length,   //li个数
           lione=litag.first(),  //获取单个li   .first()获取匹配元素集合中第一个元素
           marquee,              //滚动器函数
           liunit,               //li宽或高
           ulunit,               //ul宽或高
           limit,               //root宽或高
           cssname,             //样式名称（横：margin-left;纵：margin-top）
           effect;             //动画效果（横：marginLeft;纵：marginTop）
       //默认配置
       var settings={
           speed:40,
           direction:"x"
       }
       //传入的options不为空合并参数
       if(options){
           $.extend(settings,options);
       }
       //x
       if(settings.direction==="x"){
           limit=root.width();
           cssname="margin-left";
           liunit=lione.outerWidth(true);
           // 获取匹配元素集合中第一个元素的当前计算外部宽度（包括padding，border和可选的margin）  true的话包含margin
           ulunit=liunit*linum;
           effect={marginLeft:"-=1"};
           ultag.css({ width: ulunit }); //给ul设置宽
       }
       //y
       if(settings.direction==="y"){
        limit=root.height();
        cssname="margin-top";
        liunit=lione.outerHeight(true);
        ulunit=liunit*linum;
        effect={marginTop:"-=1"};
        ultag.css({ height: ulunit }); //给ul设置gao
    }
       //marquee
       marquee=function(){
           //.anmiate(效果，持续时间，回调函数)
           ultag.animate(effect,0,function(){
              //ul滚动的距离，取绝对值
              var distance = Math.abs(parseInt($(this).css(cssname),10));
              //如果滚动距离一旦大于单个li的长
              if(distance>liunit){
                  $(">li:first",$(this)).appendTo($(this));//把第一个li移到最后
                  $(this).css(cssname,0);//滚动距离归0
              }
           });
       }
       //.each()遍历一个jQuery对象，为每个匹配元素执行一个函数。
       return root.each(function(i){
           //ul长>root长时才进行滚动
           if(ulunit>limit){
               timer[i]=setInterval(marquee,settings.speed);
               //鼠标进入停止
               $(this).hover(function(){
                   clearInterval(timer[i]);
               },function(){
                   timer[i]=setInterval(marquee,settings.speed);
               });
           }
       });
   }
})(jQuery);