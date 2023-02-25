var array_apps = [

`

	<div class="application">
		<img src="assets/src/icons/social/facebook.webp">
		<h4>Facebook</h4>
	</div>

	<div class="application">
		<img src="assets/src/icons/social/twitter.png" style="width: 65px;">
		<h4>Twitter</h4>
	</div>

	<div class="application">
		<img src="assets/src/icons/clock.png" style="width: 65px;">
		<h4>Time</h4>
	</div>

	<div class="application">
		<img src="assets/src/icons/notes.png">
		<h4>Notes</h4>
	</div>

<div class="application">
		<img src="assets/src/icons/gallery.jpg">
		<h4>Photos</h4>
	</div>

`,
`


	<div class="application">
		<img src="assets/src/icons/mail.webp" style="width: 65px;">
		<h4>Mail</h4>
	</div>

	<div class="application">
		<img src="assets/src/icons/maps.png">
		<h4>Maps</h4>
	</div>

	<div class="application">
		<img src="assets/src/icons/settings.webp" style="width: 65px;">
		<h4>Settings</h4>
	</div>



`



];


var current__apps = 0;

var app__el = document.querySelector(".applications");

window.onload = function(){
	defaultFun();
	openCallPage(document.querySelector(".call__open__button"),document.querySelector(".call__page"));
	closeCallPage(document.querySelector(".call__page"))
	callButtonPress(document.querySelectorAll(".call__button"));
}

function defaultFun(){
	// by default the first slide
	app__el.innerHTML = array_apps[current__apps];
}

var hammertime = new Hammer(app__el);
hammertime.on('swipeleft', function(ev) {
	console.log(ev);
	app__el.style.transform = 'skewY(-10deg)';
	setTimeout(function(){
		app__el.style.transform = '';
	
		current__apps = 1;
		app__el.innerHTML = array_apps[current__apps];

	},700);

	

});

var newHam = new Hammer(app__el);
newHam.on('swiperight', function(ev) {
	console.log(ev);
	app__el.style.transform = 'skewY(10deg)';
	setTimeout(function(){
		app__el.style.transform = '';
		current__apps = 0;
		app__el.innerHTML = array_apps[current__apps];	
	},700);



});

function openCallPage(button,page){
	button.addEventListener("click",function(){
		page.classList.remove("pageAniClose");		
		page.classList.add("pageAni");
	});
}

function closeCallPage(page){
var closePage = new Hammer(page);
closePage.on('swipeleft', function(ev) {
	page.classList.remove("pageAni");
	page.classList.add("pageAniClose");

});
}

function callButtonPress(button){
	for(let i = 0; i < button.length; i++){
		button[i].addEventListener("click",function(){
			const audio = new Audio();
			audio.src = 'assets/src/button-press-sound.mp3';
			audio.volume = 0.2;
			audio.play();
		});
	}
}