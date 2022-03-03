{
    const welcome = () => {
        console.log("Hello!");
    }

    const themeButton = document.querySelector(".js-themeButton");

    const toggleBackground = () => {
        const siteBackground = document.querySelector(".js-siteBackground");
        const themeName = document.querySelector(".js-themeName");

        siteBackground.classList.toggle("darkTheme");
        themeButton.classList.toggle("darkTheme");

        if (siteBackground.classList.contains("darkTheme")) {
            themeName.innerText = "light";
        } else {
            themeName.innerText = "dark";
        }
    }
    const init = () => {
        themeButton.addEventListener("click", toggleBackground)

        welcome();
    }
    init();
}