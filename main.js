/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Field.js
class Field {
  constructor(fieldContainer) {
    this.fieldContainer = fieldContainer;
  }
  get element() {
    return this.fieldContainer;
  }
  start() {
    for (let i = 0; i < 4 ** 2; i += 1) {
      const div = document.createElement('div');
      div.classList.add('cell');
      this.fieldContainer.appendChild(div);
    }
  }
  appendElementByIndex(index, element) {
    const cells = this.fieldContainer.children;
    cells[index].append(element);
  }
}
;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/Goblin.js

class Goblin {
  goblin = null;
  get element() {
    const goblinTag = document.createElement('img');
    goblinTag.src = goblin_namespaceObject;
    goblinTag.className = 'goblin';
    if (this.goblin === null) {
      this.goblin = goblinTag;
    }
    return this.goblin;
  }
}
;// CONCATENATED MODULE: ./src/js/GameController.js
class GameController {
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
    this.timeoutBegin();
  }
  addOnCkickListener(listener) {
    this.field.element.addEventListener('click', listener.bind(this));
  }
  timeoutBegin() {
    this.timeout = setTimeout(() => {
      this.field.appendElementByIndex(this.random, this.goblin.element);
      this.timeoutBegin();
    }, this.LIMIT);
  }
  clearTimeout() {
    clearTimeout(this.timeout);
  }
}
;// CONCATENATED MODULE: ./src/js/Counters.js
class Counters {
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
;// CONCATENATED MODULE: ./src/js/app.js




const field = new Field(document.querySelector('.board'));
field.start();
const goblin = new Goblin();
const counters = new Counters(document.querySelector('.counter-box'));
const controller = new GameController(field, goblin, counters);
controller.addOnCkickListener(function (event) {
  const target = event.target;
  if (target.classList.contains('goblin')) {
    this.counters.incrementShoots();
    this.clearTimeout();
    this.goblin.element.remove();
    this.timeoutBegin();
  } else {
    this.counters.incrementMiss();
  }
});
controller.start();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;