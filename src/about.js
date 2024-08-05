export default function component() {
    const content = document.querySelector("#content");

    const pageTitle = document.createElement("h1");
    const aboutContent = document.createElement("div");
    const para = document.createElement("p");

    pageTitle.classList.add("page-title");
    pageTitle.textContent = "About";
    para.classList.add("about-text");
    aboutContent.classList.add("about-content");
    para.innerText = `Welcome to Pasta La Vista, where your taste buds say “ciao” to ordinary and “buongiorno” to extraordinary! 🍝

    Our chefs are the Michelangelo of marinara, crafting each dish with love, laughter, and a pinch of Italian magic. From classic spaghetti to our secret family recipes, every meal is a masterpiece.
    
    Join us for a cozy dinner, a family feast, or a solo carb-loading session. Can’t make it? We’ll bring the pasta party to you with our speedy delivery service.`;

    aboutContent.appendChild(para);
    content.appendChild(pageTitle);
    content.appendChild(aboutContent);
}
