const points = document.getElementById("points");
const godlins = document.getElementById("godlins");
const plaingField = document.querySelector(".board");
const img = document.images[0];
img.parentElement.removeChild(img);

export default class NewField {
  constructor(board) {
    this.board = board;
    this.timeout = null;
  }

  start() {
    console.log('start')
    for (let i = 0; i < this.board ** 2; i += 1) {
      const div = document.createElement('div');
      div.classList.add('cell')
      plaingField.appendChild(div);
    }
    this.timeout = setTimeout(this.randomGoblin, 1000)
    this.listner();
  }


  genPosition() {
      return Math.floor(1 + Math.random() * 15);
     }

  randomGoblin(){
    console.log('random')

    if (document.images[0]) {
      console.log('random if')

      const activeDiv = document.images[0].parentElement;
      activeDiv.removeChild(img);
      activeDiv.classList.remove('activ')
      }
      console.log('random no if')
    const childDivs = plaingField.children;
    console.log(this)
    const index = this.genPosition;
    alert(index)
    childDivs[index].classList.add('activ')
    childDivs[index].appendChild(img);

    this.timeout = setTimeout(this.randomGoblin.bind(this), 1000);        

  }


  listner() {
      let targetClick = 0;
      let missedClick = 0;
    console.log("listner")
    document.addEventListener("click", (event) => {
      
      const eventTarget = event.target;
      
      if (eventTarget.closest("img")) {
        targetClick++;
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.randomGoblin, 1000)

        points.innerText = `Набрано баллов ${targetClick}`;
        if (targetClick === 5){
          alert(`Игра окончена, Вы выйграли! `);
          clearTimeout(this.timeout)
        } 
        
      } else {
        missedClick++;
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.randomGoblin, 1000)
        godlins.textContent = `Пропущено гоблинов ${missedClick}`
        if (missedClick === 5) {
          alert(`Игра окончена, пропущено ${missedClick } гоблинов `);
          clearTimeout(this.timeout)
        }
      }
    });
  }
}


