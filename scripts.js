// alert("connected");

const weightUnit = document.querySelector(".weight-unit");
const heightUnit = document.querySelector(".height-unit");
const showResult = document.querySelector(".showResult");
const display = document.querySelector(".display");
const description = document.querySelector(".description");
let bmi;

function calculate() {
  const weight = parseInt(document.querySelector(".weight").value);
  const height = parseInt(document.querySelector(".height").value);
  weightUnit.textContent = `${weight} Kg`;
  heightUnit.textContent = `${height} cm`;
  bmi = ((weight / height ** 2) * 10000).toFixed(1);
  display.innerHTML = `${bmi} Kgcm<sup>-2</sup>`;
  // description.innerText = "This is a Body Mass Index Calculator";
  // description.style.color = "green";
  if (bmi < 18.5) {
    description.style.color = "blueviolet";
    description.innerHTML = `You are Underweight\n Try eating healthy`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    description.style.color = "green";
    description.innerHTML = `You are Normal and Healthy\n Keep it Up`;
  } else if (bmi <= 25.0 && bmi <= 29.9) {
    description.style.color = "orange";
    description.innerHTML = `You are Overweight\n You need to watch your Weight`;
  } else if (bmi <= 30.0 && bmi <= 34.9) {
    description.style.color = "tomato";
    description.innerHTML = `You are Obese and need to be extra careful with your lifestyle`;
  } else {
    description.style.color = "red";
    description.innerHTML = `You are Severely Obese\n Please seek medical attention`;
    description.style.animation = "display 0.3s alternate-reverse 6";
  }
}

addEventListener("input", calculate);
// addEventListener("input", calculate);
