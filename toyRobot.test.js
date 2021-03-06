const ToyRobot = require('./toyRobot');
let toyRobot = {};

describe('ToyRobot - basic functions', () => {
	beforeEach(() => {
		toyRobot = new ToyRobot();
		toyRobot.place(1, 1, 'NORTH');
	});

	it('can be constructed', () => {
		let testToyRobot = new ToyRobot();
	});

	it('can be placed', () => {
		toyRobot.place(1, 1, 'NORTH');
	});

	it('throw error for invalid facing', () => {
		try {
			toyRobot.place(1, 1, 'RANDOM_FACEING');
		}
		catch (e) {
			expect(e.message).toBe('Invalid faceing');
		}
	});

	it('throw error for invalid position X', () => {
		try {
			toyRobot.place(0, 5, 'NORTH');
		}
		catch (e) {
			expect(e.message).toBe('Invalid position');
		}
	});


	it('throw error for invalid position Y', () => {
		try {
			toyRobot.place(5, 0, 'NORTH');
		}
		catch (e) {
			expect(e.message).toBe('Invalid position');
		}
	});

	it('can be send a report', () => {
		let expectedReport = '1,1,NORTH';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can rotate left', () => {
		toyRobot.left();
		let expectedReport = '1,1,WEST';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.left();
		expectedReport = '1,1,SOUTH';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.left();
		expectedReport = '1,1,EAST';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.left();
		expectedReport = '1,1,NORTH';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can rotate right', () => {
		toyRobot.right();
		let expectedReport = '1,1,EAST';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.right();
		expectedReport = '1,1,SOUTH';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.right();
		expectedReport = '1,1,WEST';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.right();
		expectedReport = '1,1,NORTH';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can move', () => {

		toyRobot.move();
		let expectedReport = '1,2,NORTH';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can move without falling off the grid', () => {
		toyRobot.move();
		toyRobot.move();
		toyRobot.move();
		toyRobot.move();
		toyRobot.move();
		toyRobot.move();
		let expectedReport = '1,4,NORTH';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});
});

describe('ToyRobot - nothing allowed before placed', () => {
	it('can not report if not placed', () => {
		try {
			let testToyRobot = new ToyRobot();
			testToyRobot.report();
		}
		catch (e) {
			expect(e.message).toBe('ToyRobot has to be positioned before any other command can be used');
		}
	});
	it('can not move if not placed', () => {
		try {
			let testToyRobot = new ToyRobot();
			testToyRobot.move();
		}
		catch (e) {
			expect(e.message).toBe('ToyRobot has to be positioned before any other command can be used');
		}
	});
	it('can not go left if not placed', () => {
		try {
			let testToyRobot = new ToyRobot();
			testToyRobot.left();
		}
		catch (e) {
			expect(e.message).toBe('ToyRobot has to be positioned before any other command can be used');
		}
	});
	it('can not go right if not placed', () => {
		try {
			let testToyRobot = new ToyRobot();
			testToyRobot.right();
		}
		catch (e) {
			expect(e.message).toBe('ToyRobot has to be positioned before any other command can be used');
		}
	});
});

describe('ToyRobot - examples', () => {

	it('can run example A', () => {
		toyRobot.place(0, 0, 'NORTH');
		toyRobot.move();
		let expectedReport = '0,1,NORTH';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can run example B', () => {
		toyRobot.place(0, 0, 'NORTH');
		toyRobot.left();
		let expectedReport = '0,0,WEST';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can run example C', () => {
		toyRobot.place(1, 2, 'EAST');
		toyRobot.move();
		toyRobot.move();
		toyRobot.left();
		toyRobot.move();
		let expectedReport = '3,3,NORTH';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});
});
