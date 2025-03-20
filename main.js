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
            language: "Til"
        },
        en: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            language: "Language"
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


    // Filter qismi

    // function toggleDropdown(id) {
    //     document.getElementById(id).style.display = 
    //         document.getElementById(id).style.display === "block" ? "none" : "block";
    // }
    
    // function filterItems(category) {
    //     let items = document.querySelectorAll('.items div');
    //     items.forEach(item => {
    //         item.style.display = category === 'all' || item.classList.contains(category) ? 'block' : 'none';
    //     });
    // }
});

const userForm = document.querySelector("#form");
const userName = document.querySelector("#ism");
const userEmail = document.querySelector("#email1");
const userDesck = document.querySelector("#izoh");

const BOT_TOKEN = "7772442946:AAGsBqTDxTm20nn-NfIye37zGmBpnOZrxTs";  // Telegram bot token
const CHAT_ID = "7221078203";  // Chat ID (o'zingiz yoki guruh)

userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = userName.value.trim();
    const email = userEmail.value.trim();
    const desc = userDesck.value.trim();

    if (!name || !email || !desc) {
        alert("Barcha maydonlarni to'ldiring!");
        return;
    }

    const message = `📝 *Yangi So'rov!*%0A%0A👤 *Ism:* ${name}%0A📧 *Email:* ${email}%0A💬 *Izoh:* ${desc}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}&parse_mode=Markdown`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("So'rov yuborildi! ✅");
                userForm.reset(); // Formani tozalash
            } else {
                alert("Xatolik yuz berdi! ❌");
            }
        })
        .catch(error => {
            alert("Tarmoqda muammo bor! ❌");
            console.error("Xatolik:", error);
        });
});
