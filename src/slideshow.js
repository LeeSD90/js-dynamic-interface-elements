import './styles/slideshow.css';

const transXRegex = /[-+](\d*)/;
const images = [...document.getElementById("slides").getElementsByTagName('img')];
const imageCount = images.length;
const slideShow = document.getElementById("slideshow");

const slideLeft = () => {
  let transX = images[0].style.transform;
  transX = transXRegex.exec(transX);

  if(transX === null) { transX = imageCount * -100 }
  else { transX = parseInt(transX[0]); }

  images.forEach((img) => {
    img.style.transform = 'translate(' + (transX + 100).toString() + '%)';
  })

  updateNav();
}

const slideRight = () => {
  let transX = images[0].style.transform;
  transX = transXRegex.exec(transX);

  if(transX === null) { transX = 0; }
  else if(Math.abs(transX[0])/100 === (imageCount-1)){ transX = 100; }
  else { transX = parseInt(transX[0]); }

  images.forEach((img) => {
    img.style.transform = 'translate(' + (transX - 100).toString() + '%)';
  })

  updateNav();
}

const slideNav = () => {
  const slideNav = document.createElement("div");
  slideNav.id = "slidenav";
  for(var i = 0; i < imageCount; i++){
    let dot = document.createElement("span");
    dot.classList.add("dot");
    slideNav.appendChild(dot);
  }
  slideShow.appendChild(slideNav);
  updateNav();
}

const updateNav = () => {
  const slideNav = document.getElementById("slidenav");
  const dots = slideNav.childNodes;
  dots.forEach((dot) => { dot.classList.remove("active"); })

  let transX = images[0].style.transform;
  transX = transXRegex.exec(transX);

  if(transX === null) { transX = 0; }
  else { transX = parseInt(transX[0]); }

  let highlight = Math.abs(transX / 100);
  dots[highlight].classList.add("active");
}

const slideshow = () => {
  const leftButton = document.getElementById("slide-left");
  const rightButton = document.getElementById("slide-right");

  leftButton.addEventListener("click", slideLeft);
  rightButton.addEventListener("click", slideRight);

  slideNav();

  setTimeout(() => {
    slideRight();
  }, 5000);
}

export default slideshow;