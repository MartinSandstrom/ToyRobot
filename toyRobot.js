export default class ToyRobot {
	constructor() {
		this.grid = [
			[1, 1, 1, 1, 1], //Y = 0  X = 0, 1, 2, 3, 4
			[1, 1, 1, 1, 1], //Y = 1  X = 0, 1, 2, 3, 4
			[1, 1, 1, 1, 1], //Y = 2  X = 0, 1, 2, 3, 4
			[1, 1, 1, 1, 1], //Y = 3  X = 0, 1, 2, 3, 4
			[1, 1, 1, 1, 1]  //Y = 4  X = 0, 1, 2, 3, 4
		];
		this.x = 0;
		this.y = 0;
		this.hasBeenPlaced = false;
		this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
	}

	place(x, y, f) {
		this.x = x;
		this.y = y;
		if (this.directions.includes(f)) {
			this.f = f;
		} else {
			throw Error('Invalid faceing');
		}
		this.hasBeenPlaced = true;
	}

	notPlacedError() {
		throw Error('ToyRobot has to be position before any other command can be used');
	}

	report() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		return `F: ${this.f} X: ${this.x} Y: ${this.y}`;
	}

	move() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		switch (this.f) {
			case 'NORTH':
				if (this.isValidPosition(this.x, this.y + 1)) {
					this.y++;
				}
				break;
			case 'SOUTH':
				if (this.isValidPosition(this.x, this.y - 1)) {
					this.y++;
				}
				break;
			case 'WEST':
				if (this.isValidPosition(this.x - 1, this.y)) {
					this.x++;
				}
				break;
			case 'EAST':
				if (this.isValidPosition(this.x + 1, this.y)) {
					this.x++;
				}
				break;
		}
	}

	right() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		let currentIndex = this.getCurrentIndexOfF();
		currentIndex++;
		this.f = this.directions[currentIndex] ? this.directions[currentIndex] : this.directions[0];
	}

	left() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		let currentIndex = this.getCurrentIndexOfF();
		currentIndex--;
		this.f = this.directions[currentIndex] ? this.directions[currentIndex] : this.directions[3];
	}

	isValidPosition(x, y) {
		return this.grid[y] && this.grid[y][x];
	}

	getCurrentIndexOfF() {
		return this.directions.indexOf(this.f);
	}
}
