/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

const getRandomNumber = arr => arr[Math.floor(Math.random() * arr.length)];

const dataset = [who, action, what, when];

const excuseDataset = () =>
  (document.querySelector("#excuse").innerHTML = dataset
    .map(el => getRandomNumber(el))
    .join()
    .replaceAll(",", " "));

document
  .querySelector("#getNewExcuse")
  .addEventListener("click", excuseDataset);

window.onload = function() {
  //write your code here
  excuseDataset();
};
