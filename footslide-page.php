<script type="text/javascript">
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

	nxtSlide = function(){
		gotoslide(currentSlide+1);
	}

	prvSlide = function(){
		gotoslide(currentSlide-1);
	}

	var autoPlayIv = false;
	(autoPlayStart = footslide.onmouseout = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nxtSlide, 5000);
	})(); // run auto play

	autoPlayStop = footslide.onmouseover = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}

	footslide.getElementsByClassName('nxt').item(0).onclick=nxtSlide;
	footslide.getElementsByClassName('prv').item(0).onclick=prvSlide;

	for (var i=0; i<listsfoot.length; i++) {
		(function(j){
			listsfoot.item(j).onclick=function(){
				gotoslide(j);
			}
		})(i);
	}
}
</script>