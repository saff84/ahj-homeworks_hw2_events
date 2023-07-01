import { Field } from "./Field";
import { Goblin } from "./Goblin";
import { GameController } from "./GameController";
import { Counters } from "./Counters";

const field = new Field(document.querySelector('.board'));
field.start()
const goblin = new Goblin();
const counters = new Counters(document.querySelector('.counter-box'));

const controller = new GameController(field, goblin, counters);

controller.addOnCkickListener(function (event) {
    const target = event.target;
    if(target.classList.contains('goblin')) {
        this.counters.incrementShoots();
        this.clearTimeout();
        this.goblin.element.remove();
        this.timeoutBegin();

    } else {
        this.counters.incrementMiss();
    }
})

controller.start();