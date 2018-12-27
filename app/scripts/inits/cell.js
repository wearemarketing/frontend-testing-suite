export default class Cell {
    constructor({
        neighboursNumber = 0,
        status = true
    } = {}) {
        this.neighboursNumber = neighboursNumber;
        this.status = status;
    }

    neighbours() {
        return this.neighboursNumber;
    }

    isAlive() {
        if (this.neighboursNumber == 3) {
            this.status = true;
        }

        if (this.status) {
            return this.neighboursNumber == 2 || this.neighboursNumber == 3;
        }

        return false;
    }
}
