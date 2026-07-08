/* ===========================================
   AUTOLOGISTIC
   script.js
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
        КАЛЬКУЛЯТОР
    =========================*/

    const calcButton = document.getElementById("calcButton");

    if (calcButton) {

        calcButton.addEventListener("click", function () {

            const distance = parseFloat(document.getElementById("distance").value) || 0;
            const carType = parseFloat(document.getElementById("carType").value) || 2500;

            let price = carType;

            if (distance > 0) {
                price += distance * 70;
            }

            document.getElementById("result").innerHTML =
                price.toLocaleString("ru-RU") + " ₽";

        });

    }

    /*=========================
        ПЛАВНАЯ ПРОКРУТКА
    =========================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /*=========================
        АНИМАЦИЯ ПОЯВЛЕНИЯ
    =========================*/

    const elements = document.querySelectorAll(

        ".about-item, .service-card, .advantage-item, .step, .review-card, .faq-item, .price-row, .region"

    );

    elements.forEach(el => el.classList.add("fade-up"));

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    elements.forEach(el => observer.observe(el));

    /*=========================
        HEADER ПРИ СКРОЛЛЕ
    =========================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "#ffffff";
            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

        } else {

            header.style.background = "#ffffff";
            header.style.boxShadow = "0 3px 20px rgba(0,0,0,.06)";

        }

    });

    /*=========================
        FAQ (АККОРДЕОН)
    =========================*/

    document.querySelectorAll(".faq-item").forEach(item => {

        const answer = item.querySelector("p");

        if (!answer) return;

        answer.style.display = "none";

        item.style.cursor = "pointer";

        item.querySelector("h3").addEventListener("click", () => {

            document.querySelectorAll(".faq-item p").forEach(p => {

                if (p !== answer) p.style.display = "none";

            });

            answer.style.display =
                answer.style.display === "block"
                    ? "none"
                    : "block";

        });

    });

    /*=========================
        КНОПКА НАВЕРХ
    =========================*/

    const up = document.createElement("button");

    up.innerHTML = "↑";

    up.id = "scrollTop";

    document.body.appendChild(up);

    Object.assign(up.style, {

        position: "fixed",
        right: "25px",
        bottom: "25px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        border: "none",
        background: "#f97316",
        color: "#fff",
        fontSize: "22px",
        cursor: "pointer",
        display: "none",
        zIndex: "9999",
        boxShadow: "0 10px 30px rgba(0,0,0,.2)",
        transition: ".3s"

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            up.style.display = "block";

        } else {

            up.style.display = "none";

        }

    });

    up.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=========================
        ФОРМА
    =========================*/

    document.querySelectorAll("form").forEach(form => {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Спасибо! Ваша заявка успешно отправлена.");

            form.reset();

        });

    });

});