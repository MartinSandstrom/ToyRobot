class ToyRobot {
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
		if (this.directions.includes(f)) {
			this.f = f;
		} else {
			throw Error('Invalid faceing');
		}
		if (!this.isValidPosition(x, y)) {
			throw Error('Invalid position');
		}
		this.x = x;
		this.y = y;

		this.hasBeenPlaced = true;
	}

	notPlacedError() {
		throw Error('ToyRobot has to be positioned before any other command can be used');
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
				if (this.isValidPosition(this.x, parseInt(this.y) + 1)) {
					this.y++;
				}
				break;
			case 'SOUTH':
				if (this.isValidPosition(this.x, parseInt(this.y) - 1)) {
					this.y--;
				}
				break;
			case 'WEST':
				if (this.isValidPosition(parseInt(this.x) - 1, this.y)) {
					this.x--;
				}
				break;
			case 'EAST':
				if (this.isValidPosition(parseInt(this.x) + 1, this.y)) {
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
		this.f = this.getDirection(currentIndex, 0);
	}

	left() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		let currentIndex = this.getCurrentIndexOfF();
		currentIndex--;
		this.f = this.getDirection(currentIndex, 3);
	}

	getDirection(currentIndex, defaultIndex) {
		return this.directions[currentIndex] ? this.directions[currentIndex] : this.directions[defaultIndex]
	}

	isValidPosition(x, y) {
		return this.grid[x] && this.grid[x][y];
	}

	getCurrentIndexOfF() {
		return this.directions.indexOf(this.f);
	}
}

module.exports = ToyRobot;
