let saveEL = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function decrease() {
  count -= 1;
  countEl.innerText = count;
}

function save() {
  let history = " " + count + " - ";

  saveEL.innerText += history;

  console.log(count);
}

