//solving AnimationFrame
(function() {
   	 var lastTime = 0;
   	 var vendors = ['ms', 'moz', 'webkit', 'o'];
   	 for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
   	     window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
   	     window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
   	                                || window[vendors[x]+'CancelRequestAnimationFrame'];
   	 }
 
    		if (!window.requestAnimationFrame)
    		    window.requestAnimationFrame = function(callback, element) {
    		        var currTime = new Date().getTime();
    		        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    		        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
    		          timeToCall);
    		        lastTime = currTime + timeToCall;
    		        return id;
    		    };
 
    		if (!window.cancelAnimationFrame)
    		    window.cancelAnimationFrame = function(id) {
   	        clearTimeout(id);
     		};
}());
//..................

window.onload = init;

var imgsrc = ['img/1.png',
				'img/2.png',
				'img/3.png',
				'img/4.png',
				'img/5.png',
				'img/6.png',
				'img/7.png',
				'img/8.png',
				'img/9.png'];

var distA = [120,0,240,360,480,600,720,840,-120];
var distB = [600,720,840,-120,240,480,0,120,360];
var distC = [0,840,600,360,120,720,-120,240,480];
var distD = [-120,600,720,0,120,240,840,360,480];
var distE = [360,240,480,840,0,120,600,720,-120];

img1 = new Image();
img2 = new Image();
img3 = new Image();
img4 = new Image();
img5 = new Image();
img6 = new Image();
img7 = new Image();
img8 = new Image();
img9 = new Image();

img1.src = imgsrc[0];
img2.src = imgsrc[1];
img3.src = imgsrc[2];
img4.src = imgsrc[3];
img5.src = imgsrc[4];
img6.src = imgsrc[5];
img7.src = imgsrc[6];
img8.src = imgsrc[7];
img9.src = imgsrc[8];

var reel1 = 45;
var reel2 = 45;
var reel3 = 45;
var reel4 = 45;
var reel5 = 45;

var size = 120;
distLeft = 120;
var reels = 0; 
var animating1;
var winnner = false;

var wspot1 = 0;
var wspot2 = 0;
var wspot3 = 0;
var wspot4 = 0;
var wspot5 = 0;


		function draw1(){
			var canvas1 = document.getElementById('canvas1').getContext("2d");

			canvas1.clearRect(0,0,600,360);
			canvas1.save();

			canvas1.drawImage(img1,distLeft*0,distA[0],size,size);
			canvas1.drawImage(img2,distLeft*0,distA[1],size,size);
			canvas1.drawImage(img3,distLeft*0,distA[2],size,size);
			canvas1.drawImage(img4,distLeft*0,distA[3],size,size);
			canvas1.drawImage(img5,distLeft*0,distA[4],size,size);
			canvas1.drawImage(img6,distLeft*0,distA[5],size,size);
			canvas1.drawImage(img7,distLeft*0,distA[6],size,size);
			canvas1.drawImage(img8,distLeft*0,distA[7],size,size);
			canvas1.drawImage(img9,distLeft*0,distA[8],size,size);

			canvas1.drawImage(img1,distLeft*1,distB[0],size,size);
			canvas1.drawImage(img2,distLeft*1,distB[1],size,size);
			canvas1.drawImage(img3,distLeft*1,distB[2],size,size);
			canvas1.drawImage(img4,distLeft*1,distB[3],size,size);
			canvas1.drawImage(img5,distLeft*1,distB[4],size,size);
			canvas1.drawImage(img6,distLeft*1,distB[5],size,size);
			canvas1.drawImage(img7,distLeft*1,distB[6],size,size);
			canvas1.drawImage(img8,distLeft*1,distB[7],size,size);
			canvas1.drawImage(img9,distLeft*1,distB[8],size,size);


			canvas1.drawImage(img1,distLeft*2,distC[0],size,size);
			canvas1.drawImage(img2,distLeft*2,distC[1],size,size);
			canvas1.drawImage(img3,distLeft*2,distC[2],size,size);
			canvas1.drawImage(img4,distLeft*2,distC[3],size,size);
			canvas1.drawImage(img5,distLeft*2,distC[4],size,size);
			canvas1.drawImage(img6,distLeft*2,distC[5],size,size);
			canvas1.drawImage(img7,distLeft*2,distC[6],size,size);
			canvas1.drawImage(img8,distLeft*2,distC[7],size,size);
			canvas1.drawImage(img9,distLeft*2,distC[8],size,size);

			canvas1.drawImage(img1,distLeft*3,distD[0],size,size);
			canvas1.drawImage(img2,distLeft*3,distD[1],size,size);
			canvas1.drawImage(img3,distLeft*3,distD[2],size,size);
			canvas1.drawImage(img4,distLeft*3,distD[3],size,size);
			canvas1.drawImage(img5,distLeft*3,distD[4],size,size);
			canvas1.drawImage(img6,distLeft*3,distD[5],size,size);
			canvas1.drawImage(img7,distLeft*3,distD[6],size,size);
			canvas1.drawImage(img8,distLeft*3,distD[7],size,size);
			canvas1.drawImage(img9,distLeft*3,distD[8],size,size);

			canvas1.drawImage(img1,distLeft*4,distE[0],size,size);
			canvas1.drawImage(img2,distLeft*4,distE[1],size,size);
			canvas1.drawImage(img3,distLeft*4,distE[2],size,size);
			canvas1.drawImage(img4,distLeft*4,distE[3],size,size);
			canvas1.drawImage(img5,distLeft*4,distE[4],size,size);
			canvas1.drawImage(img6,distLeft*4,distE[5],size,size);
			canvas1.drawImage(img7,distLeft*4,distE[6],size,size);
			canvas1.drawImage(img8,distLeft*4,distE[7],size,size);
			canvas1.drawImage(img9,distLeft*4,distE[8],size,size);

			if (winnner === true) {
				canvas1.moveTo(60, wspot1);
				canvas1.lineTo(180, wspot2);
				canvas1.lineTo(300, wspot3);
				canvas1.lineTo(420, wspot4);
				canvas1.lineTo(540, wspot5);
				canvas1.lineWidth = 15;
    		  	canvas1.strokeStyle = '#00ffd5';
    		  	canvas1.lineCap = 'round';
    		  	canvas1.stroke();
			};

			update(distA,reel1);
			update(distB,reel2);
			update(distC,reel3);
			update(distD,reel4);
			update(distE,reel5);

			canvas1.restore();
			
			if ($('#canvas1').hasClass('working')) {
				animating1 = window.requestAnimationFrame(draw1);
			};
		}

		function update(dist, reel){
			for(var i = 0; i < dist.length; i++){
				if (dist[i] >= 841){
					dist[i] = -120
				}else{
					dist[i] += reel;
					coef = Math.round(dist[i]/30);
					dist[i] += (30*coef)-dist[i];
				}
			}
		}

function init() {
	draw1();
	reels = 0;
	reel1 = 45;
	reel2 = 45;
	reel3 = 45;
	reel4 = 45;
	reel5 = 45;
}

function animating(){
	animating1 = window.requestAnimationFrame(draw1);
	$('#canvas1').toggleClass('working');
	setTimeout('stopAnimation1();', getTime());
	setTimeout('stopAnimation2();', getTime());
	setTimeout('stopAnimation3();', getTime());
	setTimeout('stopAnimation4();', getTime());
	setTimeout('stopAnimation5();', getTime());

	credit -= bet;
	$('#credit').text(credit);
	$('#play').css('visibility', 'hidden');

	winnner = false;
}

function doItWork(){
	if ($('#canvas1').hasClass('working')) {
		animating1 = window.requestAnimationFrame(draw1);
	};
}

function stopAnimation1(){
	reel1 = 0;
	reels ++;
	for(var i = 0; i < distA.length; i++){
		coef = Math.round(distA[i]/120);
		distA[i] += (120*coef)-distA[i];
	}
	reelsMotion();
}

function stopAnimation2(){
	reel2 = 0;
	reels ++;
	for(var i = 0; i < distB.length; i++){
		coef = Math.round(distB[i]/120);				
		distB[i] += (120*coef)-distB[i];
	}
	reelsMotion();
}

function stopAnimation3(){
	reel3 = 0;
	reels ++;
	for(var i = 0; i < distC.length; i++){
		coef = Math.round(distC[i]/120);				
		distC[i] += (120*coef)-distC[i];
	}
	reelsMotion();
}

function stopAnimation4(){
	reel4 = 0;
	reels ++;
	for(var i = 0; i < distD.length; i++){
		coef = Math.round(distD[i]/120);				
		distD[i] += (120*coef)-distD[i];
	}
	reelsMotion();
}

function stopAnimation5(){
	reel5 = 0;
	reels ++;
	for(var i = 0; i < distE.length; i++){
		coef = Math.round(distE[i]/120);				
		distE[i] += (120*coef)-distE[i];
	}
	reelsMotion();
}

function reelsMotion(){
	if (reels === 5) {
		$('#canvas1').toggleClass('working');
		cancelAnimationFrame(animating1);
		result();
		playBtn();
	};

}

function playBtn(){
	if (credit < bet) {
			$('#play').css('visibility', 'hidden');
		}else{
			$('#play').css('visibility', 'visible');				
	};
}

function getTime(){
	return Math.floor(Math.random()*3000)+1000;
}

function result(){
	for (var z = 0; z <= distA.length; z++) {
		for (var z = 0; z <= distB.length; z++) {
			for (var z = 0; z <= distC.length; z++) {
				for (var z = 0; z <= distD.length; z++) {
					for (var z = 0; z <= distE.length; z++) {
						if (distA[z] === distB[z] && distC[z] === distD[z] && distE[z] === distA[z]){
							if (distA[z] >= 0 && distA[z] <= 119) {
								credit += bet*25;
								$('#credit').text(credit);
								winnner = true
								drawPrizeData(60);
							}else if (distA[z] >= 120 && distA[z] <= 239) {
								credit += bet*100;
								$('#credit').text(credit);
								winnner = true
								drawPrizeData(180);
							}else if (distA[z] >= 240 && distA[z] <= 359) {
								credit += bet*25;
								$('#credit').text(credit);
								winnner = true
								drawPrizeData(300);
							}else{};

						}else if (distA[z] === 0 && distB[z] === 120 && distC[z] === 240 && distD[z] === 120 && distE[z] === 0){
							credit += bet*75;
							$('#credit').text(credit);
							winnner = true
							wspot1 = wspot5 = 60;
							wspot2 = wspot4 = 180;
							wspot3 = 300;

						}else if (distA[z] === 240 && distB[z] === 120 && distC[z] === 0 && distD[z] === 120 && distE[z] === 240){
							credit += bet*75;
							$('#credit').text(credit);
							winnner = true
							wspot1 = 60;
							wspot2 = wspot4 = 180;
							wspot3 = 300;

						}else{
						};
					};
				};
			};
		};
	};

	init();
}

function drawPrizeData(where) {
	wspot1 = wspot2 = wspot3 = wspot4 = wspot5 = where;
}

$(document).on('click','#play',animating);	
$(document).on('click','#plus',plusbet);
$(document).on('click','#minus',minusbet);

//--- beting logic

var credit = 20000;
var bet = 5;
var betline = 1;

function plusbet(){
	playBtn();
	if (bet != 50) {
		betline++;
		bet += 5;
		$('#bet').text(bet);
		$('#betline').text(betline);
		playBtn();
	};
}

function minusbet(){
	playBtn();
	if (bet != 5) {
		bet -= 5;
		betline--;
		$('#bet').text(bet);
		$('#betline').text(betline);
		playBtn();
	};
}


		