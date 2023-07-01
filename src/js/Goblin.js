import goblinSrc from '../img/goblin.png'

export class Goblin {
    goblin = null;

    get element() {
        const goblinTag = document.createElement('img');
        goblinTag.src = goblinSrc;
        goblinTag.className = 'goblin';

        if (this.goblin === null) {
            this.goblin = goblinTag;
        }

        return this.goblin;
    }
}