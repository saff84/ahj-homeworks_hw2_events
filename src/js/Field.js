export class Field {
    constructor(fieldContainer) {
        this.fieldContainer = fieldContainer;
    }

    get element() {
        return this.fieldContainer;
    }

    start() {

        for (let i = 0; i < 4 ** 2; i += 1) {
            const div = document.createElement('div');
            div.classList.add('cell')
            this.fieldContainer .appendChild(div);
          }
    }

    appendElementByIndex(index, element) {
        const cells = this.fieldContainer.children;
        cells[index].append(element);
    }
}