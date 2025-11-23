const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/l.jpg") {
        myImage.setAttribute("src", "images/one.jpg");
    } else {
        myImage.setAttribute("src", "images/l.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
};

myButton.onclick = function () {
    setUserName();
};