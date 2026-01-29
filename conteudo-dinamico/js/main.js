import flags from './model/flags.js';

const main = document.querySelector('main');

flags.forEach(flag => {
  const div = document.createElement('div');
  div.className = 'flag col-2 my-2 text-center';

  const img = document.createElement('img');
  img.src = flag.image;
  img.alt = flag.name;

  const p = document.createElement('p');
  p.textContent = flag.name;

  div.appendChild(img);
  div.appendChild(p);

  main.appendChild(div);
});