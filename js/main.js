const header = document.getElementById('main-header');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScrollY = window.scrollY;
        });



        function enlargeImage(img) {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1000';
        
            const enlargedImg = document.createElement('img');
            enlargedImg.src = img.src;
            enlargedImg.style.maxWidth = '90%';
            enlargedImg.style.maxHeight = '90%';
            enlargedImg.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        
            const closeButton = document.createElement('div');
            closeButton.innerHTML = '&times;';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '10px';
            closeButton.style.right = '10px';
            closeButton.style.fontSize = '30px';
            closeButton.style.color = 'orange';
            closeButton.style.cursor = 'pointer';
            closeButton.style.zIndex = '1001';
            closeButton.onclick = function() {
                document.body.removeChild(modal);
            };
        
            modal.appendChild(enlargedImg);
            modal.appendChild(closeButton);
        
            document.body.appendChild(modal);
        }

        function switchLanguage(lang) {
            const elements = document.querySelectorAll("[data-lang]");
            elements.forEach(el => {
                const translations = JSON.parse(el.dataset.lang);
                el.textContent = translations[lang];
            });
        }

        function detectLanguage() {
            const userLang = navigator.language;
            if (userLang && !userLang.startsWith('ru')) {
                switchLanguage('en');
            }
        }

        let currentLanguage = navigator.language;

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        const button = document.getElementById('lang-toggle-btn');
        button.textContent = currentLanguage.toUpperCase();

        // Example language switching functionality
        const elements = document.querySelectorAll("[data-lang]");
        elements.forEach(el => {
            const translations = JSON.parse(el.dataset.lang);
            el.textContent = translations[currentLanguage];
        });
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        detectLanguage(); // Ваш код для определения языка
      });
        

      




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



    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;

    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
      });
      prevButton.disabled = currentSlide === 0;
      nextButton.disabled = currentSlide === slides.length - 1;
    }

    prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
      }
    });

    nextButton.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
      }
    });

    updateSlides();



    document.addEventListener("DOMContentLoaded", () => {
        // Найти элемент
        const contentDiv = document.getElementById("contentgame");
    
        // Получить значение data-lang
        const rawData = contentDiv.getAttribute("data-lang");
    
        // Раскодировать JSON
        const decodedData = JSON.parse(rawData);
    
        // Выбрать язык, например "ru"
        const htmlContent = decodedData.ru;
    
        // Поместить раскодированный HTML в элемент
        contentDiv.innerHTML = htmlContent;
    });
    