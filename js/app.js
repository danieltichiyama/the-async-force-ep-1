let person4Name = document.querySelector("#person4Name");

const oReq = new XMLHttpRequest();

function reqListener() {
  person4Name.innerHTML = this.response.name;
}

oReq.addEventListener("load", reqListener);

oReq.open("GET", "https://swapi.co/api/people/4");
oReq.responseType = "json";

oReq.send();
