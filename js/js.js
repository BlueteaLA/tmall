$(function(){
	// js
	// 热门品牌
	// var hotbrands=$(".hot_brands")[0];
	// var middle=$(".middle",hotbrands)[0];
	// var hotli=$("li",middle);
	// for(var i=0;i<hotli.length;i++){
	// 	hotli[i].index=i;
	// 	hotli[i].onmouseover=function(){
	// 		hotli[this.index].style.backgroundImage="url('./2016-05-16_233632.jpg')"
	// 	}
	// }
	// console.log(hotli)

	var fashion=$(".fashion")[0]
	var pic=$(".p",fashion)
	for(var i=0;i<pic.length;i++){
		pic[i].index=i;
		pic[i].onmouseover=function(){
			pic[this.index].style.backgroundPosition="40px 20px"
		}
		pic[i].onmouseout=function(){
			pic[this.index].style.backgroundPosition="40px 60px"
		}
	}



	var kids=$(".kids")[0];
	var middlek=$(".middle",kids)[0]
	var rightk=$(".right",kids)[1]
	var li1k=$("li",middlek);
	var li2k=$("li",rightk);
	for(var i=0;i<li1k.length;i++){
		li1k[i].index=i
		li1k[i].onmouseover=function(){
			li1k[this.index].style.backgroundPosition="70px 66px";
		}
		li1k[i].onmouseout=function(){
			li1k[this.index].style.backgroundPosition="90px 66px";
		}
	}
	for(var i=0;i<li2k.length;i++){
		li2k[i].index=i
		li2k[i].onmouseover=function(){
			li2k[this.index].style.backgroundPosition="130px 43px";
		}
		li2k[i].onmouseout=function(){
			li2k[this.index].style.backgroundPosition="150px 43px";
		}
	}



	var outdoors=$(".outdoors")[0];
	var middleo=$(".middle",outdoors)[0]
	var righto=$(".right",outdoors)[1]
	var li1o=$("li",middleo);
	var li2o=$("li",righto);
	for(var i=0;i<li1o.length;i++){
		li1o[i].index=i
		li1o[i].onmouseover=function(){
			li1o[this.index].style.backgroundPosition="70px 76px";
		}
		li1o[i].onmouseout=function(){
			li1o[this.index].style.backgroundPosition="90px 76px";
		}
	}
	for(var i=0;i<li2o.length;i++){
		li2o[i].index=i
		li2o[i].onmouseover=function(){
			li2o[this.index].style.backgroundPosition="130px 43px";
		}
		li2o[i].onmouseout=function(){
			li2o[this.index].style.backgroundPosition="150px 43px";
		}
	}


	var home=$(".home")[0];
	var middleh=$(".middle",home)[0]
	var righth=$(".right",home)[1]
	var li1h=$("li",middleh);
	var li2h=$("li",righth);
	for(var i=0;i<li1h.length;i++){
		li1h[i].index=i
		li1h[i].onmouseover=function(){
			li1h[this.index].style.backgroundPosition="70px 76px";
		}
		li1h[i].onmouseout=function(){
			li1h[this.index].style.backgroundPosition="90px 76px";
		}
	}
	for(var i=0;i<li2h.length;i++){
		li2h[i].index=i
		li2h[i].onmouseover=function(){
			li2h[this.index].style.backgroundPosition="120px 0px";
		}
		li2h[i].onmouseout=function(){
			li2h[this.index].style.backgroundPosition="140px 0px";
		}
	}


	var health=$(".health")[0];
	var middlehe=$(".middle",health)[0]
	var righthe=$(".right",health)[1]
	var li1he=$("li",middlehe);
	var li2he=$("li",righthe);
	for(var i=0;i<li1he.length;i++){
		li1he[i].index=i
		li1he[i].onmouseover=function(){
			li1he[this.index].style.backgroundPosition="76px 70px";
		}
		li1he[i].onmouseout=function(){
			li1he[this.index].style.backgroundPosition="96px 70px";
		}
	}
	for(var i=0;i<li2he.length;i++){
		li2he[i].index=i
		li2he[i].onmouseover=function(){
			li2he[this.index].style.backgroundPosition="128px 46px";
		}
		li2he[i].onmouseout=function(){
			li2he[this.index].style.backgroundPosition="148px 46px";
		}
	}



	var electronics=$(".electronics")[0];
	var middleele=$(".middle",electronics)[0]
	var rightele=$(".right",electronics)[1]
	var li1ele=$("li",middleele);
	var li2ele=$("li",rightele);
	li1ele[1].onmouseover=function(){
		li1ele[1].style.backgroundPosition="86px 70px";
	}
	li1ele[1].onmouseout=function(){
		li1ele[1].style.backgroundPosition="106px 70px";
	}
	li1ele[3].onmouseover=function(){
		li1ele[3].style.backgroundPosition="86px 70px";
	}
	li1ele[3].onmouseout=function(){
		li1ele[3].style.backgroundPosition="106px 70px";
	}
	li1ele[4].onmouseover=function(){
		li1ele[4].style.backgroundPosition="86px 70px";
	}
	li1ele[4].onmouseout=function(){
		li1ele[4].style.backgroundPosition="106px 70px";
	}
	li1ele[5].onmouseover=function(){
		li1ele[5].style.backgroundPosition="86px 70px";
	}
	li1ele[5].onmouseout=function(){
		li1ele[5].style.backgroundPosition="106px 70px";
	}
	li1ele[2].onmouseover=function(){
		li1ele[2].style.backgroundPosition="-20px 0px";
	}
	li1ele[2].onmouseout=function(){
		li1ele[2].style.backgroundPosition="0px 0px";
	}




	// for(var i=0;i<li1ele.length;i++){
	// 	li1ele[i].index=i
	// 	if(i!==0||i!==2){
	// 		li1ele[i].onmouseover=function(){
	// 		    li1ele[this.index].style.backgroundPosition="86px 70px";
	// 	    }
	// 	    li1ele[i].onmouseout=function(){
	// 		    li1ele[this.index].style.backgroundPosition="106px 70px";
	// 	    }
	// 	}else if(i==2){
	// 		// li1ele[i].onmouseover=function(){
	// 		//   li1ele[this.index].style.backgroundPosition="-120px -50px";
	// 	    // }
	// 	    // li1ele[i].onmouseout=function(){
	// 		//   li1ele[this.index].style.backgroundPosition="-200px -50px";
	// 	    // }
	// 	}
	// }
	for(var i=0;i<li2ele.length;i++){
		li2ele[i].index=i
		li2ele[i].onmouseover=function(){
			li2ele[this.index].style.backgroundPosition="78px 60px";
		}
		li2ele[i].onmouseout=function(){
			li2ele[this.index].style.backgroundPosition="88px 80px";
		}
	}


	var beauty=$(".beauty")[0];
	var middleb=$(".middle",beauty)[0]
	var rightb=$(".right",beauty)[1]
	var li1b=$("li",middleb);
	var li2b=$("li",rightb);
	for(var i=0;i<li1b.length;i++){
		li1b[i].index=i
		li1b[i].onmouseover=function(){
			li1b[this.index].style.backgroundPosition="70px 76px";
		}
		li1b[i].onmouseout=function(){
			li1b[this.index].style.backgroundPosition="90px 76px";
		}
	}
	for(var i=0;i<li2b.length;i++){
		li2b[i].index=i
		li2b[i].onmouseover=function(){
			li2b[this.index].style.backgroundPosition="128px 46px";
		}
		li2b[i].onmouseout=function(){
			li2b[this.index].style.backgroundPosition="148px 46px";
		}
	}
	console.log(li1ele)
})