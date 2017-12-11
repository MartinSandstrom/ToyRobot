import ToyRobot from './toyRobot.js';

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
			toyRobot.place(1, 1, 'NORTHs');
		}
		catch (e) {
			expect(e.message).toBe('Invalid faceing');
		}
	});

	it('can be send a report', () => {
		let expectedReport = 'F: NORTH X: 1 Y: 1';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can rotate left', () => {
		toyRobot.left();
		let expectedReport = 'F: WEST X: 1 Y: 1';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.left();
		expectedReport = 'F: SOUTH X: 1 Y: 1';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.left();
		expectedReport = 'F: EAST X: 1 Y: 1';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.left();
		expectedReport = 'F: NORTH X: 1 Y: 1';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can rotate right', () => {
		toyRobot.right();
		let expectedReport = 'F: EAST X: 1 Y: 1';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.right();
		expectedReport = 'F: SOUTH X: 1 Y: 1';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.right();
		expectedReport = 'F: WEST X: 1 Y: 1';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);

		toyRobot.right();
		expectedReport = 'F: NORTH X: 1 Y: 1';
		report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can move', () => {

		toyRobot.move();
		let expectedReport = 'F: NORTH X: 1 Y: 2';
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
		let expectedReport = 'F: NORTH X: 1 Y: 4';
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
			expect(e.message).toBe('ToyRobot has to be position before any other command can be used');
		}
	});
	it('can not move if not placed', () => {
		try {
			let testToyRobot = new ToyRobot();
			testToyRobot.move();
		}
		catch (e) {
			expect(e.message).toBe('ToyRobot has to be position before any other command can be used');
		}
	});
	it('can not go left if not placed', () => {
		try {
			let testToyRobot = new ToyRobot();
			testToyRobot.left();
		}
		catch (e) {
			expect(e.message).toBe('ToyRobot has to be position before any other command can be used');
		}
	});
	it('can not go right if not placed', () => {
		try {
			let testToyRobot = new ToyRobot();
			testToyRobot.right();
		}
		catch (e) {
			expect(e.message).toBe('ToyRobot has to be position before any other command can be used');
		}
	});
});

describe('ToyRobot - examples', () => {

	it('can run example A', () => {
		toyRobot.place(0, 0, 'NORTH');
		toyRobot.move();
		let expectedReport = 'F: NORTH X: 0 Y: 1';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can run example B', () => {
		toyRobot.place(0, 0, 'NORTH');
		toyRobot.left();
		let expectedReport = 'F: WEST X: 0 Y: 0';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});

	it('can run example C', () => {
		toyRobot.place(1, 2, 'EAST');
		toyRobot.move();
		toyRobot.move();
		toyRobot.left();
		toyRobot.move();
		let expectedReport = 'F: NORTH X: 3 Y: 3';
		let report = toyRobot.report();
		expect(report).toBe(expectedReport);
	});
});
