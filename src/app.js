/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let person = [
    "A T-rex ",
    "A croc ",
    "A whale ",
    "My grandma ",
    "Heisenberg "
  ];
  let action = ["bit my ", "stole my ", "killed my ", "fixed my "];
  let posession = ["heart ", "fish ", "ps4 ", "finger ", "clothes "];
  let time = [
    "when I ran inside",
    "on my way to a soccer game",
    "on my way to church",
    "while I was praying"
  ];

  let perIndx = Math.floor(Math.random() * person.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * posession.length);
  let timIndx = Math.floor(Math.random() * time.length);

  return (
    person[perIndx] +
    "" +
    action[actIndx] +
    "" +
    posession[posIndx] +
    "" +
    time[timIndx]
  );
};
