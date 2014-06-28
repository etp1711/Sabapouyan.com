window.onload=function(){
	
var footslide = document.getElementsByClassName('footslide').item(0),
		trainfoot = footslide.getElementsByClassName('trainfoot').item(0),
		listsfoot = footslide.getElementsByClassName('btnsfoot').item(0).getElementsByTagName('li'),
		currentSlide = 0;

	(gotoslide = function (n) {
		if(n>listsfoot.length-1) n=0;
		if(n<0) n=listsfoot.length-1;
		trainfoot.style.left=(-350*n)+'px';
		listsfoot.item(currentSlide).className = '';
		listsfoot.item(n).className = 'active';
		currentSlide=n;
	})(0); // set active of first li

	nextSlide = function(){
		gotoslide(currentSlide+1);
	}

	prvSlide = function(){
		gotoslide(currentSlide-1);
	}

	var autoPlayIv = false;
	(autoPlayStart = footslide.onmouseout = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide, 5000);
	})(); // run auto play

	autoPlayStop = footslide.onmouseover = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}

	footslide.getElementsByClassName('next').item(0).onclick=nextSlide;
	footslide.getElementsByClassName('prv').item(0).onclick=prvSlide;

	for (var i=0; i<listsfoot.length; i++) {
		(function(j){
			listsfoot.item(j).onclick=function(){
				gotoslide(j);
			}
		})(i);
	}



	
	var slideshow = document.getElementsByClassName('slideshow').item(0),
		train = slideshow.getElementsByClassName('train').item(0),
		lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li'),
		currentSlide = 0;

	(go2slide = function (n) {
		if(n>lists.length-1) n=0;
		if(n<0) n=lists.length-1;
		train.style.left=(-900*n)+'px';
		lists.item(currentSlide).className = '';
		lists.item(n).className = 'active';
		currentSlide=n;
	})(0); // set active of first li

	nextSlide = function(){
		go2slide(currentSlide+1);
	}

	prvSlide = function(){
		go2slide(currentSlide-1);
	}

	var autoPlayIv = false;
	(autoPlayStart = slideshow.onmouseout = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide,5000);
	})(); // run auto play

	autoPlayStop = slideshow.onmouseover = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}

	slideshow.getElementsByClassName('next').item(0).onclick=nextSlide;
	slideshow.getElementsByClassName('previous').item(0).onclick=prvSlide;

	for (var i=0; i<lists.length; i++) {
		(function(j){
			lists.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}




























	
}