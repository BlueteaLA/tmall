$(function(){
	// 搜索框文字
	var searchkuang=$(".input1")[0];
	var searchVal1=searchkuang.value;
	searchkuang.onfocus=function(){
		searchkuang.value="";
	}
	searchkuang.onblur=function(){
		searchVal2=searchkuang.value;
		if(searchVal2==""){
			searchkuang.value=searchVal1;
		}
	}
	// 热搜文字
	var resouWord=$("a",$(".resou")[0])
	for(var i=0;i<resouWord.length;i++){
		if(i==0||i==3||i==5){
			resouWord[i].style.color="#c40000"
		}
	}


	// banner左边部分
	var banleft=$(".banleft",$(".banner")[0])[0];
	var banleli=$("div",banleft);
	var baninner=$(".inner",banleft);
	// 1359
	// 设置隐藏部分高度
	for(var i=0;i<baninner.length;i++){
		var zonglei=$(".zonglei",baninner[i])[0];
		var zlli=$("li",zonglei)
		for(var j=0;j<zlli.length;j++){
			if(j==0||j==2||j==4||j==7){
				zlli[j].style.height=66+"px";
				// zlli[j].style.lineHeight="44px";
			}
		}
	}
	// 块元素隐藏
	for(var i=0;i<banleli.length;i++){
		banleli[i].index=i;
		banleli[i].onmouseover=function(){
			baninner[this.index].style.display="block";
		}
		banleli[i].onmouseout=function(){
			baninner[this.index].style.display="none";
		}
	}


	// banner轮播
    // 通过调节透明度实现动画
    // 获取元素
    var banimg=$("a",$(".banphoto")[0]);
    var banli=$("li",$(".diandian")[0]);
    var banmain=$(".banmain")[0];
    var banbackg=$("div",$(".banbackg")[0]);
    // var next=$("li",$(".next")[0]);
    // 开关
    var flag=true;
    // 设置初始状态
    var banNum=0;
    banimg[0].style.zIndex=1;
    banli[0].style.background="#fff";
    // 自动轮播
    var t=setInterval(moveR,1500)
    // 移上去停止
    banmain.onmouseover=function(){
    	clearInterval(t);
    }
    // 移走后再次轮播
    banmain.onmouseout=function(){
    	t=setInterval(moveR,1500)
    }
    // 点击小点点时选型卡模式
    for(var i=0;i<banli.length;i++){
    	banli[i].index=i;
    	banli[i].onmouseover=function(){
    		if(flag){
    			flag=false;
    			// 我自己写的时候少了清除这一步循环
    		    for(var j=0;j<banli.length;j++){
    			    // banimg[j].style.zIndex=0;
                    animate(banimg[j],{opacity:0});
    			    banli[j].style.background="#a2a2a2";
                    animate(banbackg[j],{opacity:0})
    		    }
    		    // banimg[this.index].style.zIndex=1;
                animate(banimg[this.index],{opacity:1},function(){
                    flag=true;
                });
    	        banli[this.index].style.background="#fff";
                animate(banbackg[this.index],{opacity:1})
    	        // 我自己写的时候忘记的部分
    	        banNum=this.index;
    		}	
    	}
    }
    // // 箭头的左右轮播
    // next[0].onclick=function(){
    //     if(flag){
    //         flag=false;
    //         moveL();
    //     }
    // }
    // next[1].onclick=function(){
    //     if(flag){
    //         flag=false;
    //         moveR();
    //     }
    // }
    // 向右轮播
    function moveR(){
    	banNum++;
    	if(banNum==banimg.length){
    		banNum=0;
    	}
    	for(var i=0;i<banimg.length;i++){
    		// banimg[i].style.zIndex=0;
            animate(banimg[i],{opacity:0});
    		banli[i].style.background="#a2a2a2";
            animate(banbackg[i],{opacity:0})
    	}
    	// banimg[banNum].style.zIndex=1;
        animate(banimg[banNum],{opacity:1},function(){
                flag=true;
            });
    	banli[banNum].style.background="#fff";
        animate(banbackg[banNum],{opacity:1})
    }
    // 向右轮播
    function moveL(){
    	banNum--;
    	if(banNum<0){
    		banNum=banimg.length-1;
    	}
    	for(var i=0;i<banimg.length;i++){
    		// banimg[i].style.zIndex=0;
            animate(banimg[i],{opacity:0});
    		banli[i].style.background="#a2a2a2";
            animate(banbackg[i],{opacity:0});
    	}
    	// banimg[banNum].style.zIndex=1;
        animate(banimg[banNum],{opacity:1},function(){
                flag=true;
            });
    	banli[banNum].style.background="#fff";
        animate(banbackg[banNum],{opacity:1});
    }


    // 517狂欢节图片透明度
    var mayphoto=$(".mayphoto",$(".active")[0])[0];
    var mayimg=$("img",mayphoto);
    for(var i=0;i<mayimg.length;i++){
        mayimg[i].index=i;
        mayimg[i].onmouseover=function(){
            animate(mayimg[this.index],{opacity:0.7})
        }
        mayimg[i].onmouseout=function(){
            animate(mayimg[this.index],{opacity:1})
        }
    }


    // 北京地区专享图片透明度
    var bjphoto=$(".bjphoto",$(".beijing")[0])[0];
    var bjimg=$("img",bjphoto);
    for(var i=0;i<bjimg.length;i++){
        bjimg[i].index=i;
        bjimg[i].onmouseover=function(){
            animate(bjimg[this.index],{opacity:0.8})
        }
        bjimg[i].onmouseout=function(){
            animate(bjimg[this.index],{opacity:1})
        }
    }


    // 热门品牌中间隐藏部分

    // 热门品牌右边透明度
    var hotlist=$(".hotlist",$(".hot_brands")[0])[0];
    var hla=$("a",hotlist)
    var hllogo=$("img",hotlist);
    var hlp=$("p",hotlist);
    var hlpre=$("pre",hotlist);
    for(var i=0;i<hla.length;i++){
        hla[i].index=i;
        hla[i].onmouseover=function(){
            animate(hllogo[this.index],{opacity:0.5});
            hlp[this.index].style.color="#df2727";
            hlpre[this.index].style.color="#df2727";
        }
        hla[i].onmouseout=function(){
            animate(hllogo[this.index],{opacity:1});
            hlp[this.index].style.color="#533333";
            hlpre[this.index].style.color="#999";
        }
    }
    




	// 猜你喜欢图片透明度
	var likesphoto=$(".likesphoto")[0];
	var likesli=$("li",likesphoto);
	var likesimg=$("img",likesphoto)
	for(var i=0;i<likesli.length;i++){
		likesli[i].index=i;
		likesli[i].onmouseover=function(){
            animate(likesimg[this.index],{opacity:0.6});
			// .style.opacity=0.6;
		}
		likesli[i].onmouseout=function(){
            animate(likesimg[this.index],{opacity:1});
			// .style.opacity=1;
		}
	}
    console.log(likesli)














	




})