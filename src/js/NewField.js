const points = document.getElementById("points");
const godlins = document.getElementById("godlins");
const plaingField = document.querySelector(".board");
const img = document.images[0];
img.parentElement.removeChild(img);

export default class NewField {
  constructor(board) {
    this.board = board;
  }

  start() {

    for (let i = 0; i < this.board ** 2; i += 1) {
      const div = document.createElement('div');
      div.classList.add('cell')
      plaingField.appendChild(div);
    }

    this.randomGoblin();
  }


  genPosition() {

      const parentChildrens = plaingField.children
      return Math.floor(Math.random() * (parentChildrens.length - 1));
     }


  randomGoblin() {

    let hitGoblin = 0;
    let wingClick = 0;
    const interval = setInterval(() => {

      if (document.images[0]) {
            const activeDiv = document.images[0].parentElement;
            activeDiv.removeChild(img);
            activeDiv.classList.remove('activ')
          }

          const childDivs = plaingField.children;
          let index = this.genPosition();
          childDivs[index].classList.add('activ')
          childDivs[index].appendChild(img);

      // hitGoblin++;
      // godlins.textContent = `Пропущено гоблинов ${hitGoblin}`;
      // if (hitGoblin === 5) {
      //   alert(`Игра окончена, пропущено ${hitGoblin} гоблинов `);
      //   clearInterval(interval);
      // }
    }, 1000);

    document.addEventListener("click", (event) => {
      const eventTarget = event.target;
      if (eventTarget.closest("img")) {

        if (wingClick < 5){
          wingClick++;
          // hitGoblin--;
          points.innerText = `Набрано баллов ${wingClick}`;
        } else {
          alert(`Игра окончена, Вы выйграли! `);
          clearInterval(interval);
        }
        
      } else {
        if (hitGoblin === 5) {
          alert(`Игра окончена, пропущено ${hitGoblin} гоблинов `);
          clearInterval(interval);
        }
        hitGoblin++;
        godlins.textContent = `Пропущено гоблинов ${hitGoblin}`
      }

    });
  }
}