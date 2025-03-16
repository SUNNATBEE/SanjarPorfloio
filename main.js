document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.querySelector(".header__burger__btn");
    const navList = document.querySelector(".header__list");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".card");
    const langOptions = document.querySelectorAll(".lang-option");
    const s_lan = document.querySelector(".s_lan");

    // Burger menyu funksiyasi
    burgerBtn.addEventListener("click", () => {
        navList.classList.toggle("hidden");
    });

    // Dropdown menyuni ochish-yopish
    dropdownToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("hidden");
    });

    // Til almashtirish funksiyasi
    const translations = {
        uz: {
            home: "Bosh sahifa",
            about: "Haqida",
            projects: "Loyihalar",
            contact: "Bog’lanish",
            language: "Til tanlash"
        },
        en: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            language: "Select Language"
        },
    };

    langOptions.forEach((option) => {
        option.addEventListener("click", function () {
            const selectedLang = this.getAttribute("data-lang");
            localStorage.setItem("selectedLang", selectedLang); // Tanlangan tilni saqlash

            document.querySelectorAll("[data-lang]").forEach((element) => {
                const key = element.getAttribute("data-lang");
                if (translations[selectedLang][key]) {
                    element.innerText = translations[selectedLang][key];
                }
            });

            dropdownMenu.classList.add("hidden"); // Til tanlangandan keyin menyuni yopish
        });
    });

    // Sayt ochilganda so'nggi tanlangan tilni yuklash
    const savedLang = localStorage.getItem("selectedLang") || "uz";
    document.querySelector(`[data-lang="${savedLang}"]`).click();
});
