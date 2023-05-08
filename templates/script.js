/// https://www.codewizardshq.com/javascript-games/
var canvasWidth = 600;
var canvasHeight = 400;

function startGame() {
	gameCanvas.start();
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
