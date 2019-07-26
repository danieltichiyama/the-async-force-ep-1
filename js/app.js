//ex1

let person4Name = document.querySelector("#person4Name");
let person4HomeWorld = document.querySelector("#person4HomeWorld");

const oReq = new XMLHttpRequest();

function reqListener() {
  let obj = JSON.parse(this.responseText);
  person4Name.innerHTML = obj.name;

  nReq = new XMLHttpRequest();

  function reqListener2() {
    let obj = JSON.parse(this.responseText);
    person4HomeWorld.innerHTML = obj.name;
  }

  nReq.addEventListener("load", reqListener2);
  nReq.open("GET", obj.homeworld);
  nReq.send();
}

oReq.addEventListener("load", reqListener);

oReq.open("GET", "https://swapi.co/api/people/4");
oReq.send();

//ex2
let person14Name = document.querySelector("#person14Name");
let person14Species = document.querySelector("#person14Species");

const pReq = new XMLHttpRequest();

function reqListener2() {
  let obj = JSON.parse(this.responseText);
  person14Name.innerHTML = obj.name;

  qReq = new XMLHttpRequest();

  function reqListener3() {
    let obj = JSON.parse(this.responseText);
    person14Species.innerHTML = obj.name;
  }

  qReq.addEventListener("load", reqListener3);
  qReq.open("GET", obj.species[0]);
  qReq.send();
}

pReq.addEventListener("load", reqListener2);
pReq.open("GET", "https://swapi.co/api/people/14");
pReq.send();

//ex3

const rReq = new XMLHttpRequest();

function rReqListener() {
  let obj = JSON.parse(this.responseText);
  let filmList = document.querySelector("#filmList");
  //creates the list of films
  for (let i = 0; i < obj.results.length; i++) {
    let film = document.createElement("li");
    film.className = "film";

    let filmTitle = document.createElement("h2");
    filmTitle.className = "filmTitle";
    filmTitle.innerHTML = obj.results[i].title;
    film.appendChild(filmTitle);

    let filmPlanets = document.createElement("ul");
    filmPlanets.className = "filmPlanets";

    //creates the list of planets
    for (let j = 0; j < obj.results[i].planets.length; j++) {
      let sReq = new XMLHttpRequest();
      function sReqListener() {
        let newObj = JSON.parse(this.responseText);
        let planet = document.createElement("li");
        planet.className = "planet";
        let planetName = document.createElement("h4");
        planetName.className = "planetName";
        planetName.innerHTML = newObj.name;
        planet.appendChild(planetName);
        filmPlanets.appendChild(planet);
      }

      sReq.addEventListener("load", sReqListener);
      sReq.open("GET", obj.results[i].planets[j]);
      sReq.send();
    }

    let randomH3 = document.createElement("h3");
    randomH3.innerHTML = "Planets";
    film.appendChild(randomH3);
    film.appendChild(filmPlanets);

    filmList.appendChild(film);
  }
}

rReq.addEventListener("load", rReqListener);
rReq.open("GET", "https://swapi.co/api/films/");
rReq.send();
