// const myHeading = document.querySelector("h1"); 
// myHeading.textContent = "Hello world!"; 

const imageTag = document.querySelector("img"); 

imageTag.onclick = () => {
   const curentImageSrc = imageTag.getAttribute("src"); 
   if (curentImageSrc === "images/sky.png"){
    imageTag.setAttribute("src", "images/duck.png")
   } else {
    imageTag.setAttribute("src", "images/sky.png"); 
   }
}; 

let myButton = document.querySelector("button"); 
let myHeading = document.querySelector("h1"); 

myButton.onclick = () => {
    setUserName(); 
}

function setUserName() {
    const myName = prompt("Please enter your name."); 
    if (!myName) {
        setUserName(); 
    } else {
        localStorage.setItem("name", myName); 
        myHeading.textContent = `Mozzila is cool, ${myName}`; 
    }
    
}; 


if (!localStorage.getItem("name")) {
    setUserName(); 
} else {
    const storedName = localStorage.getItem("name"); 
    myHeading.textContent = `Mozilla is cool, ${storedName}`; 
}

