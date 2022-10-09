let countEL = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEL.textContent = count;
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let pCount = count + " - ";
  // 3. Render the variable in the saveEl using innerText
  saveEl.textContent += pCount;
  // NB: Make sure to not delete the existing content of the paragraph
  count = 0;
  countEL.textContent = 0;
}
