import pizza from "./menu.jpg";
import pastaMenu from "./pastaMenu";
import pizzaMenu from "./pizzaMenu";

export default function component() {
    const content = document.querySelector("#content");
    const heroContainer = document.createElement("div");
    const hero = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const menusContainer = document.createElement("div");
    const pastasContainer = document.createElement("div");
    const pizzasContainer = document.createElement("div");
    const pastasHeading = document.createElement("h1");
    const pizzasHeading = document.createElement("h1");
    const pastaMenuItemContainer = document.createElement("div");
    const pizzaMenuItemContainer = document.createElement("div");

    function createMenuItem(item, container) {
        const heading = document.createElement("h3");
        const para = document.createElement("p");

        const menuItemName = document.createTextNode(
            `${item.name} - ${item.price}`
        );
        const menuItemIngredients = document.createTextNode(item.ingredients);

        heading.appendChild(menuItemName);
        para.appendChild(menuItemIngredients);
        container.appendChild(heading);
        container.appendChild(para);
    }

    pastaMenu.forEach((item) => {
        createMenuItem(item, pastaMenuItemContainer);
    });

    pizzaMenu.forEach((item) => {
        createMenuItem(item, pizzaMenuItemContainer);
    });

    heroContainer.classList.add("hero-container");
    hero.classList.add("hero");
    pageTitle.textContent = "Menu";
    hero.style.height = "45vh";
    hero.style.backgroundImage = `url(${pizza})`;
    menusContainer.classList.add("menus-container");
    pastasHeading.textContent = "Pastas";
    pizzasHeading.textContent = "Pizzas";

    content.appendChild(heroContainer);
    heroContainer.appendChild(hero);
    hero.appendChild(pageTitle);
    pastasContainer.appendChild(pastasHeading);
    pizzasContainer.appendChild(pizzasHeading);
    menusContainer.appendChild(pastasContainer);
    pastasContainer.appendChild(pastaMenuItemContainer);
    pizzasContainer.appendChild(pizzaMenuItemContainer);
    menusContainer.appendChild(pizzasContainer);
    content.appendChild(menusContainer);
}
