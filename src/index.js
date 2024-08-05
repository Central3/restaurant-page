import home from "./home";
import menus from "./menu";

const content = document.querySelector("#content");
const navbar = document.querySelector("nav");

navbar.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        if (event.target.id === "home") {
            content.innerHTML = "";
            home();
        } else if (event.target.id === "menu") {
            content.innerHTML = "";
            menus();
        } else if (event.target.id === "about") {
            content.innerHTML = "";
        }
    }
});

home();
