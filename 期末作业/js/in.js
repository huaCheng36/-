var nav = btn.children;
	var i = 0;

	function move() {
		i++;
		if(i == 5) {
			i = 0;
		}
		nav_change();
	}

	function nav_change() {
		banner.style.top = -100 * i + "%";
		for(var j = 0; j < nav.length; j++) {
			nav[j].style.backgroundImage="url(img/nav_df.png)";
		}
		
			nav[i].style.backgroundImage="url(img/nav_ck.png)";
       
	}
	for(var j = 0; j < nav.length; j++) {
		nav[j].index = j;
		nav[j].onclick = function() {
			i = this.index;
			nav_change();
		}
	}

	function b1() {
		i = 1;
		nav_change();

	}

	function b2() {
		i = 2;
		nav_change();

	}

	function b3() {
		i = 3;
		nav_change();

	}

	function b4() {

		i = 4;
		
		nav_change();

	}
	var s = 1;

	function snav() {
		i = s;
		nav_change();
		s++;
		if(s == 5) {
			s = 0;
		}
	}

	if(window.addEventListener) {
		window.addEventListener('DOMMouseScroll', wheel, false);
	}
	window.onmousewheel = document.onmousewheel = wheel;

	var throldHold = 200; //两次scroll事件触发之间最小的事件间隔
	function wheel(event) {
		if(arguments.callee.timer) clearTimeout(arguments.callee.timer);
		arguments.callee.timer = setTimeout(function() {
			var delta = 0;
			if(!event) event = window.event;
			if(event.wheelDelta) {
				delta = event.wheelDelta / 120;

				if(window.opera) delta = -delta;
			} else if(event.detail) {
				delta = -event.detail / 3;
			}
			if(delta) {
				handle(delta)
			};
		}, throldHold)
	}

	function handle(delta) {
		if(delta < 0) {
			snav();
		} else {
			switch(i) {
				case 1:
					i = 0;
					nav_change();

					break;
				case 2:
					i = 1;
					nav_change();

					break;
				case 3:
					i = 2;
					nav_change();

					break;
				case 4:
					i = 3;
					nav_change();

					break;
			}
		}
	}
var jianL = document.getElementById("jianL");
	
   function cx(){
   		jianL.style.display="block";
   }
	function xs(){
   	jianL.style.display="none";
   }



	var lx1 = document.getElementById("lx1");
	var lx2 = document.getElementById("lx2");
	var lx3 = document.getElementById("lx3");
	var lxEwm = document.getElementById("lxEwm");
	lx1.onmouseover = function() {
		lxEwm.src = "img/b站.png";
		lxEwm.style.display = "block";

	}

	lx1.onmouseout = function() {
		lxEwm.style.display = "none";
	}
	lx2.onmouseover = function() {

		lxEwm.src = "img/QQ.png";
		lxEwm.style.display = "block";

	}

	lx2.onmouseout = function() {
		lxEwm.style.display = "none";
	}
	lx3.onmouseover = function() {

		lxEwm.src = "img/微信联系.png";
		lxEwm.style.display = "block";

	}

	lx3.onmouseout = function() {
		lxEwm.style.display = "none";
	}
	
	
	
	
	
	window.onload = function() {
    var swiper = new Swiper('.swiper-container',{
			pagination: {
			    el: '.swiper-pagination',
		    	clickable: true,
			    renderBullet: function (index, className) {
			        return '<span class="' + className + '"><image src="img/s0' + ( index  + 1 ) + '.jpg"></span>';
		    	},
	       },
	});
  }
	
	var slogan = document.getElementById("slogan");
    var slogan2 = document.getElementById("slogan2");
	
  
   
function aboutMe(){
    
    if(i==0){
        i=1;
//      slogan.style.height="100px";
        slogan2.innerHTML="你好,我叫孙华成。";
    } else {
        i=0;
        slogan.style.height="50px";
        slogan2.innerHTML="总会有地上的生灵，敢于直面雷霆的威光！";
    }
    
}
function aboutMe1(){
    
   
        slogan2.innerHTML="男";
    
    
}
function aboutMe2(){
    
   
        slogan2.innerHTML="保密";
    
    
}
    
    function aboutMe3(){
    
        slogan2.innerHTML="11.16";
   
    
}
    
    function aboutMe4(){
    
    
        slogan2.innerHTML="天蝎座";
    
}
    
    function aboutMe5(){
    
   
        slogan2.innerHTML="185cm";
    
    
}
    
    function aboutMe6(){
     slogan2.innerHTML="打原神";
   
    
}
    
    function aboutMe7(){
   
        slogan.style.height="100px";
        slogan2.innerHTML="这个废柴能熟练掌握面向百度编程、精通Word、Excel、PS等软件的安装于卸载;熟练掌握VB、C++、SQL、java等单词的拼写；熟悉Win7、Linux、Android、Ios等操作系统的开关机。";
    
    
}