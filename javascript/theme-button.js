console.log("Hello!");

let themeButton = document.querySelector(".js-themeButton");
let siteBackground = document.querySelector(".js-siteBackground");
let themeName = document.querySelector(".js-themeName");

themeButton.addEventListener("click", () => {
    siteBackground.classList.toggle("darkTheme");
    themeButton.classList.toggle("darkTheme");

    if (siteBackground.classList.contains("darkTheme")) {
        themeName.innerText = "light";
    } else {
        themeName.innerText = "dark";
    }
});