//import React from "react";
//import ReactDOM from "react-DOM";

/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//write your code here
window.onload = function() {
  // arreglos que contienen las posibles partes de la frase
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // selecciona la posición aleatoria para escoger
  let primera = Math.floor(Math.random() * who.length);
  let segunda = Math.floor(Math.random() * action.length);
  let tercera = Math.floor(Math.random() * what.length);
  let cuarta = Math.floor(Math.random() * when.length);

  //genera la frase, con base a la posición aleatoria
  document.querySelector("#excuse").innerHTML =
    who[primera] +
    " " +
    action[segunda] +
    " " +
    what[tercera] +
    " " +
    when[cuarta];
};
