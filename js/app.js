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

let person14Name = document.querySelector("#person14Name");
let person14Species = document.querySelector("#person14Species");

const pReq = new XMLHttpRequest();

function reqListener2() {
  let obj = JSON.parse(this.responseText);
  person14Name.innerHTML = obj.name;
  console.log(obj);

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
