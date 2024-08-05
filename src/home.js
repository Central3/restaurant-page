import "./style.css";
import menus from "./menu";

function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (content) element.textContent = content;
    if (className) element.classList.add(className);

    return element;
}

export default function component() {
    const content = document.querySelector("#content");
    const heroContainer = createElement("div", "hero-container");
    const hero = createElement("div", "hero");
    const restaurantTitle = createElement("h1", "", "Pasta La Vista");
    const main = createElement("main", "restaurant-info");
    const infoHeading = createElement("h1", "", "Welcome");
    const infoPara = createElement(
        "p",
        "",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sunt non, maiores quia earum repudiandae distinctio soluta. Tenetur hic officiis eveniet obcaecati suscipit blanditiis facere, vitae distinctio a perferendis molestias sequi cupiditate doloremque voluptate quod error modi esse officia fugit ea! Suscipit harum error iusto fugiat nesciunt, reiciendis asperiores repellendus."
    );
    const infoBtn = createElement("button", "", "View Our Menus");

    content.appendChild(heroContainer);
    heroContainer.appendChild(hero);
    hero.appendChild(restaurantTitle);
    content.appendChild(main);
    main.appendChild(infoHeading);
    main.appendChild(infoPara);
    main.appendChild(infoBtn);

    infoBtn.addEventListener("click", () => {
        content.innerHTML = "";
        menus();
    });
}
