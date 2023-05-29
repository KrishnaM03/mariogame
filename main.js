noseX = "";
noseY = "";

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}

function modelLoaded() {
	console.log("model loaded");
}

function gotPoses(results) {
	if(results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("Nose X = " + noseX + ", Nose Y = " + noseY);
	}
}






