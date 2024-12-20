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
            const userLang = navigator.language || navigator.userLanguage;
            if (userLang && !userLang.startsWith('ru')) {
                switchLanguage('en');
            }
        }

        let currentLanguage = 'ru';

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

        window.onload = detectLanguage;