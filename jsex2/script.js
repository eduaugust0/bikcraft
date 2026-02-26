
const button = document.querySelector('button');

function somar() {
  const div = document.querySelector('div');
  const total = Number(div.innerText) + 1;
  if (total < 10) {
    div.innerText = total;
  }
  else {
    console.log("Valor maior do que dez")
  }
};

if (button) {
  button.addEventListener("click", somar);
}
