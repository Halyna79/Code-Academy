import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", () => {
    // Ініціалізація `accordion-js`
    new Accordion(".list-qestions", {
        duration: 300, // Час анімації (можна змінити)
        showMultiple: false, // Тільки один відкритий елемент за раз
    });

    // Отримуємо всі кнопки акордеону
    const accordionButtons = document.querySelectorAll(".topic-button");

    accordionButtons.forEach((button) => {
        // Отримуємо відповідний параграф і SVG
        const question = button.nextElementSibling;
        const icon = button.querySelector("use");

        // Початковий стан - ховаємо параграф
        question.style.display = "none";

        button.addEventListener("click", () => {
            // Перемикаємо відображення питання
            const isOpen = question.style.display === "block";

            // Закриваємо всі інші питання перед відкриттям нового
            document.querySelectorAll(".questions").forEach((q) => (q.style.display = "none"));
            document.querySelectorAll(".icon-accordion-close use").forEach((i) =>
                i.setAttribute("href", "/img/icons.svg#icon-accordion-opensvg")
            );

            // Якщо було відкрите - закриваємо, інакше відкриваємо
            if (isOpen) {
                question.style.display = "none";
                icon.setAttribute("href", "/img/icons.svg#icon-accordion-opensvg");
            } else {
                question.style.display = "block";
                icon.setAttribute("href", "/img/icons.svg#icon-accordion-closesvg");
            }
        });
    });
});
