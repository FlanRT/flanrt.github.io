let welcome_image = document.querySelector("img");

welcome_image.onclick = function() {
    let image_source = welcome_image.getAttribute("src");
    if (image_source == "images/cirno_0.png")
        welcome_image.setAttribute("src", "images/cirno_1.png");
    else
        welcome_image.setAttribute("src", "images/cirno_0.png");
}

let button = document.querySelector("button");
let header2 = document.querySelector("h2");

function setUserName() {
    let userName = prompt("Please Enter Your Name");
    if (!userName || userName === null)
        setUserName();
    else {
        localStorage.setItem("name", userName);
        header2.textContent = "Welcome " + userName + ", we're glad to see you here";
    }
}

if (!localStorage.getItem("name"))
    setUserName();
else
    header2.textContent = "Welcome " + localStorage.getItem("name") + ", we're glad to see you here";

button.onclick = function() {
    setUserName();
}