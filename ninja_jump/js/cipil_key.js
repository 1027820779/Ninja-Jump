var go = true;
var g = true;
var m = true;
var mm = true;
var n = true;
var nn = true;
var xx = true;
var l = true;
var r = true;
var ran_num;
var kimay, ax;
var g_wall;
var t_r_timer;
var t_l_timer;
var ff = true;
window.onload = function() {
	var ninja = document.getElementById("ninja");
	var tag_music = document.getElementById("tag_music");
	if (go == true) {
		tag_music.play();
	}
	window.onkeydown = function() {
		var ninja_left = parseInt(window.getComputedStyle(ninja).left);
		// ninja ning ong solga sakrax tagxiki
		if (ninja_left > 63 && ninja_left < 506) {
			l = false;
			r = false;
		}
		if (ninja_left >= 506) {
			l = true;
		}
		if (ninja_left <= 63) {
			r = true;
		}
		var key = event.keyCode;
		var jumpmusic = document.getElementById("jum_mp3");
		var step = document.getElementById("step_mp3");
		if (key == 37) {
			if (l == true) {
				if (g == true) {
					if (nn == true) {
						jumpmusic.play();
						nn = false;
						n = true;
					}
					var ninja_left = parseInt(window.getComputedStyle(ninja).left);
					if (ninja_left <= 63) {
						ninja.style.left = 63 + "px";
						ninja.style.background = "url('../img/leftwalk.gif')";
					} else {
						t_r_timer = setInterval(
								function() {
									if (xx == true) {
										ninja_left -= 4;
										ninja.style.left = ninja_left + "px";
										if (ninja_left > 63 && ninja_left < 506) {
											ninja.style.background = "url('../img/move1.gif')";
										}
										if (ninja_left <= 63) {
											clearInterval(t_r_timer);
											ninja.style.background = "url('../img/leftwalk.gif')";
											step.play();

										}
									}
								}, 5);
					}
				}
			}
		}
		if (key == 39) {
			if (r == true) {
				if (g == true) {
					if (n == true) {
						jumpmusic.play();
						n = false;
						nn = true;
					}
					var ninja_left = parseInt(window.getComputedStyle(ninja).left);
					if (ninja_left >= 506) {
						ninja.style.left = 506 + "px";
						ninja.style.background = "url('../img/rightwalk.gif')";
					} else {
						t_l_timer = setInterval(
								function() {
									if (xx == true) {
										ninja_left += 4;
										ninja.style.left = ninja_left + "px";
										if (ninja_left > 63 && ninja_left < 506) {
											ninja.style.background = "url('../img/move1.gif')";
										}
										if (ninja_left >= 506) {
											clearInterval(t_l_timer);
											ninja.style.background = "url('../img/rightwalk.gif')";
											step.play();
										}
									}
								}, 5);
					}
				}
			}
		}
	}

	// animation all====asti sipil
	// tam==============================================
	var asti = document.getElementById("asti");
	var asti_top = parseInt(window.getComputedStyle(asti).top);

	var asti_go = setInterval(function() {
		asti_top += 5;
		asti.style.top = asti_top + "px";
		if (asti_top >= 960) {
			clearInterval(asti_go);
		}
	}, 10);

	// ong sol tam animation
	var leftwall = document.getElementById("left");
	var rightwall = document.getElementById("right");
	var l_w = 0;
	var r_w = 0;
	var s_b = document.getElementById("in");
	var i = 0;
	g_wall = setInterval(function() {
		if (g == true) {
			i++;
			l_w += 5;
			r_w += 5;// background-position-y: -41px;
			leftwall.style.backgroundPositionY = l_w + "px";
			rightwall.style.backgroundPositionY = r_w + "px";
			s_b.value = i;

		}

	}, 4)

	// random san hasillap andin 4 hil jisimga harkat biriman

	var con_timer = setInterval(function() {
		if (g == true) {
			ran_num = Math.floor(Math.random() * 6) + 1;
			// 1 bolsa sol tarap = 2 bolsa ong tarap
			ran_side = Math.floor(Math.random() * 2) + 1;
			// console.log(ran_side);
			if (ran_num == 1) {
				zanjir();
			}
			if (ran_num == 2) {
				kuruk();
			}
			if (ran_num == 3) {
				tusuk(ran_side);
			}
			if (ran_num == 4) {
				qawandaz(ran_side);
			}
			if (ran_num == 5) {
				fox(ran_side);
			}
			if (ran_num == 6) {
				bird(ran_side);
			}
		}
	}, 1200);
	// zanjir move
	function zanjir() {
		var chain = document.getElementById("chain");
		var ch_t = parseInt(window.getComputedStyle(chain).top);
		var ch_timer = setInterval(function() {
			if (g == true) {
				ch_t += 5;
				chain.style.top = ch_t + "px";
				if (ch_t == 970) {
					clearInterval(ch_timer);
					chain.style.top = -175 + "px";
				}

			}
		}, 4);
	}
	// kuruk move
	function kuruk() {
		var kuruk = document.getElementById("bridge");
		var monster = document.getElementById("monster");
		var ku_t = parseInt(window.getComputedStyle(bridge).top);
		var mo_t = parseInt(window.getComputedStyle(monster).top);
		var mo_h = parseInt(window.getComputedStyle(monster).height);
		if (ran_side == 1) {
			monster.style.left = 63 + "px";
			monster.style.background = "url('../img/toright.gif')";
		}
		if (ran_side == 2) {
			monster.style.left = 505 + "px";
			monster.style.background = "url('../img/toleft.gif')";
		}
		var mo_l = parseInt(window.getComputedStyle(monster).left);
		var ku_timer = setInterval(
				function() {
					if (g == true) {
						ku_t += 5;
						if (ran_side == 1) {
							mo_l += 2;
						}
						if (ran_side == 2) {
							mo_l -= 2;
						}

						kuruk.style.top = ku_t + "px";

						monster.style.left = mo_l + "px";
						monster.style.top = ku_t - mo_h + "px";

						var monster_l = parseInt(window
								.getComputedStyle(monster).left);
						var monster_t = parseInt(window
								.getComputedStyle(monster).top);
						var monster_h = parseInt(window
								.getComputedStyle(monster).height);
						var monster_w = parseInt(window
								.getComputedStyle(monster).width);
						// console.log(monster_l,monster_t,monster_h,monster_w);
						var ninja_l = parseInt(window.getComputedStyle(ninja).left);
						var ninja_t = parseInt(window.getComputedStyle(ninja).top);
						var ninja_h = parseInt(window.getComputedStyle(ninja).height);
						var ninja_w = parseInt(window.getComputedStyle(ninja).width);

						var kuruk_l = parseInt(window.getComputedStyle(kuruk).left);
						var kuruk_t = parseInt(window.getComputedStyle(kuruk).top);
						var kuruk_h = parseInt(window.getComputedStyle(kuruk).height);
						var kuruk_w = parseInt(window.getComputedStyle(kuruk).width);
						// console.log(kuruk_l,kuruk_t,kuruk_w,kuruk_h);

						var s_b = document.getElementById("in");
						var amali_b = document.getElementById("amali");
						var b_b = document.getElementById("best");
						var fall_show = document.getElementById("fall");
						var sh_b = document.getElementById("showbox");

						var leftwall = document.getElementById("left");
						var rightwall = document.getElementById("right");

						if (ninja_l + 63 > monster_l
								&& ninja_l + 63 <= monster_l + monster_w
								&& ninja_t >= monster_t
								&& ninja_t <= monster_t + monster_h) {
							ff = false;
							var step = document.getElementById("step_mp3");
							step.pause();
							var fall_music = document
									.getElementById("falldown");
							fall_music.play();

							window.clearInterval(g_wall);
							window.clearInterval(ku_timer);

							var kk = 0;
							var g_wall1 = setInterval(
									function() {
										kk++;
										l_w -= 7;
										r_w -= 7;
										kuruk_t -= 7;
										leftwall.style.backgroundPositionY = l_w
												+ "px";
										rightwall.style.backgroundPositionY = r_w
												+ "px";
										kuruk.style.top = kuruk_t + "px";
										monster.style.top = kuruk_t - monster_h
												+ "px";
										if (kk == 250) {
											clearInterval(g_wall1);
										}
										// console.log(kk);
									}, 5);

							window.clearInterval(t_r_timer);
							window.clearInterval(t_l_timer);

							var fall_timer = setInterval(
									function() {
										ninja_t += 5;
										if (ninja_l > 60 && ninja_l <= 253) {
											ninja_l += 10;
											ninja.style.background = "url(../img/leftflown.gif)";
										}
										if (ninja_l > 266 && ninja_l <= 507) {
											ninja_l -= 10;
											ninja.style.background = "url(../img/rightflown.gif)";
										}
										ninja.style.top = ninja_t + "px";
										ninja.style.left = ninja_l + "px";
									}, 30)

							sh_b.style.display = "none";
							setTimeout(function() {
								fall_show.style.display = "block";
							}, 2000);
							amali_b.value = s_b.value;
							b_b.value = s_b.value * 2;
							// setTimeout(function(){g=false;},2000);

							g = false;

						}

						if (ku_t == 970) {
							clearInterval(ku_timer);
							monster.style.top = -175 + "px";
							kuruk.style.top = -175 + "px";
						}

					}
					if (g == false) {
						// console.log(trap);
						if (ran_side == 1) {
							monster.style.background = "url('../img/toright_stop.png')";
						}
						if (ran_side == 2) {
							monster.style.background = "url('../img/toleft_stop.png')";
						}
					}
				}, 4)
	}
	// tusuk move
	function tusuk() {
		var tusuk = document.getElementById("hinder");
		var ninja = document.getElementById("ninja");
		var tu_t = parseInt(window.getComputedStyle(hinder).top);
		var tu_timer = setInterval(
				function() {
					if (g == true) {
						tu_t += 5;
						if (ran_side == 1) {
							tusuk.style.left = 0 + "px";
							tusuk.style.background = "url('../img/leftasmatusuk.png')";
						}
						if (ran_side == 2) {
							tusuk.style.left = 491 + "px";
							tusuk.style.background = "url('../img/rightasmatusuk.png')";
						}
						tusuk.style.top = tu_t + "px";
						if (tu_t == 970) {
							clearInterval(tu_timer);
							tusuk.style.top = -175 + "px";
						}

						var tusuk_l = parseInt(window.getComputedStyle(tusuk).left);
						var tusuk_t = parseInt(window.getComputedStyle(tusuk).top);
						var tusuk_h = parseInt(window.getComputedStyle(tusuk).height);
						var tusuk_w = parseInt(window.getComputedStyle(tusuk).width);

						var ninja_l = parseInt(window.getComputedStyle(ninja).left);
						var ninja_t = parseInt(window.getComputedStyle(ninja).top);
						var ninja_h = parseInt(window.getComputedStyle(ninja).height);
						var ninja_w = parseInt(window.getComputedStyle(ninja).width);

						// ninja tusuk ka tigixtimu yok
						var s_b = document.getElementById("in");
						var amali_b = document.getElementById("amali");
						var b_b = document.getElementById("best");
						var fall_show = document.getElementById("fall");
						var sh_b = document.getElementById("showbox");

						var leftwall = document.getElementById("left");
						var rightwall = document.getElementById("right");

						if (ninja_l + 63 > tusuk_l
								&& ninja_l + 63 <= tusuk_l + tusuk_w
								&& ninja_t >= tusuk_t
								&& ninja_t <= tusuk_t + tusuk_h) {
							ff = false;
							var step = document.getElementById("step_mp3");
							step.pause();
							var fall_music = document
									.getElementById("falldown");
							fall_music.play();

							window.clearInterval(g_wall);
							window.clearInterval(tu_timer);

							var kk = 0;
							var g_wall1 = setInterval(
									function() {
										kk++;
										l_w -= 7;
										r_w -= 7;
										tusuk_t -= 7;
										leftwall.style.backgroundPositionY = l_w
												+ "px";
										rightwall.style.backgroundPositionY = r_w
												+ "px";
										tusuk.style.top = tusuk_t + "px";
										if (kk == 250) {
											clearInterval(g_wall1);
										}
										// console.log(kk);
									}, 5);

							window.clearInterval(t_r_timer);
							window.clearInterval(t_l_timer);

							var fall_timer = setInterval(
									function() {
										ninja_t += 5;
										if (ninja_l > 60 && ninja_l <= 253) {
											ninja_l += 10;
											ninja.style.background = "url(../img/leftflown.gif)";
										}
										if (ninja_l > 266 && ninja_l <= 507) {
											ninja_l -= 10;
											ninja.style.background = "url(../img/rightflown.gif)";
										}
										ninja.style.top = ninja_t + "px";
										ninja.style.left = ninja_l + "px";
									}, 30)

							sh_b.style.display = "none";
							setTimeout(function() {
								fall_show.style.display = "block";
							}, 2000);
							amali_b.value = s_b.value;
							b_b.value = s_b.value * 2;
							// setTimeout(function(){g=false;},2000);

							g = false;
							// alert("ok");
						}

					}
				}, 4)
	}
	// qawandaz move
	function qawandaz() {
		var qawandaz = document.getElementById("knight");
		var ninja = document.getElementById("ninja");
		var qa_t = parseInt(window.getComputedStyle(knight).top);
		var qa_timer = setInterval(
				function() {
					if (g == true) {
						qa_t += 6;
						var trap = ran_side;
						if (ran_side == 1) {
							qawandaz.style.left = 63 + "px";
							qawandaz.style.background = "url('../img/hoursleft.gif')";
						}
						if (ran_side == 2) {
							qawandaz.style.left = 459 + "px";
							qawandaz.style.background = "url('../img/hoursright.gif')";
						}
						qawandaz.style.top = qa_t + "px";
						if (qa_t == 970) {
							clearInterval(qa_timer);
							qawandaz.style.top = -175 + "px";
						}
						var qawandaz_l = parseInt(window
								.getComputedStyle(qawandaz).left);
						var qawandaz_t = parseInt(window
								.getComputedStyle(qawandaz).top);
						var qawandaz_h = parseInt(window
								.getComputedStyle(qawandaz).height);
						var qawandaz_w = parseInt(window
								.getComputedStyle(qawandaz).width);

						var ninja_l = parseInt(window.getComputedStyle(ninja).left);
						var ninja_t = parseInt(window.getComputedStyle(ninja).top);
						var ninja_h = parseInt(window.getComputedStyle(ninja).height);
						var ninja_w = parseInt(window.getComputedStyle(ninja).width);

						var s_b = document.getElementById("in");
						var amali_b = document.getElementById("amali");
						var b_b = document.getElementById("best");
						var fall_show = document.getElementById("fall");
						var sh_b = document.getElementById("showbox");

						var leftwall = document.getElementById("left");
						var rightwall = document.getElementById("right");

						if ((ninja_l >= qawandaz_l
								&& ninja_l <= qawandaz_l + qawandaz_w || ninja_l
								+ ninja_w >= qawandaz_l
								&& ninja_l + ninja_w <= qawandaz_l + qawandaz_w)
								&& ninja_t >= qawandaz_t
								&& ninja_t <= qawandaz_t + qawandaz_h) {
							ff = false;
							var step = document.getElementById("step_mp3");
							step.pause();
							var fall_music = document
									.getElementById("falldown");
							fall_music.play();

							window.clearInterval(g_wall);
							window.clearInterval(qa_timer);

							var kk = 0;
							var g_wall1 = setInterval(
									function() {
										kk++;
										l_w -= 7;
										r_w -= 7;
										qawandaz_t -= 7;
										leftwall.style.backgroundPositionY = l_w
												+ "px";
										rightwall.style.backgroundPositionY = r_w
												+ "px";
										qawandaz.style.top = qawandaz_t + "px";
										if (kk == 250) {
											clearInterval(g_wall1);
										}
										// console.log(kk);
									}, 5);

							window.clearInterval(t_r_timer);
							window.clearInterval(t_l_timer);

							var fall_timer = setInterval(
									function() {
										ninja_t += 5;
										if (ninja_l > 60 && ninja_l <= 253) {
											ninja_l += 10;
											ninja.style.background = "url(../img/leftflown.gif)";
										}
										if (ninja_l > 266 && ninja_l <= 507) {
											ninja_l -= 10;
											ninja.style.background = "url(../img/rightflown.gif)";
										}
										ninja.style.top = ninja_t + "px";
										ninja.style.left = ninja_l + "px";
									}, 30)

							sh_b.style.display = "none";
							setTimeout(function() {
								fall_show.style.display = "block";
							}, 2000);
							amali_b.value = s_b.value;
							b_b.value = s_b.value * 2;
							// setTimeout(function(){g=false;},2000);

							g = false;
						}

					}
					if (g == false) {
						// console.log(trap);
						if (ran_side == 1) {
							qawandaz.style.background = "url('../img/hoursleft_stop.png')";
						}
						if (ran_side == 2) {
							qawandaz.style.background = "url('../img/hoursright_stop.png')";
						}
					}
				}, 4)
	}
	
	// fox move
	function fox() {
		var fox = document.getElementById("fox");
		var ninja = document.getElementById("ninja");
		var fo_t = parseInt(window.getComputedStyle(fox).top);
		var fo_timer = setInterval(
				function() {
					if (g == true) {
						fo_t += 5;
						var trap = ran_side;
						if (ran_side == 1) {
							fox.style.left = 63 + "px";
							fox.style.background = "url('../img/mo_left-walk.gif')";
						}
						if (ran_side == 2) {
							fox.style.left = 543 + "px";
							fox.style.background = "url('../img/mo_right-walk.gif')";
						}
						fox.style.top = fo_t + "px";
						if (fo_t == 970) {
							clearInterval(fo_timer);
							fox.style.top = -175 + "px";
						}
						var fox_l = parseInt(window
								.getComputedStyle(fox).left);
						var fox_t = parseInt(window
								.getComputedStyle(fox).top);
						var fox_h = parseInt(window
								.getComputedStyle(fox).height);
						var fox_w = parseInt(window
								.getComputedStyle(fox).width);

						var ninja_l = parseInt(window.getComputedStyle(ninja).left);
						var ninja_t = parseInt(window.getComputedStyle(ninja).top);
						var ninja_h = parseInt(window.getComputedStyle(ninja).height);
						var ninja_w = parseInt(window.getComputedStyle(ninja).width);

						var s_b = document.getElementById("in");
						var amali_b = document.getElementById("amali");
						var b_b = document.getElementById("best");
						var fall_show = document.getElementById("fall");
						var sh_b = document.getElementById("showbox");

						var leftwall = document.getElementById("left");
						var rightwall = document.getElementById("right");

						if ((ninja_l >= fox_l
								&& ninja_l <= fox_l - fox_w) || (ninja_l
								+ ninja_w >= fox_l
								&& ninja_l - ninja_w <= fox_l - fox_w)
								&& (ninja_t >= fox_t
								&& ninja_t <= fox_t + fox_h)) {
							ff = false;
							
							var step = document.getElementById("step_mp3");
							step.pause();
							var fall_music = document
									.getElementById("falldown");
							fall_music.play();

							window.clearInterval(g_wall);
							window.clearInterval(fo_timer);

							var kk = 0;
							var g_wall1 = setInterval(
									function() {
										kk++;
										l_w -= 7;
										r_w -= 7;
										fox_t -= 7;
										leftwall.style.backgroundPositionY = l_w
												+ "px";
										rightwall.style.backgroundPositionY = r_w
												+ "px";
										fox.style.top = fox_t + "px";
										if (kk == 250) {
											clearInterval(g_wall1);
										}
										// console.log(kk);
									}, 5);

							window.clearInterval(t_r_timer);
							window.clearInterval(t_l_timer);

							var fall_timer = setInterval(
									function() {
										ninja_t += 5;
										if (ninja_l > 60 && ninja_l <= 253) {
											ninja_l += 10;
											ninja.style.background = "url(../img/leftflown.gif)";
										}
										if (ninja_l > 266 && ninja_l <= 507) {
											ninja_l -= 10;
											ninja.style.background = "url(../img/rightflown.gif)";
										}
										ninja.style.top = ninja_t + "px";
										ninja.style.left = ninja_l + "px";
									}, 30)

							sh_b.style.display = "none";
							setTimeout(function() {
								fall_show.style.display = "block";
							}, 2000);
							amali_b.value = s_b.value;
							b_b.value = s_b.value * 2;
							// setTimeout(function(){g=false;},2000);

							g = false;
						}

					}
					if (g == false) {
						// console.log(trap);
						if (ran_side == 1) {
							fox.style.background = "url('../img/mo_s_left.png')";
						}
						if (ran_side == 2) {
							fox.style.background = "url('../img/mo_s_right.png')";
						}
					}
				}, 4)
	}
	
	// bird move
	function bird() {
		var bird = document.getElementById("bird");
		if (ran_side == 1) {
			bird.style.left = 63 + "px";
			bird.style.background = "url('../img/bird_right.gif')";
		}
		if (ran_side == 2) {
			bird.style.left = 494 + "px";
			bird.style.background = "url('../img/bird_left.gif')";
		}
		var bi_l = parseInt(window.getComputedStyle(bird).left);
		var bi_t = parseInt(window.getComputedStyle(bird).top);
		var bi_timer = setInterval(
				function() {
					if (g == true) {
						bi_t+=5;
						if (ran_side == 1) {
							bi_l += 2;
						}
						if (ran_side == 2) {
							bi_l -= 2;
						}


						bird.style.left = bi_l + "px";
						bird.style.top = bi_t + "px";

						var bird_l = parseInt(window
								.getComputedStyle(bird).left);
						var bird_t = parseInt(window
								.getComputedStyle(bird).top);
						var bird_h = parseInt(window
								.getComputedStyle(bird).height);
						var bird_w = parseInt(window
								.getComputedStyle(bird).width);
						// console.log(monster_l,monster_t,monster_h,monster_w);
						var ninja_l = parseInt(window.getComputedStyle(ninja).left);
						var ninja_t = parseInt(window.getComputedStyle(ninja).top);
						var ninja_h = parseInt(window.getComputedStyle(ninja).height);
						var ninja_w = parseInt(window.getComputedStyle(ninja).width);

						// console.log(kuruk_l,kuruk_t,kuruk_w,kuruk_h);

						var s_b = document.getElementById("in");
						var amali_b = document.getElementById("amali");
						var b_b = document.getElementById("best");
						var fall_show = document.getElementById("fall");
						var sh_b = document.getElementById("showbox");

						var leftwall = document.getElementById("left");
						var rightwall = document.getElementById("right");

						if (ninja_l + 63 > bird_l
								&& ninja_l + 63 <= bird_l + bird_w
								&& ninja_t >= bird_t
								&& ninja_t <= bird_t + bird_h) {
							ff = false;
							var step = document.getElementById("step_mp3");
							step.pause();
							var fall_music = document
									.getElementById("falldown");
							fall_music.play();

							window.clearInterval(g_wall);
							window.clearInterval(bi_timer);

							var kk = 0;
							var g_wall1 = setInterval(
									function() {
										kk++;
										l_w -= 7;
										r_w -= 7;
										bird_t -= 7;
										leftwall.style.backgroundPositionY = l_w
												+ "px";
										rightwall.style.backgroundPositionY = r_w
												+ "px";
										bird.style.top = bird_t + "px";
										if (kk == 250) {
											clearInterval(g_wall1);
										}
										// console.log(kk);
									}, 5);

							window.clearInterval(t_r_timer);
							window.clearInterval(t_l_timer);

							var fall_timer = setInterval(
									function() {
										ninja_t += 5;
										if (ninja_l > 60 && ninja_l <= 253) {
											ninja_l += 10;
											ninja.style.background = "url(../img/leftflown.gif)";
										}
										if (ninja_l > 266 && ninja_l <= 507) {
											ninja_l -= 10;
											ninja.style.background = "url(../img/rightflown.gif)";
										}
										ninja.style.top = ninja_t + "px";
										ninja.style.left = ninja_l + "px";
									}, 30)

							sh_b.style.display = "none";
							setTimeout(function() {
								fall_show.style.display = "block";
							}, 2000);
							amali_b.value = s_b.value;
							b_b.value = s_b.value * 2;
							// setTimeout(function(){g=false;},2000);

							g = false;

						}

						if (bi_t == 970) {
							clearInterval(bi_timer);
							monster.style.top = -175 + "px";
						}

					}
					if (g == false) {
						// console.log(trap);
						if (ran_side == 1) {
							bird.style.background = "url('../img/bird-s_r.png')";
						}
						if (ran_side == 2) {
							bird.style.background = "url('../img/bird-s_l.png')";
						}
					}
				}, 4)
	}
	
	

}

// controller stop and continute=========
// restart------------------------------------------------------
function tohta() {
	if (ff == true) {
		var tohta = document.getElementById("suspent_pic");
		tohta.style.display = "block";
		var ninja = document.getElementById("ninja");
		var ninja_left = parseInt(window.getComputedStyle(ninja).left);
		var tag_music = document.getElementById("tag_music");
		var step = document.getElementById("step_mp3");
		step.pause();
		tag_music.pause();
		if (ninja_left == 63) {
			ninja.style.background = "url('../img/stopleft.png')";
		}
		if (ninja_left == 507) {
			ninja.style.background = "url('../img/stopright.png')";
		}
		if (ninja_left > 63 && ninja_left < 506) {
			ninja.style.background = "url('../img/stopcenter.png')";
			xx = false;
		}

		g = false;
	}
}
// continute game
function continute() {
	var tohta = document.getElementById("suspent_pic");
	tohta.style.display = "none";
	var ninja_left = parseInt(window.getComputedStyle(ninja).left);
	var tag_music = document.getElementById("tag_music");
	var step = document.getElementById("step_mp3");
	step.play();
	tag_music.play();
	if (ninja_left == 63) {
		ninja.style.background = "url('../img/leftwalk.gif')";
	}
	if (ninja_left == 507) {
		ninja.style.background = "url('../img/rightwalk.gif')";
	}
	if (ninja_left > 63 && ninja_left < 506) {
		ninja.style.background = "url('../img/move1.gif')";
		xx = true;
	}
	console.log(ran_side);
	if (ran_side == 1) {
		monster.style.background = "url('../img/toright.gif')";
	}
	if (ran_side == 2) {
		monster.style.background = "url('../img/toleft.gif')";
	}
	
	
	g = true;
}
