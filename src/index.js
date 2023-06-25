//import "./styles.css";

const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.png",
  "06.png",
  "07.png",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

document.getElementById(
  "background"
).style.background = `url(img/${chosenImage}) no-repeat center/cover`;


const clock = document.querySelector("h1#clock");
const daybox = document.querySelector("h1#date")

//시계
function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear())

    //console.log(`${month}/ ${day}/ ${hour}:${minutes}:${seconds}`);
  
    //clock.innerHTML = `${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    daybox.innerHTML = `${year}년 ${month}월 ${day}일`
    clock.innerHTML = `${hour}:${minutes}:${seconds}`;
  }
  getClock();
  setInterval(getClock, 1000);

//Log In
const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.getElementById("greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = 'hidden';

function onLoginBtnClick(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username+"1111");
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);  
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = "Hello. " + username + "!";
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginBtnClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginBtnClick);
} else {
  paintGreeting(savedUserName);
}

//랜덤 이미지
//const selectColor2 = colors[Math.floor(Math.random() * colors.length)];
//const btn = document.getElementById("btn");

//console.log(selectColor1, selectColor2);

function btnClick() {
  const newColor1 = colors[Math.floor(Math.random() * colors.length)];
  const newColor2 = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById(
    "background"
  ).style.background = `linear-gradient( ${newColor1}, ${newColor2})`;
}

//btn.addEventListener("click", btnClick);
