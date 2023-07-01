export class GameController {
    constructor(field, goblin, counters) {
        this.field = field;
        this.goblin = goblin;
        this.counters = counters;
        this.timeout = null;
        this.LIMIT = 1000;
    }

    get random() {
      return Math.floor(1 + Math.random() * this.field.element.children.length - 1);  
    }

    start() {
        this.timeoutBegin()
    }

    addOnCkickListener(listener) {
        this.field.element.addEventListener('click', listener.bind(this))
    }

    timeoutBegin() {
        this.timeout = setTimeout(
            () => {
                this.field.appendElementByIndex(this.random, this.goblin.element);
                this.timeoutBegin();
            },
            this.LIMIT
        );
    }

    clearTimeout() {
        clearTimeout(this.timeout);
    }
}


