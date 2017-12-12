const ToyRobot = require('./toyRobot.js');
let toyRobot = new ToyRobot();
var colors = require('colors');

let welcomeText =
`
Welcome to the ToyRobot
Valid commands are:
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
`;

let invalidMessage = `
Valid inputs:
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
`;

var stdin = process.openStdin();

console.log(welcomeText);

stdin.addListener("data", d => {
	let input = d.toString().trim();
	handleInput(input);
});

let handleInput = (input) => {
	let inputValues = input.split(' ');
	let command = inputValues[0];
	let params = [];
	if (inputValues[1]) {
		params = inputValues[1].split(',');
	}

	switch (command) {
		case 'PLACE':
			let x = params[0];
			let y = params[1];
			let f = params[2];
			try {
				toyRobot.place(x, y, f);
			}
			catch (e) {
				console.log(e.message.red);
			}
			break;
		case 'MOVE':
			try {
				toyRobot.move();
			} catch (e) {
				console.log(e.message.red);
			}
			break;
		case 'LEFT':
			try {
				toyRobot.left();
			} catch (e) {
				console.log(e.message.red);
			}
			break;
		case 'RIGHT':
			try {
				toyRobot.right();
			} catch (e) {
				console.log(e.message.red);
			}
			break;
		case 'REPORT':
			try {
				console.log(toyRobot.report().green);
			} catch (e) {
				console.log(e.message.red);
			}
			break;
		default:
			console.log(invalidMessage.yellow);
			break;
	}
}
