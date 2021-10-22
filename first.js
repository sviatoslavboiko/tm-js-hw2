import { counter } from "./second.js";

const allPeople = document.querySelector('.people');
const favoritePeople = document.querySelector('.favorite-people');
const count = document.querySelector('.count');

export const renderPeople = people => {
  
  for (const person of people){
    allPeople.insertAdjacentHTML('beforeend',`
      <div class="d-inline-flex mr-1">
      <div class="card text-white bg-dark mb-3" style="max-width: 18rem; min-width: 13rem;">
      <div class="card-header d-flex justify-content-center">${person.name}</div>
      <div class="card-body">
        <p class="card-title">height: ${person.height}</p>
        <p class="card-title">mass: ${person.mass}</p>
        <p class="card-title">hair color: ${person.hairColor}</p>
        <p class="card-title">skin color: ${person.skinColor}</p>
        <button id="${'add' + person.name.replace(/\s/g, "")}" class="btn btn-primary add">Add to favorite</button>
        <button id="${'del' + person.name.replace(/\s/g, "")}" class="btn btn-primary del">Delete</button>
      </div>
      </div>
      </div>
    `)
  }
}

allPeople.addEventListener('click', (e) => {
  const id = e.target.id;
  const btn = document.querySelector(`#${id}`);
  const elem = btn.closest('.d-inline-flex');
  if(btn.classList.contains('add')){
    elem.classList.toggle('d-inline-flex') ;
    elem.classList.toggle('d-none');
    favoritePeople.appendChild(elem);
    elem.classList.toggle('d-none');
    elem.classList.toggle('d-inline-flex');
    elem.classList.add('mr-1');
    btn.classList.toggle('rem');
    btn.innerText = "Remove from fav";
    count.innerHTML = `<p>You click ${counter()} times</p>`
  }
  if(btn.classList.contains('del')){
    elem.classList.remove('d-inline-flex');
    elem.classList.add('d-none');
    count.innerHTML = `<p>You click ${counter()} times</p>`
  }
})

favoritePeople.addEventListener('click', (e) => {
  const id = e.target.id;
  const btn = document.querySelector(`#${id}`);
  const elem = btn.closest('.d-inline-flex');
  if(btn.classList.contains('rem')){
    elem.classList.toggle('d-inline-flex');
    elem.classList.toggle('d-none');
    allPeople.appendChild(elem);
    elem.classList.toggle('d-none');
    elem.classList.toggle('d-inline-flex'); 
    btn.classList.toggle('rem');
    btn.innerText = "Add to favorite";
    count.innerHTML = `<p>You click ${counter()} times</p>`
  }
  if(btn.classList.contains('del')){
    elem.classList.remove('d-inline-flex');
    elem.classList.add('d-none');
    count.innerHTML = `<p>You click ${counter()} times</p>`
  }
})
