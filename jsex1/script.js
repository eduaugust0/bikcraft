const circle = document.querySelector('.titulo');

function mexer(event) {
  circle.style.top = event.y + 'px';
  circle.style.left = event.x + 'px';
};

document.addEventListener("mousemove", mexer);

