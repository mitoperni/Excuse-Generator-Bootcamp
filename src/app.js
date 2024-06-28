/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* Mi codigo empieza aquí */

const who = [
  "El programador junior",
  "Mi gato",
  "El servidor",
  "El repositorio de GitHub",
  "El hacker",
  "El IDE",
  "El tester",
  "El bot de CI/CD"
];
const action = [
  "borró",
  "crasheó",
  "compiló mal",
  "falló en la integración",
  "rompió",
  "eliminó",
  "sobreescribió",
  "corrompió"
];
const what = [
  "el código fuente",
  "la base de datos",
  "los tests unitarios",
  "el commit",
  "la rama principal",
  "el pull request",
  "la documentación",
  "el script de despliegue"
];
const when = [
  "hace un momento",
  "anoche",
  "durante el fin de semana",
  "esta mañana",
  "durante la última build",
  "ayer por la tarde",
  "mientras dormía",
  "en el último sprint"
];

const getRandomPosisitionOfArrays = arr =>
  arr[Math.floor(Math.random() * arr.length)];

const dataset = [who, action, what, when];

const excuseDataset = () => {
  document.querySelector("#excuse").innerHTML = dataset
    .map(el => getRandomPosisitionOfArrays(el))
    .join()
    .replaceAll(",", " ");
};

let counter = 0;

let textCounterExceded =
  "Has excedido el número máximo de excusas <br> <strong class='fs-1 text'>¡DEJA LAS EXCUSAS Y PONTE A PROGRAMAR!<strong/>";

const counterExceded = () => {
  if (counter >= 10) {
    document
      .querySelector("#getNewExcuse")
      .classList.remove("btn-outline-success");
    document.querySelector("#getNewExcuse").classList.add("btn-danger");
    document.querySelector("#getNewExcuse").classList.add("disabled");
    document.querySelector("#getNewExcuse").classList.add("mt-5");
    document.querySelector("#getNewExcuse").innerHTML = textCounterExceded;
    document.querySelector("#mainImage").src =
      "https://iconspng.com/_next/image?url=https%3A%2F%2Ficonspng.com%2Fimages%2Fabu-is-angry.jpg&w=1080&q=75";
    document.querySelector("#mainImage").classList.add("mt-5");
    document.querySelector("#mainh1").innerHTML = "TE PASAS DE PENDEJO!!";
    document.querySelector("#excuse").classList.add("d-none");
  }
};

document.querySelector("#getNewExcuse").addEventListener("click", () => {
  counter++;
  if (counter <= 10) {
    excuseDataset();
  }
  counterExceded();
});

window.onload = function() {
  excuseDataset();
};
