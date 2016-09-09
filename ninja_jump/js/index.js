var go=1;
window.onload = function() {
	var mp3 = document.getElementById("mp3");
	mp3.play();
	var anima1 = document.getElementById("qalla");
	var anima2 = document.getElementById("qarakqi");
	var anima3 = document.getElementById("ormanlik");
	
	
}

function play() {
	if(go==1){
	var mp3 = document.getElementById("mp3");
	var music1 = document.getElementById("music");
	music.style.background = "url('img/music_off.png')";
	mp3.pause();
	go=2;
	}
	else if(go==2){
		var mp3 = document.getElementById("mp3");
		var music1 = document.getElementById("music");
		music.style.background = "url('img/music_on.png')";
		mp3.play();
		go=1;
	}

}
function mouseoclick() {
	var key = document.getElementById("key");
	var mouse = document.getElementById("mause");
	mouse.innerHTML = 1;
	if (mouse.innerHTML == 1) {
		mouse.style.background = "black";
		key.style.background = "white";
	}
}
function keyboard() {
	var mouse = document.getElementById("mause");
	var key = document.getElementById("key");
	key.innerHTML = 2;
	if (key.innerHTML == 2) {
		key.style.background = "black";
		mouse.style.background = "white";
	}

}


function cipil() {
	var mouse = document.getElementById("mause");
	var key = document.getElementById("key");
	if(mouse.innerHTML == 1){
		location.replace("html/cipil_mouse.html");
	}
	if(key.innerHTML == 2){
		location.replace("html/cipil_key.html");
	}
}