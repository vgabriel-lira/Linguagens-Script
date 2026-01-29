import flags from './model/flags.js';

const main = document.querySelector('main');

for (let i = 0; i < 30 && i < flags.length; i++) {
  main.insertAdjacentHTML('beforeend', createFlagView(flags[i]));
}

function createFlagView(flag) {
  return `
    <div class="flag col-2 my-2 text-center">
      <img src="${flag.image}" alt="${flag.name}" class="img-fluid border">
      <p>${flag.name}</p>
    </div>
  `;
}