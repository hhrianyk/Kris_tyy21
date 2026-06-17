// 🌸 НІЖНА ІНТЕРАКТИВНА ПОДОРОЖ ДЛЯ КРІСТИНИ

// ===== ГЛОБАЛЬНІ ЗМІННІ =====
let currentScreen = 1;
const totalScreens = 5;
let isTransitioning = false;
let candleCount = 0;
let usedPhotos = [];
let allPhotos = [];
let fireworkInterval = null;

// ===== ДАНІ =====
const wishes = [
    { text: "Будь завжди такою ж ніжною та прекрасною! 🌸", emoji: "💝" },
    { text: "Нехай кожен день приносить тобі радість! ☀️", emoji: "🌷" },
    { text: "Ти — найкраща квітка в моєму саду! 🌹", emoji: "💖" },
    { text: "Бажаю тобі море щастя та океан любові! 🌊", emoji: "💕" },
    { text: "Нехай твої мрії завжди збуваються! ✨", emoji: "🌟" },
    { text: "Ти — справжнє диво, Крістино! 💫", emoji: "🌸" },
    { text: "Бажаю тобі безмежної ніжності та тепла! 🫶", emoji: "💗" },
    { text: "Нехай усі твої дні будуть світлими! ☀️", emoji: "🌺" },
    { text: "Ти заслуговуєш на найкраще у світі! 💎", emoji: "💖" },
    { text: "Бажаю тобі вічної краси та молодості! 🦋", emoji: "🌸" },
    { text: "Нехай любов огортає тебе з усіх боків! 💕", emoji: "💝" },
    { text: "Ти — найчарівніша дівчина, яку я знаю! ✨", emoji: "💫" },
    { text: "Бажаю тобі казкового життя! 🏰", emoji: "🌷" },
    { text: "Нехай щастя переповнює твоє серце! 💗", emoji: "💖" },
    { text: "Ти — моє найбільше натхнення! 🎨", emoji: "🌸" },
    { text: "Бажаю тобі квітучої весни в душі! 🌸", emoji: "💕" },
    { text: "Нехай кожна мить буде чарівною! ✨", emoji: "🌟" },
    { text: "Ти — найкращий подарунок долі! 🎁", emoji: "💝" },
    { text: "Бажаю тобі безхмарного неба над головою! ☀️", emoji: "🌺" },
    { text: "Нехай твої очі завжди сяють щастям! ✨", emoji: "💖" },
    { text: "Ти — найніжніша та найкрасивіша! 🌹", emoji: "🌸" },
    { text: "Бажаю тобі безмежного кохання! 💕", emoji: "💗" },
    { text: "Нехай життя буде солодким, як мед! 🍯", emoji: "🌷" },
    { text: "Ти — моя найкраща мрія! 💫", emoji: "🌟" },
    { text: "Бажаю тобі щасливого та довгого життя! 🎂", emoji: "💖" },
    { text: "Нехай твоя посмішка завжди сяє! 😊", emoji: "🌸" },
    { text: "Ти — справжня принцеса! 👑", emoji: "💝" },
    { text: "Бажаю тобі неймовірних пригод! 🌍", emoji: "💕" },
    { text: "Нехай музика любові завжди звучить у твоєму серці! 🎵", emoji: "💗" },
    { text: "Ти — найчарівніша зірка на небі! ⭐", emoji: "🌟" },
    { text: "Бажаю тобі бути щасливою щодня! ☀️", emoji: "🌺" },
    { text: "Нехай доля буде до тебе лагідною! 🫶", emoji: "💖" },
    { text: "Ти — найкраща подруга та натхнення! 🌸", emoji: "💕" },
    { text: "Бажаю тобі квіткового настрою! 🌷", emoji: "💗" },
    { text: "Нехай твої бажання завжди збуваються! ✨", emoji: "🌟" },
    { text: "Ти — найпрекрасніша квітка на Землі! 🌹", emoji: "💝" },
    { text: "Бажаю тобі море позитиву та радості! 🌊", emoji: "💖" },
    { text: "Нехай кожен день буде схожий на свято! 🎉", emoji: "🌸" },
    { text: "Ти — найкращий подарунок у моєму житті! 🎁", emoji: "💕" },
    { text: "Бажаю тобі безмежної ніжності та турботи! 🫶", emoji: "💗" },
    { text: "Нехай твоє серце завжди буде сповнене любові! 💖", emoji: "🌷" }
];

// ВСІ ФОТО - 21 ШТУКА (БЕЗ 09_flower.jpg)
const photoFiles = [
    '01_main.jpg', '02_shadow.jpg', '03_wings.jpg', '04_alone.jpg',
    '05_alone2.jpg', '06_happy.jpg', '07_glasses.jpg', '08_blond.jpg',
    '10_basein.jpg', '10_basein2.jpg', '11_rollers.jpg',
    '12_lips.jpg', '13_sexy.jpg', '14_spring.jpg', '15_angry.jpg',
    '16_like.jpg', '17_winter.jpg', 'LeopardSkin.jpg',
    '01_main.jpg', '06_happy.jpg', '12_lips.jpg'
];

// ФОТО ДЛЯ ФІНАЛЬНОЇ СТОРІНКИ
const finalPhoto = 'mainjpg.jpg';

// ===== DOM ЕЛЕМЕНТИ =====
const screens = {
    1: document.getElementById('screen1'),
    2: document.getElementById('screen2'),
    3: document.getElementById('screen3'),
    4: document.getElementById('screen4'),
    5: document.getElementById('screen5')
};

const startBtn = document.getElementById('startBtn');
const nextBtn1 = document.getElementById('nextBtn1');
const nextBtn2 = document.getElementById('nextBtn2');
const nextBtn3 = document.getElementById('nextBtn3');
const finishBtn = document.getElementById('finishBtn');
const typingText = document.getElementById('typing-text');
const progressFill = document.getElementById('progressFill');
const candlesContainer = document.getElementById('candlesContainer');
const candlesPool = document.getElementById('candlesPool');
const candleCountEl = document.getElementById('candleCount');
const candleProgressFill = document.getElementById('candleProgressFill');
const photosGrid = document.getElementById('photosGrid');

// ===== ФУНКЦІЇ ПЕРЕКЛЮЧЕННЯ ЕКРАНІВ =====
function showScreen(num) {
    if (isTransitioning || num === currentScreen) return;
    isTransitioning = true;

    Object.keys(screens).forEach(key => {
        screens[key].classList.remove('active');
    });

    screens[num].classList.add('active');
    currentScreen = num;

    const progress = ((num - 1) / (totalScreens - 1)) * 100;
    progressFill.style.width = progress + '%';

    if (num === 2) {
        setTimeout(() => initCakeGame(), 300);
    }
    if (num === 3) {
        setTimeout(() => initPhotosGrid(), 300);
    }
    if (num === 4) {
        setTimeout(() => initWishes(), 300);
    }
    if (num === 5) {
        setTimeout(() => initFinalScreen(), 300);
    }

    setTimeout(() => {
        isTransitioning = false;
    }, 800);
}

// ===== ЕКРАН 1: Інтрига =====
function initTyping() {
    const text = "Цей день створений для тебе...";
    let index = 0;
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            typingText.textContent = text.substring(0, index);
            index--;
            if (index < 0) {
                isDeleting = false;
                index = 0;
                setTimeout(type, 500);
                return;
            }
            setTimeout(type, 30);
        } else {
            typingText.textContent = text.substring(0, index);
            index++;
            if (index > text.length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
            setTimeout(type, 50);
        }
    }

    type();
}

// ===== 🎂 ЕКРАН 2: ГРА З ТОРТОМ =====
function initCakeGame() {
    allPhotos = [...photoFiles];
    for (let i = allPhotos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allPhotos[i], allPhotos[j]] = [allPhotos[j], allPhotos[i]];
    }

    usedPhotos = [];
    candleCount = 0;

    candlesContainer.innerHTML = '';
    candlesPool.innerHTML = '';
    candleCountEl.textContent = '0';
    candleProgressFill.style.width = '0%';
    nextBtn1.style.display = 'none';

    for (let i = 1; i <= 21; i++) {
        const candle = document.createElement('div');
        candle.className = 'candle-pool-item';
        candle.dataset.index = i;
        candle.innerHTML = `<span class="pool-number">${i}</span>`;
        candle.style.animationDelay = `${i * 0.04}s`;
        candle.addEventListener('click', () => placeCandle(candle, i));
        candlesPool.appendChild(candle);
    }
}

function placeCandle(candleElement, number) {
    if (candleElement.classList.contains('used')) return;
    if (candleCount >= 21) return;

    if (usedPhotos.length >= allPhotos.length) {
        return;
    }

    const photo = allPhotos[usedPhotos.length];
    usedPhotos.push(photo);

    candleElement.classList.add('used');

    candleCount++;
    candleCountEl.textContent = candleCount;
    candleProgressFill.style.width = (candleCount / 21 * 100) + '%';

    candleCountEl.style.animation = 'none';
    setTimeout(() => {
        candleCountEl.style.animation = 'counterBump 0.3s ease-out';
    }, 10);

    const candleOnCake = document.createElement('div');
    candleOnCake.className = 'candle-on-cake';
    candleOnCake.style.animationDelay = `${Math.random() * 0.2}s`;

    const photoDiv = document.createElement('div');
    photoDiv.className = 'candle-photo';
    const img = document.createElement('img');
    img.src = `/static/images/${photo}`;
    img.alt = `Фото ${candleCount}`;
    img.loading = 'lazy';
    img.onerror = function() {
        this.style.display = 'none';
        const fallback = document.createElement('span');
        fallback.textContent = '🌸';
        fallback.style.cssText = 'font-size: 14px; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;';
        this.parentNode.appendChild(fallback);
    };
    photoDiv.appendChild(img);

    const stick = document.createElement('div');
    stick.className = 'candle-stick';

    candleOnCake.appendChild(photoDiv);
    candleOnCake.appendChild(stick);
    candlesContainer.appendChild(candleOnCake);

    createSparkles(candleElement);
    playGentleSound();

    if (candleCount === 21) {
        setTimeout(() => {
            nextBtn1.style.display = 'inline-flex';
            nextBtn1.style.animation = 'btnPulse 1.5s ease-in-out infinite';
            createFinalCelebration();
        }, 500);
    }
}

function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const emojis = ['✨', '🌸', '💝', '💕', '🌟'];

    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        const xOffset = (Math.random() - 0.5) * 60;
        const yOffset = (Math.random() - 0.5) * 60;
        sparkle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width/2 + xOffset}px;
            top: ${rect.top + rect.height/2 + yOffset}px;
            font-size: ${14 + Math.random() * 16}px;
            pointer-events: none;
            z-index: 50;
            animation: sparkleFly ${0.5 + Math.random() * 0.5}s ease-out forwards;
        `;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1200);
    }
}

function playGentleSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.frequency.value = 500 + Math.random() * 400;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.15);
    } catch(e) {}
}

function createFinalCelebration() {
    const emojis = ['🎂', '🎉', '🎊', '✨', '💖', '🌟', '🎈', '🎁', '💝', '🌸', '🥳', '💕'];
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            const size = 20 + Math.random() * 30;
            const x = 10 + Math.random() * 80;
            particle.style.cssText = `
                position: fixed;
                left: ${x}%;
                top: -20px;
                font-size: ${size}px;
                pointer-events: none;
                z-index: 50;
                animation: celebrateFall ${2 + Math.random() * 3}s ease-out forwards;
                animation-delay: ${Math.random() * 0.5}s;
            `;
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 5000);
        }, i * 25);
    }
}

// ===== 💝 ЕКРАН 3: Фото =====
function initPhotosGrid() {
    photosGrid.innerHTML = '';

    const photos = usedPhotos.length === 21 ? usedPhotos : allPhotos.slice(0, 21);

    photos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.style.animationDelay = `${index * 0.04}s`;

        const img = document.createElement('img');
        img.src = `/static/images/${photo}`;
        img.alt = `Фото ${index + 1}`;
        img.loading = 'lazy';
        img.onerror = function() {
            this.style.display = 'none';
            const fallback = document.createElement('span');
            fallback.textContent = '🌸';
            fallback.style.cssText = 'font-size: 20px; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;';
            this.parentNode.appendChild(fallback);
        };

        const number = document.createElement('span');
        number.className = 'card-number';
        number.textContent = `#${index + 1}`;

        card.appendChild(img);
        card.appendChild(number);
        photosGrid.appendChild(card);
    });
}

// ===== 💌 ЕКРАН 4: Привітання =====
function initWishes() {
    const container = document.getElementById('wishesWaterfall');
    if (container.children.length > 0) return;

    const shuffled = [...wishes].sort(() => Math.random() - 0.5);

    shuffled.forEach((wish, index) => {
        const card = document.createElement('div');
        card.className = 'wish-card-mini';
        card.style.animationDelay = `${index * 0.025}s`;
        card.innerHTML = `
            <span class="wish-emoji">${wish.emoji}</span>
            ${wish.text}
        `;
        container.appendChild(card);
    });
}

// ===== 🎆 ЕКРАН 5: ФІНАЛЬНИЙ =====
function initFinalScreen() {
    const container = document.getElementById('finalContainer');
    container.innerHTML = '';

    // Головне фото
    const mainPhoto = document.createElement('div');
    mainPhoto.className = 'final-main-photo';
    const img = document.createElement('img');
    img.src = `/static/images/${finalPhoto}`;
    img.alt = 'Крістина';
    img.loading = 'lazy';
    img.onerror = function() {
        this.style.display = 'none';
    };
    mainPhoto.appendChild(img);
    container.appendChild(mainPhoto);

    // Компліменти
    const compliments = [
        '🌸 Ти — найкраща!',
        '💝 Будь щасливою!',
        '✨ Ти — диво!',
        '🌹 Квітуй завжди!',
        '💕 Люблю тебе!',
        '🌟 Сяй яскраво!',
        '🎂 З Днем Народження!',
        '💖 Ти — неймовірна!'
    ];

    const complimentsContainer = document.createElement('div');
    complimentsContainer.className = 'final-compliments';

    compliments.forEach((text, index) => {
        const span = document.createElement('span');
        span.className = 'final-compliment';
        span.textContent = text;
        span.style.animationDelay = `${index * 0.2}s`;
        complimentsContainer.appendChild(span);
    });

    container.appendChild(complimentsContainer);

    // Салют з емодзі
    const fireworksContainer = document.createElement('div');
    fireworksContainer.className = 'final-fireworks';
    container.appendChild(fireworksContainer);

    // Запускаємо салют
    if (fireworkInterval) clearInterval(fireworkInterval);

    const fireworkEmojis = ['🎆', '🎇', '✨', '🌟', '💫', '🎉', '🎊', '🌸', '💖', '⭐'];

    function createFirework() {
        const emoji = fireworkEmojis[Math.floor(Math.random() * fireworkEmojis.length)];
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 80;
        const size = 24 + Math.random() * 30;

        const el = document.createElement('span');
        el.className = 'firework-emojis';
        el.textContent = emoji;
        el.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            font-size: ${size}px;
            animation-duration: ${1.5 + Math.random() * 1.5}s;
            animation-delay: ${Math.random() * 0.3}s;
        `;
        fireworksContainer.appendChild(el);

        setTimeout(() => el.remove(), 3000);
    }

    // Створюємо багато салютів
    for (let i = 0; i < 8; i++) {
        setTimeout(createFirework, i * 200);
    }

    fireworkInterval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
            setTimeout(createFirework, i * 150);
        }
    }, 2000);

    // Фонові квіти
    const flowers = document.createElement('div');
    flowers.className = 'final-flowers';
    const flowerEmojis = ['🌸', '🌷', '🌹', '🌺', '🌻', '🌼', '💐'];
    for (let i = 0; i < 20; i++) {
        const span = document.createElement('span');
        span.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        span.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${20 + Math.random() * 30}px;
            animation-duration: ${5 + Math.random() * 5}s;
            animation-delay: ${Math.random() * 4}s;
        `;
        flowers.appendChild(span);
    }
    container.appendChild(flowers);
}

// ===== ДОДАТКОВІ СТИЛІ ДЛЯ АНІМАЦІЙ =====
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes counterBump {
        0% { transform: scale(1); }
        50% { transform: scale(1.5); color: var(--rose); }
        100% { transform: scale(1); }
    }

    @keyframes sparkleFly {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 1; }
        100% { transform: translate(var(--tx, -40px), var(--ty, -80px)) scale(0) rotate(360deg); opacity: 0; }
    }

    @keyframes celebrateFall {
        0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
        100% { transform: translateY(calc(100vh + 100px)) rotate(720deg) scale(0.2); opacity: 0; }
    }

    @keyframes btnPulse {
        0%, 100% { box-shadow: 0 0 20px rgba(233, 30, 99, 0.15); }
        50% { box-shadow: 0 0 40px rgba(233, 30, 99, 0.3); }
    }
`;
document.head.appendChild(styleSheet);

// ===== ПОДІЇ =====
startBtn.addEventListener('click', () => {
    showScreen(2);
});

nextBtn1.addEventListener('click', () => {
    showScreen(3);
});

nextBtn2.addEventListener('click', () => {
    showScreen(4);
});

nextBtn3.addEventListener('click', () => {
    showScreen(5);
});

finishBtn.addEventListener('click', () => {
    if (fireworkInterval) {
        clearInterval(fireworkInterval);
        fireworkInterval = null;
    }

    const screen5 = document.getElementById('screen5');
    screen5.style.transition = 'opacity 0.6s, transform 0.6s';
    screen5.style.opacity = '0';
    screen5.style.transform = 'scale(0.95)';

    setTimeout(() => {
        screen5.style.transition = '';
        screen5.style.opacity = '';
        screen5.style.transform = '';
        showScreen(1);
        progressFill.style.width = '0%';
        candleCount = 0;
        usedPhotos = [];
    }, 600);
});

// ===== МУЗИКА =====
function setupMusic() {
    const audio = document.getElementById('bg-music');
    const toggle = document.getElementById('music-toggle');
    if (!audio || !toggle) return;

    audio.volume = 0.2;
    audio.loop = true;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                toggle.innerHTML = '🎵';
                toggle.classList.add('playing');
            })
            .catch(() => {
                toggle.innerHTML = '🔇';
                toggle.classList.remove('playing');

                const tryPlay = () => {
                    audio.play()
                        .then(() => {
                            toggle.innerHTML = '🎵';
                            toggle.classList.add('playing');
                            ['click', 'touchstart', 'scroll'].forEach(event => {
                                document.removeEventListener(event, tryPlay);
                            });
                        })
                        .catch(e => console.log('Музика не грає:', e));
                };

                ['click', 'touchstart', 'scroll'].forEach(event => {
                    document.addEventListener(event, tryPlay, { once: true });
                });
            });
    }

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();

        if (audio.paused) {
            audio.play()
                .then(() => {
                    toggle.innerHTML = '🎵';
                    toggle.classList.add('playing');
                })
                .catch(e => console.log('Помилка відтворення:', e));
        } else {
            audio.pause();
            toggle.innerHTML = '🔇';
            toggle.classList.remove('playing');
        }
    });
}

// ===== КЛАВІАТУРА =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (currentScreen === 1) startBtn.click();
        else if (currentScreen === 2 && candleCount === 21) nextBtn1.click();
        else if (currentScreen === 3) nextBtn2.click();
        else if (currentScreen === 4) nextBtn3.click();
        else if (currentScreen === 5) finishBtn.click();
    }
});

// ===== ІНІЦІАЛІЗАЦІЯ =====
document.addEventListener('DOMContentLoaded', function() {
    initTyping();
    setupMusic();

    setTimeout(() => {
        screens[1].classList.add('active');
        progressFill.style.width = '0%';
    }, 100);
});