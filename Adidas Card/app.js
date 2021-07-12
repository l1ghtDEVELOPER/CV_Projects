//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const info = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
  // console.log(e.pageX, e.pageY);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  //Poput
  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(150px) rotateZ(-45deg)';
  purchase.style.transform = 'translateZ(50px)';
  info.style.transform = 'translateZ(100px)';
  sizes.style.transform = 'translateZ(100px)';
});

//Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
  info.style.transform = 'translateZ(0px)';
  sizes.style.transform = 'translateZ(0px)';
});
