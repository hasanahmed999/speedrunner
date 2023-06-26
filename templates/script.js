/// https://www.codewizardshq.com/javascript-games/
var canvasWidth = 300;
var canvasHeight = 600;
var playerWidth = 100;
var playerHeight = 100;

var player;
var playerXPosition = canvasWidth/2 - playerWidth/2;

var interval = setInterval(updateCanvas, 20);

function createPlayer(width, height, y) {
	this.width = width;
	this.height = height;
	this.y = y;
	this.x = playerXPosition;

	
	this.draw = function() {
		ctx = gameCanvas.context;
		ctx.fillStyle = "green";
		window.addEventListener("keydown", (e) => {
			if (e.key == 'ArrowRight') {
				this.x = playerXPosition + playerWidth;
			}
			else if (e.key == 'ArrowLeft') {
				this.x = playerXPosition - playerWidth;
			}	
		});
		window.addEventListener("keyup", (e) => {
			if (e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
				this.x = playerXPosition;
			}
		});
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}



}

function startGame() {
	gameCanvas.start();
	player = new createPlayer(playerWidth, playerHeight, canvasHeight - playerHeight);
	block = new createBlock(playerWidth, playerHeight);
}

function updateCanvas() {
	ctx = gameCanvas.context;
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	player.draw();
	block.draw();
}

var gameCanvas = {
	canvas: document.createElement("canvas"),
	start: function() {
		this.canvas.width = canvasWidth;
		this.canvas.height = canvasHeight;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	}
}

var block;
function randomNumber() {
	// between 1 and 2
	return Math.floor(Math.random() * 2) + 1;
}

function createBlock(width, height) {
	// randomly create 1 or 2 blocks. Need a placement parameter to randomly place on left or right or middle
	num_blocks_created = randomNumber();
	for (let i = 0; i < num_blocks_created; i++) {
		// create block. if 2 blocks, make sure we dont create an extra on the same location
		this.width = width;
		this.height = height;
		this.y = 400;
		this.x = playerXPosition - playerWidth;
	}

	this.draw = function() {
		ctx = gameCanvas.context;
		ctx.fillStyle = "red";	
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
}


