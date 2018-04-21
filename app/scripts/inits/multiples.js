export default class Multiples {
    constructor() {
        this.result = 0;
    }

    playsWith(n) {
        for (var i = 0; i <= n; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                this.result += i;
            }
        }

        return this.result;
    }
}
