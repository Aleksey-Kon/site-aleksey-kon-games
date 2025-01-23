//снег
const snowContainer = document.querySelector('.snow-container');
const snowflakeCount = 100; // Количество снежинок
const snowflakeCharacters = ["❄", "✼", "❅", "*", "✻"];

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = snowflakeCharacters[Math.floor(Math.random() * snowflakeCharacters.length)];
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);

    // Удаляем снежинку, когда анимация завершена
    snowflake.addEventListener("animationend", () => {
        snowflake.remove();
    });
}

function generateSnow() {
    for (let i = 0; i < snowflakeCount; i++) {
        setTimeout(createSnowflake, i * 100);
    }

    // Создаем снежинки каждые полсекунды
    setInterval(createSnowflake, 500);
}

generateSnow();