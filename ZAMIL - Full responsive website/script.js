const nav = document.querySelector('nav');
const openBtn = document.querySelector('.bi-list');
const exitBtn = document.querySelector('.bi-x');

const openMenu = openBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const closeMenu = exitBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');

searchIcon.onclick = function () {
  searchBar.classList.toggle('active');
};

// const homeDropdownButton = document.querySelector('.ddm1');
// const servicesDropdownButton = document.querySelector('.ddm2');
// const homeDropdown = document.querySelector('.list-home');
// const servicesDropdown = document.querySelector('.list-services');

// const openHomeDropdown = homeDropdownButton.addEventListener('click', () => {
//   homeDropdown.classList.toggle('active-dd');
// });
// const openServicesDropdown = servicesDropdownButton.addEventListener(
//   'click',
//   () => {
//     servicesDropdown.classList.toggle('active-dd');
//   }
// );
