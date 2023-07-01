export class Counters {
    constructor(counterBlock) {
        this.counterBlock = counterBlock;
        this.shoots = this.counterBlock.querySelector('#shoots span');
        this.miss = this.counterBlock.querySelector('#miss span');
    }

    incrementShoots() {
        this.shoots.textContent = parseInt(this.shoots.textContent) + 1;
    }

    incrementMiss() {
        this.miss.textContent = parseInt(this.miss.textContent) + 1;
    }
}