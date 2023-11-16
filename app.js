let uudv4 = uuid.v4();

const form = document.querySelector("form");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const select = document.querySelector("#select");
const checkbox = document.querySelector("#checkbox");
let img = document.getElementById("img");
let now = new Date();

let arr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input1.value.trim().length == 0) {
    alert("iltimos nimadur yozing 🤷‍♂️");
  } else if (input1.value.trim().length <= 4) {
    alert("iltimos 4 dan koproq text yozing 🤷‍♂️");
  } else {
  }

  if (input2.value.trim().length == 0) {
    alert("iltimos nimadur yozing 🤷‍♂️");
  } else if (input2.value.trim().length <= 4) {
    alert("iltimos 4 dan koproq text yozing 🤷‍♂️");
  } else {
  }

  const person = {
    id: uudv4,
    input1: input1.value,
    input2: input2.value,
    input3: input3.value,
    select: select.value,
    checkbox: checkbox.checked,
    img: img.value,
    now: new Date(),
  };

  console.log(person);
});
