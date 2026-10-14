"use strict";

/* ==========================================================
   МОВА САЙТУ: українська (за замовчуванням) ↔ російська
   Словник: ключ — український текст зі сторінки, значення —
   російський переклад. Щоб змінити переклад — правь значення нижче.
========================================================== */

const I18N_RU = {
    "Про мене": "Обо мне",
    "Послуги": "Услуги",
    "Результати": "Результаты",
    "Контакти": "Контакты",
    "ТРАНСФОРМАЦІЙ": "ТРАНСФОРМАЦИЙ",
    "РОКІВ ТРЕНЕРСЬКОГО ДОСВІДУ": "ГОДА ОПЫТА",
    "РОКІВ У СПОРТІ": "ЛЕТ В СПОРТЕ",
    "Побудуй тіло,": "Построй тело,",
    "яким": "которым",
    "будеш пишатися": "будешь гордиться",
    "Онлайн ведення 1 на 1": "Онлайн-ведение 1 на 1",
    "Твій персональний план тренувань, харчування та постійний зворотний зв'язок, щоб системно прийти до бажаної форми": "Твой персональный план тренировок, питания и постоянная обратная связь, чтобы системно прийти к желаемой форме",
    "Записатися": "Записаться",
    "Індивідуальний план": "Индивидуальный план",
    "Харчування": "Питание",
    "Зворотний зв'язок": "Обратная связь",
    "МОЯ ІСТОРІЯ": "МОЯ ИСТОРИЯ",
    "Я теж колись": "Я тоже когда-то",
    "починав з нуля": "начинал с нуля",
    "ДО": "ДО",
    "ПІСЛЯ": "ПОСЛЕ",
    "років": "лет",
    "рік": "год",
    "Сьогодні": "Сегодня",
    "Починаю займатися боротьбою": "Начинаю заниматься борьбой",
    "Розумію, що просто тренуватися, як усі, недостатньо. Додаю силові, працюю над харчуванням": "Понимаю, что просто тренироваться, как все, недостаточно. Добавляю силовые, работаю над питанием",
    "Глибше вивчаю тренування та харчування, проходжу навчання, працюю з тренерами, експериментую на собі": "Глубже изучаю тренировки и питание, прохожу обучение, работаю с тренерами, экспериментирую на себе",
    "Змінююся з 65 до 73 кг, зберігши хорошу форму": "Меняюсь с 65 до 73 кг, сохранив хорошую форму",
    "Розвиваюся далі: силові тренування, єдиноборства, біг і функціональний тренінг": "Развиваюсь дальше: силовые тренировки, единоборства, бег и функциональный тренинг",
    "Результат — це не генетика чи випадковість, а система і розуміння того, що ти робиш.": "Результат — это не генетика и не случайность, а система и понимание того, что ты делаешь.",
    "Я пройшов цей шлях сам.": "Я прошёл этот путь сам.",
    "Тепер допомагаю пройти його тобі.": "Теперь помогаю пройти его тебе.",
    "Читати повну історію": "Читать полную историю",
    "З 10 років я займався боротьбою.": "С 10 лет я занимался борьбой.",
    "У 13 зрозумів, що просто тренуватися, як усі, недостатньо.": "В 13 понял, что просто тренироваться, как все, недостаточно.",
    "Я був маленьким і худим хлопцем та хотів змінити своє тіло.": "Я был маленьким и худым парнем и хотел изменить своё тело.",
    "Почав додавати силові тренування, працювати над харчуванням і шукати те, що справді працює.": "Начал добавлять силовые тренировки, работать над питанием и искать то, что действительно работает.",
    "У 18 років я почав глибше вивчати тренування та харчування, проходив навчання, працював із тренерами, експериментував на собі й робив багато помилок.": "В 18 лет я начал глубже изучать тренировки и питание, проходил обучение, работал с тренерами, экспериментировал на себе и делал много ошибок.",
    "За рік я змінився з 65 до 73 кг, зберігши хорошу форму.": "За год я изменился с 65 до 73 кг, сохранив хорошую форму.",
    "Цей досвід навчив мене головного: результат — це не генетика чи випадковість, а система і розуміння того, що ти робиш.": "Этот опыт научил меня главному: результат — это не генетика и не случайность, а система и понимание того, что ты делаешь.",
    "Сьогодні я продовжую розвиватися сам і поєдную силові тренування з єдиноборствами, бігом та функціональним тренінгом.": "Сегодня я продолжаю развиваться сам и совмещаю силовые тренировки с единоборствами, бегом и функциональным тренингом.",
    "Для мене сильне тіло — це не тільки м'язи.": "Для меня сильное тело — это не только мышцы.",
    "Воно має бути сильним, здоровим, витривалим та енергійним.": "Оно должно быть сильным, здоровым, выносливым и энергичным.",
    "Саме цю систему я передаю своїм підопічним, щоб вони не просто отримали результат, а навчилися керувати своїм тілом самостійно.": "Именно эту систему я передаю своим подопечным, чтобы они не просто получили результат, а научились управлять своим телом самостоятельно.",
    "Я не просто допоможу тобі змінити тіло. Я навчу тебе розуміти, як його змінювати": "Я не просто помогу тебе изменить тело. Я научу тебя понимать, как его менять",
    "років у спорті": "лет в спорте",
    "клієнтів та трансформацій": "клиентов и трансформаций",
    "роки тренерства, освіта бакалавр ФКіС": "года тренерства, образование бакалавр ФКиС",
    "Готовий змінити своє тіло?": "Готов изменить своё тело?",
    "Почати свою трансформацію": "Начать свою трансформацию",
    "ПРО МЕНЕ": "ОБО МНЕ",
    "Чому мені": "Почему мне",
    "довіряють": "доверяют",
    "Чому я?": "Почему я?",
    "Без крайнощів": "Без крайностей",
    "Постійна підтримка": "Постоянная поддержка",
    "Тренування, які підходять тобі": "Тренировки, которые подходят тебе",
    "Розумієш, що робиш": "Понимаешь, что делаешь",
    "ПОСЛУГИ": "УСЛУГИ",
    "Обери свій": "Выбери свой",
    "Тренування та супровід під твої цілі, рівень підготовки та спосіб життя.": "Тренировки и сопровождение под твои цели, уровень подготовки и образ жизни.",
    "Онлайн": "Онлайн",
    "ведення 1 на 1": "ведение 1 на 1",
    "Повний супровід до твоєї зміни": "Полное сопровождение к твоим изменениям",
    "/ місяць": "/ месяц",
    "План тренувань": "План тренировок",
    "Контроль прогресу": "Контроль прогресса",
    "Постійний зв'язок": "Постоянная связь",
    "Що входить": "Что входит",
    "Стартова консультація — 1 година, персональна програма тренувань 2–4 рази на тиждень, відео з поясненням техніки вправ, повний супровід харчування, розрахунок БЖВ та рекомендації щодо відновлення.": "Стартовая консультация — 1 час, персональная программа тренировок 2–4 раза в неделю, видео с объяснением техники упражнений, полное сопровождение питания, расчёт БЖУ и рекомендации по восстановлению.",
    "Ти надсилаєш звіти й відео виконання вправ, я перевіряю техніку, аналізую прогрес і коригую програму.": "Ты присылаешь отчёты и видео выполнения упражнений, я проверяю технику, анализирую прогресс и корректирую программу.",
    "Персональні та парні": "Персональные и парные",
    "тренування": "тренировки",
    "Тренування під твою ціль": "Тренировки под твою цель",
    "Індивідуальні та парні тренування в залі з повним супроводом під твою ціль.": "Индивидуальные и парные тренировки в зале с полным сопровождением под твою цель.",
    "Персональна програма": "Персональная программа",
    "Харчування та БЖВ": "Питание и БЖУ",
    "Контроль і підтримка": "Контроль и поддержка",
    "Враховую твою ціль, рівень підготовки та спосіб життя. Разом працюємо над тренуваннями, харчуванням і прогресом, а я відповідаю на питання та пояснюю, що і навіщо ми робимо.": "Учитываю твою цель, уровень подготовки и образ жизни. Вместе работаем над тренировками, питанием и прогрессом, а я отвечаю на вопросы и объясняю, что и зачем мы делаем.",
    "Функціональні": "Функциональные",
    "групи": "группы",
    "Тренуйся в команді, розвивай своє тіло": "Тренируйся в команде, развивай своё тело",
    "Функціональні тренування в центрі Праги для чоловіків і жінок. Кругова методика, силові вправи та робота на витривалість — тренуєш усе тіло за одне тренування.": "Функциональные тренировки в центре Праги для мужчин и женщин. Круговая методика, силовые упражнения и работа на выносливость — тренируешь всё тело за одну тренировку.",
    "Сила та витривалість": "Сила и выносливость",
    "Схуднення та набір м'язів": "Похудение и набор мышц",
    "Сильне ком'юніті": "Сильное комьюнити",
    "Тренуємось разом, підтримуємо одне одного та стаємо кращими.": "Тренируемся вместе, поддерживаем друг друга и становимся лучше.",
    "Приєднуйся до нашої команди": "Присоединяйся к нашей команде",
    "РЕЗУЛЬТАТИ КЛІЄНТІВ": "РЕЗУЛЬТАТЫ КЛИЕНТОВ",
    "Результат говорить": "Результат говорит",
    "сам за себе": "сам за себя",
    "Реальні люди. Реальна робота. Реальні зміни.": "Реальные люди. Реальная работа. Реальные изменения.",
    "Хочу такий результат": "Хочу такой результат",
    "Часті": "Частые",
    "запитання": "вопросы",
    "Відповіді на найпоширеніші питання про тренування та співпрацю.": "Ответы на самые распространённые вопросы о тренировках и сотрудничестве.",
    "Чи підійде онлайн-ведення, якщо я новачок?": "Подойдёт ли онлайн-ведение, если я новичок?",
    "Так. Тобі не потрібно мати великий досвід у тренажерному залі. Програма підбирається під твій рівень, а техніку вправ я детально пояснюю у відео. Ти також можеш надсилати мені відео виконання вправ, щоб я міг виправити помилки та допомогти тобі прогресувати безпечно.": "Да. Тебе не нужно иметь большой опыт в тренажёрном зале. Программа подбирается под твой уровень, а технику упражнений я подробно объясняю в видео. Ты также можешь присылать мне видео выполнения упражнений, чтобы я мог исправить ошибки и помочь тебе прогрессировать безопасно.",
    "Чи потрібен тренажерний зал для тренувань?": "Нужен ли тренажёрный зал для тренировок?",
    "Не обов'язково. Програма складається відповідно до обладнання, яке тобі доступне. Це може бути повноцінний тренажерний зал, домашні тренування або мінімальний набір обладнання.": "Не обязательно. Программа составляется в соответствии с оборудованием, которое тебе доступно. Это может быть полноценный тренажёрный зал, домашние тренировки или минимальный набор оборудования.",
    "Чи зможемо ми працювати, якщо я не маю фіксованого графіка?": "Сможем ли мы работать, если у меня нет фиксированного графика?",
    "Так. Онлайн-формат дозволяє адаптувати тренування під твій реальний графік. Головне — виконувати запланований обсяг роботи та повідомляти мені, якщо обставини змінюються. За необхідності ми коригуємо план.": "Да. Онлайн-формат позволяет адаптировать тренировки под твой реальный график. Главное — выполнять запланированный объём работы и сообщать мне, если обстоятельства меняются. При необходимости мы корректируем план.",
    "Що буде, якщо я пропущу тренування або не зможу виконати план?": "Что будет, если я пропущу тренировку или не смогу выполнить план?",
    "Нічого критичного. Моє завдання — не сварити тебе за пропущене тренування, а допомогти адаптувати процес. Ти повідомляєш мені, що сталося, і ми вирішуємо, як краще продовжити, щоб не втрачати прогрес.": "Ничего критичного. Моя задача — не ругать тебя за пропущенную тренировку, а помочь адаптировать процесс. Ты сообщаешь мне, что произошло, и мы решаем, как лучше продолжить, чтобы не терять прогресс.",
    "Коли я побачу перші результати?": "Когда я увижу первые результаты?",
    "Це залежить від твоєї цілі, стартової точки, харчування, тренувань та дотримання рекомендацій. Я не обіцяю однаковий результат за конкретну кількість тижнів для всіх. Моє завдання — побудувати систему, контролювати твій прогрес і коригувати її в процесі.": "Это зависит от твоей цели, стартовой точки, питания, тренировок и соблюдения рекомендаций. Я не обещаю одинаковый результат за конкретное количество недель для всех. Моя задача — построить систему, контролировать твой прогресс и корректировать её в процессе.",
    "Чи підійде онлайн-ведення, якщо я вже тренуюся, але не бачу прогресу?": "Подойдёт ли онлайн-ведение, если я уже тренируюсь, но не вижу прогресса?",
    "Так. Часто проблема не в тому, що людина мало тренується, а в тому, що немає чіткої системи та контролю прогресу. Я аналізую твої тренування, техніку, навантаження, харчування та відновлення і допомагаю визначити, що потрібно змінити.": "Да. Часто проблема не в том, что человек мало тренируется, а в том, что нет чёткой системы и контроля прогресса. Я анализирую твои тренировки, технику, нагрузку, питание и восстановление и помогаю определить, что нужно изменить.",
    "ГОТОВИЙ ДО ЗМІН?": "ГОТОВ К ПЕРЕМЕНАМ?",
    "Твій результат": "Твой результат",
    "починається сьогодні": "начинается сегодня",
    "Не відкладай зміни на потім. Залиш заявку — і почнемо працювати над твоїм результатом.": "Не откладывай перемены на потом. Оставь заявку — и мы начнём работать над твоим результатом.",
    "Записатися на тренування": "Записаться на тренировку",
    "АБО НАПИШИ МЕНІ": "ИЛИ НАПИШИ МНЕ",
    "Обери зручний спосіб зв'язку": "Выбери удобный способ связи",
    "Слідкуй за контентом": "Следи за контентом",
    "Написати напряму": "Написать напрямую",
    "Дивись тренування": "Смотри тренировки",
    "Нагору": "Наверх",
    "Відкрити меню": "Открыть меню",
    "Станіслав до трансформації": "Станислав до трансформации",
    "Станіслав після трансформації": "Станислав после трансформации",
    "Порівняти фото до і після": "Сравнить фото до и после",
    "Кейси клієнтів": "Кейсы клиентов",
    "Результат клієнта після": "Результат клиента после",
    "Результат клієнта до": "Результат клиента до",
    "Sukhomlyn Coach — персональні тренування в Празі, онлайн ведення та функціональні групові тренування.": "Sukhomlyn Coach — персональные тренировки в Праге, онлайн-ведение и функциональные групповые тренировки.",
    "Я сам пройшов шлях від худого хлопця до форми, яку хотів. Тому знаю не тільки теорію, а й те, з чим ти можеш зіткнутися по дорозі.": "Я сам прошёл путь от худого парня до формы, которую хотел. Поэтому знаю не только теорию, но и то, с чем ты можешь столкнуться по дороге.",
    "Без голодувань, виснажливих тренувань і швидких рішень. Працюємо так, щоб результат можна було зберегти надовго.": "Без голодовок, изнурительных тренировок и быстрых решений. Работаем так, чтобы результат можно было сохранить надолго.",
    "Я завжди на зв'язку. Якщо щось не виходить, є питання або потрібно щось змінити — розбираємося разом.": "Я всегда на связи. Если что-то не получается, есть вопросы или нужно что-то изменить — разбираемся вместе.",
    "Враховуємо твою ціль, графік, рівень підготовки та спосіб життя. Підбираємо те, що реально працює саме для тебе.": "Учитываем твою цель, график, уровень подготовки и образ жизни. Подбираем то, что реально работает именно для тебя.",
    "Я пояснюю, що ми робимо і навіщо. Щоб з часом ти сам розумів, як тренуватися, харчуватися та підтримувати форму.": "Я объясняю, что мы делаем и зачем. Чтобы со временем ты сам понимал, как тренироваться, питаться и поддерживать форму."
};

let siteLanguage = "uk";

function i18nKey(text) {
    return String(text).replace(/\s+/g, " ").trim();
}

/* Переклад окремого рядка (для текстів, які створює JS) */
function tr(text) {
    if (siteLanguage !== "ru") return text;

    const translated = I18N_RU[i18nKey(text)];

    return translated !== undefined ? translated : text;
}

const i18nOriginals = new WeakMap();
let i18nDescriptionOriginal = null;

function applyLanguage(language) {

    siteLanguage = language === "ru" ? "ru" : "uk";

    /* --- всі текстові вузли --- */

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {
                const parent = node.parentElement;

                if (
                    !parent ||
                    parent.closest("script, style, noscript, [data-i18n-skip]")
                ) {
                    return NodeFilter.FILTER_REJECT;
                }

                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );

    const nodes = [];
    let current;

    while ((current = walker.nextNode())) nodes.push(current);

    nodes.forEach((node) => {

        if (!i18nOriginals.has(node)) {
            i18nOriginals.set(node, node.nodeValue);
        }

        const original = i18nOriginals.get(node);

        if (siteLanguage === "ru") {
            const translated = I18N_RU[i18nKey(original)];

            if (translated !== undefined) {
                const lead = original.match(/^\s*/)[0];
                const trail = original.match(/\s*$/)[0];

                node.nodeValue = lead + translated + trail;
            }
        } else {
            node.nodeValue = original;
        }
    });

    /* --- alt і aria-label --- */

    document
        .querySelectorAll("[alt]:not([data-i18n-skip]), [aria-label]:not([data-i18n-skip])")
        .forEach((element) => {

            ["alt", "aria-label"].forEach((attribute) => {

                if (!element.hasAttribute(attribute)) return;

                const saved = "data-uk-" + attribute;

                if (!element.hasAttribute(saved)) {
                    element.setAttribute(saved, element.getAttribute(attribute));
                }

                const original = element.getAttribute(saved);
                const translated = I18N_RU[i18nKey(original)];

                element.setAttribute(
                    attribute,
                    siteLanguage === "ru" && translated !== undefined
                        ? translated
                        : original
                );
            });
        });

    /* --- опис сторінки для пошуку --- */

    const description = document.querySelector('meta[name="description"]');

    if (description) {
        if (i18nDescriptionOriginal === null) {
            i18nDescriptionOriginal = description.getAttribute("content");
        }

        description.setAttribute("content", tr(i18nDescriptionOriginal));
    }

    /* --- кнопки мов і атрибут lang --- */

    document.querySelectorAll("[data-language]").forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.language === siteLanguage
        );
    });

    document.documentElement.lang = siteLanguage;

    try {
        localStorage.setItem("siteLanguage", siteLanguage);
    } catch (e) { /* не критично */ }

    /* --- слайди «Про мене» створюються в JS --- */

    if (typeof refreshAboutSlide === "function") {
        refreshAboutSlide();
    }
}

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       BURGER MENU
    ======================================== */

    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");

    function closeBurgerMenu() {
        if (!burger || !nav) return;

        burger.classList.remove("active");
        nav.classList.remove("active");
        burger.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    }

    if (burger && nav) {
        burger.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("active");

            burger.classList.toggle("active", isOpen);
            burger.setAttribute("aria-expanded", String(isOpen));
            document.body.classList.toggle("menu-open", isOpen);
        });

        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeBurgerMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeBurgerMenu();
            }
        });
    }


    /* ========================================
       LANGUAGE SWITCHER
    ======================================== */

    document.querySelectorAll("[data-language]").forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.language);
        });
    });

    let savedLanguage = "uk";

    try {
        savedLanguage =
            localStorage.getItem("siteLanguage") === "ru" ? "ru" : "uk";
    } catch (e) { /* не критично */ }

    applyLanguage(savedLanguage);


    


    /* ========================================
   FAQ
======================================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const currentItem = question.closest(".faq-item");

        if (!currentItem) return;

        const isOpen = currentItem.classList.contains("active");

        /* Закриваємо інші відкриті питання */
        document.querySelectorAll(".faq-item").forEach((item) => {
            item.classList.remove("active");
        });

        /* Якщо це питання було закрите — відкриваємо */
        if (!isOpen) {
            currentItem.classList.add("active");
        }
    });
});


    /* ========================================
       SCROLL ANIMATIONS
    ======================================== */

    const hiddenElements = document.querySelectorAll(".hidden");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        hiddenElements.forEach((element) => {
            observer.observe(element);
        });
    } else {
        hiddenElements.forEach((element) => {
            element.classList.add("show");
        });
    }

});

/* ==========================================================
   ABOUT SLIDER
========================================================== */

const aboutSlides = [
    {
        title: "Чому я?",
        text: "Я сам пройшов шлях від худого хлопця до форми, яку хотів. Тому знаю не тільки теорію, а й те, з чим ти можеш зіткнутися по дорозі.",
        image: "images/about-1.webp"
    },

    {
        title: "Без крайнощів",
        text: "Без голодувань, виснажливих тренувань і швидких рішень. Працюємо так, щоб результат можна було зберегти надовго.",
        image: "images/about-2.webp"
    },

    {
        title: "Постійна підтримка",
        text: "Я завжди на зв'язку. Якщо щось не виходить, є питання або потрібно щось змінити — розбираємося разом.",
        image: "images/about-3.webp"
    },

    {
        title: "Тренування, які підходять тобі",
        text: "Враховуємо твою ціль, графік, рівень підготовки та спосіб життя. Підбираємо те, що реально працює саме для тебе.",
        image: "images/about-4.webp"
    },

    {
        title: "Розумієш, що робиш",
        text: "Я пояснюю, що ми робимо і навіщо. Щоб з часом ти сам розумів, як тренуватися, харчуватися та підтримувати форму.",
        image: "images/aboutf.webp"
    }
];


/* ==========================================================
   ELEMENTS
========================================================== */

const aboutTabs = document.querySelectorAll(".about-tab");

const aboutImage = document.querySelector(".about-coach");

const aboutTitle = document.querySelector(".about-info h3");

const aboutText = document.querySelector(".about-info > p");

const aboutCurrent = document.querySelector("#aboutCurrent");


/* ==========================================================
   CHANGE SLIDE
========================================================== */

let aboutIndex = 0;

function changeAboutSlide(index) {

    aboutIndex = index;

    const slide = aboutSlides[index];

    if (!slide) return;


    /* --------------------------
       TABS
    -------------------------- */

    aboutTabs.forEach(tab => {
        tab.classList.remove("active");
    });

    if (aboutTabs[index]) {
        aboutTabs[index].classList.add("active");
    }


    /* --------------------------
       FADE OUT
    -------------------------- */

    aboutImage?.classList.add("about-fade-out");
    aboutTitle?.classList.add("about-fade-out");
    aboutText?.classList.add("about-fade-out");


    /* --------------------------
       CHANGE CONTENT
    -------------------------- */

    setTimeout(() => {

        if (aboutImage) {
            aboutImage.src = slide.image;
            aboutImage.alt = tr(slide.title);
        }

        if (aboutTitle) {
            aboutTitle.textContent = tr(slide.title);
        }

        if (aboutText) {
            aboutText.textContent = tr(slide.text);
        }

        if (aboutCurrent) {
            aboutCurrent.textContent =
                String(index + 1).padStart(2, "0");
        }


        /* --------------------------
           FADE IN
        -------------------------- */

        aboutImage?.classList.remove("about-fade-out");
        aboutTitle?.classList.remove("about-fade-out");
        aboutText?.classList.remove("about-fade-out");

    }, 250);
}



/* Після перемикання мови — перемальовуємо поточний слайд «Про мене» */
function refreshAboutSlide() {

    const slide = aboutSlides[aboutIndex];

    if (!slide) return;

    if (aboutImage) aboutImage.alt = tr(slide.title);
    if (aboutTitle) aboutTitle.textContent = tr(slide.title);
    if (aboutText) aboutText.textContent = tr(slide.text);
}


/* ==========================================================
   TAB CLICK
========================================================== */

aboutTabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        changeAboutSlide(index);

    });

});


/* ==========================================================
   FIRST SLIDE
========================================================== */

changeAboutSlide(0);

/* ==========================================================
   MY STORY — BEFORE / AFTER SLIDER
========================================================== */

const storyImageBox = document.querySelector(".story-image-box");
const storySlider = document.querySelector(".story-slider");
const storyAfterLayer = document.querySelector(".story-after-layer");
const storySliderLine = document.querySelector(".story-slider-line");

if (
    storyImageBox &&
    storySlider &&
    storyAfterLayer &&
    storySliderLine
) {

    function updateStorySlider() {

        const position = Number(storySlider.value);

        // Показуємо потрібну частину фото "ПІСЛЯ"
        storyAfterLayer.style.width = `${position}%`;

        // Рухаємо вертикальну лінію
        storySliderLine.style.left = `${position}%`;

    }


    // Рух мишкою / пальцем через range
    storySlider.addEventListener("input", updateStorySlider);


    // Початкове положення 50/50
    updateStorySlider();

}

/* ==========================================================
   CLIENT RESULTS — кружки (безкінечна карусель) + до/після
========================================================== */

/*
   Щоб додати ще клієнтів: поклади в папку images файли
   resultN-before.jpg, resultN-after.jpg та thumbs/resultN.webp
   (квадратна мініатюра) і збільш число нижче.
*/
const RESULTS_COUNT = 10;

const clientResults = Array.from({ length: RESULTS_COUNT }, (_, i) => ({
    before: `images/result${i + 1}-before.jpg`,
    after: `images/result${i + 1}-after.jpg`,
    thumb: `images/thumbs/result${i + 1}.webp`
}));


/* ==========================================================
   ELEMENTS
========================================================== */

const resultCarousel = document.getElementById("resultsCarousel");
const resultTrack = document.getElementById("resultsTrack");
const resultImageBox = document.getElementById("resultImageBox");

const resultLeftImage = document.getElementById("resultLeftImage");     // ДО
const resultRightImage = document.getElementById("resultRightImage");   // ПІСЛЯ
const resultAfterLayer = document.getElementById("resultAfterLayer");
const resultSliderLine = document.getElementById("resultSliderLine");
const resultCompareSlider = document.getElementById("resultCompareSlider");

let currentResult = 0;
let resultSwitchId = 0;


/* ==========================================================
   BEFORE / AFTER — риска
========================================================== */

function updateResultComparison() {

    if (!resultCompareSlider || !resultAfterLayer || !resultSliderLine) {
        return;
    }

    const value = Number(resultCompareSlider.value);

    resultAfterLayer.style.width = `${value}%`;
    resultSliderLine.style.left = `${value}%`;
}

if (resultCompareSlider) {
    resultCompareSlider.addEventListener("input", updateResultComparison);
}


/* ==========================================================
   ПОКАЗАТИ КЕЙС
========================================================== */

function preloadImages(sources) {
    return Promise.all(
        sources.map(
            (src) =>
                new Promise((resolve) => {
                    const img = new Image();
                    img.onload = img.onerror = resolve;
                    img.src = src;
                })
        )
    );
}

function markActiveThumb(index) {
    if (!resultTrack) return;

    resultTrack.querySelectorAll(".results-thumb").forEach((thumb) => {
        const isActive = Number(thumb.dataset.index) === index;

        thumb.classList.toggle("active", isActive);
        thumb.setAttribute("aria-pressed", String(isActive));
    });
}

function showResult(index) {

    const result = clientResults[index];

    if (!result || !resultLeftImage || !resultRightImage) return;

    currentResult = index;
    markActiveThumb(index);

    const switchId = ++resultSwitchId;

    resultImageBox?.classList.add("is-switching");

    // Чекаємо, поки нові фото завантажаться, і тільки тоді міняємо
    preloadImages([result.before, result.after]).then(() => {

        // Якщо за цей час натиснули інший кружок — цей кейс пропускаємо
        if (switchId !== resultSwitchId) return;

        resultLeftImage.src = result.before;
        resultRightImage.src = result.after;

        if (resultCompareSlider) {
            resultCompareSlider.value = 50;
        }

        updateResultComparison();

        resultImageBox?.classList.remove("is-switching");
    });
}


/* ==========================================================
   КАРУСЕЛЬ КРУЖКІВ — безкінечна, тягнеться пальцем/мишкою
========================================================== */

(function () {

    if (!resultCarousel || !resultTrack) return;

    const COPIES = 4;                 // скільки разів повторюємо набір кружків
    const AUTO_SPEED = 26;            // швидкість самої прокрутки, px/сек
    const DRAG_THRESHOLD = 6;         // менше цього — це клік, а не перетягування

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    let setWidth = 0;                 // ширина одного набору кружків
    let offset = 0;                   // поточне зміщення
    let momentum = 0;                 // «інерція» після відпускання, px/мс

    let isDragging = false;
    let isHovering = false;
    let isFocused = false;
    let isVisible = true;
    let pointerId = null;
    let startX = 0;
    let lastX = 0;
    let lastTime = 0;
    let movedFar = false;
    let suppressClick = false;


    /* ---------- будуємо кружки ---------- */

    for (let copy = 0; copy < COPIES; copy++) {

        clientResults.forEach((result, index) => {

            const button = document.createElement("button");

            button.type = "button";
            button.className = "results-thumb";
            button.dataset.index = String(index);
            button.setAttribute("aria-label", `Кейс ${index + 1}`);

            // Копії потрібні лише для візуальної безкінечності
            if (copy !== 1) {
                button.setAttribute("aria-hidden", "true");
                button.tabIndex = -1;
            }

            const img = document.createElement("img");

            img.src = result.thumb;
            img.alt = "";
            img.draggable = false;
            img.decoding = "async";

            button.appendChild(img);
            resultTrack.appendChild(button);
        });
    }


    /* ---------- розміри й зміщення ---------- */

    function measure() {
        const items = resultTrack.children;
        const next = items[clientResults.length];

        if (!items.length || !next) return;

        setWidth = next.offsetLeft - items[0].offsetLeft;
    }

    function render() {

        if (!setWidth) return;

        // Крутимо по колу: вийшли за межі набору — повертаємось на початок
        offset = ((offset % setWidth) + setWidth) % setWidth;

        resultTrack.style.transform =
            `translate3d(${-(setWidth + offset)}px, 0, 0)`;
    }

    measure();
    render();

    window.addEventListener("resize", () => {
        measure();
        render();
    });

    window.addEventListener("load", () => {
        measure();
        render();
    });


    /* ---------- автопрокрутка ---------- */

    let lastFrame = performance.now();

    function frame(now) {

        const dt = Math.min(now - lastFrame, 64);
        lastFrame = now;

        if (!isDragging) {

            if (Math.abs(momentum) > 0.005) {
                offset += momentum * dt;
                momentum *= Math.pow(0.94, dt / 16);
                render();
            }
            else {
                momentum = 0;

                const paused = isHovering || isFocused || !isVisible;

                if (!reducedMotion && !paused) {
                    offset += (AUTO_SPEED * dt) / 1000;
                    render();
                }
            }
        }

        requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);

    if ("IntersectionObserver" in window) {
        new IntersectionObserver((entries) => {
            isVisible = entries[0].isIntersecting;
        }).observe(resultCarousel);
    }


    /* ---------- перетягування ---------- */

    resultCarousel.addEventListener("pointerdown", (event) => {

        if (event.pointerType === "mouse" && event.button !== 0) return;

        pointerId = event.pointerId;
        startX = lastX = event.clientX;
        lastTime = performance.now();
        movedFar = false;
        momentum = 0;
    });

    resultCarousel.addEventListener("pointermove", (event) => {

        if (event.pointerId !== pointerId) return;

        const distance = event.clientX - startX;

        if (!movedFar && Math.abs(distance) > DRAG_THRESHOLD) {
            movedFar = true;
            isDragging = true;
            resultCarousel.classList.add("is-dragging");

            // Захоплюємо вказівник лише коли це справді перетягування,
            // щоб звичайний клік по кружку працював
            try {
                resultCarousel.setPointerCapture(pointerId);
            } catch (e) { /* не критично */ }
        }

        if (!isDragging) return;

        const now = performance.now();
        const dx = event.clientX - lastX;
        const dt = Math.max(now - lastTime, 1);

        offset -= dx;                       // тягнемо контент за пальцем
        momentum = (-dx / dt) * 0.9;        // запам'ятовуємо швидкість руху

        lastX = event.clientX;
        lastTime = now;

        render();
    });

    function endDrag(event) {

        if (event.pointerId !== pointerId) return;

        pointerId = null;

        if (isDragging) {
            suppressClick = true;
            setTimeout(() => { suppressClick = false; }, 0);
        }

        // Якщо палець зупинився перед відпусканням — інерції немає
        if (performance.now() - lastTime > 80) {
            momentum = 0;
        }

        isDragging = false;
        resultCarousel.classList.remove("is-dragging");
    }

    resultCarousel.addEventListener("pointerup", endDrag);
    resultCarousel.addEventListener("pointercancel", endDrag);


    /* ---------- пауза на наведення / фокус ---------- */

    resultCarousel.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "mouse") isHovering = true;
    });

    resultCarousel.addEventListener("pointerleave", (event) => {
        if (event.pointerType === "mouse") isHovering = false;
    });

    resultCarousel.addEventListener("focusin", () => { isFocused = true; });
    resultCarousel.addEventListener("focusout", () => { isFocused = false; });


    /* ---------- клік по кружку ---------- */

    resultCarousel.addEventListener("click", (event) => {

        if (suppressClick) return;

        const thumb = event.target.closest(".results-thumb");

        if (!thumb) return;

        showResult(Number(thumb.dataset.index));
    });

})();


/* ==========================================================
   START
========================================================== */

markActiveThumb(0);
updateResultComparison();

/* ==========================================================
   FINAL SECTION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       MAIN CTA — SCROLL TO CONTACT
    ====================================================== */

    const finalButton = document.querySelector(".final-main-button");

    if (finalButton) {
        finalButton.addEventListener("click", (e) => {

            const href = finalButton.getAttribute("href");

            if (href && href.startsWith("#")) {

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    }


    /* ======================================================
       BACK TO TOP
    ====================================================== */

    const toTopButton = document.querySelector(".final-to-top");

if (toTopButton) {

    toTopButton.addEventListener("click", (e) => {

        e.preventDefault();

        const startPosition = window.scrollY;
        const duration = 1400;
        const startTime = performance.now();

        function scrollAnimation(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const ease =
                progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(
                0,
                startPosition * (1 - ease)
            );

            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        requestAnimationFrame(scrollAnimation);

    });

}


    /* ======================================================
       REVEAL ANIMATION
    ====================================================== */

    const finalRevealElements = document.querySelectorAll(
        ".final-cta, .final-socials-header, .final-social-card, .final-footer"
    );


    if ("IntersectionObserver" in window) {

        const finalObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("final-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        finalRevealElements.forEach((element) => {
            element.classList.add("final-reveal");
            finalObserver.observe(element);
        });

    } else {

        finalRevealElements.forEach((element) => {
            element.classList.add("final-visible");
        });

    }

});


/* ==========================================================
   MY STORY — якщо фото ще не додані, ховаємо порожній слайдер
========================================================== */

(function () {
    const storyBox = document.querySelector(".story-transformation");
    const storyImages = document.querySelectorAll(
        ".story-before-image, .story-after-image"
    );

    if (!storyBox || !storyImages.length) return;

    function hideIfBroken(img) {
        if (img.complete && img.naturalWidth === 0) {
            storyBox.classList.add("is-empty");
        }
    }

    storyImages.forEach((img) => {
        hideIfBroken(img);
        img.addEventListener("error", () => storyBox.classList.add("is-empty"));
    });
})();


/* ==========================================================
   MY STORY — ширина фото всередині слайдера до/після
========================================================== */

(function () {
    const box = document.querySelector(".story-image-box");

    if (!box) return;

    function setStoryWidth() {
        box.style.setProperty("--story-box-width", box.clientWidth + "px");
    }

    setStoryWidth();
    window.addEventListener("resize", setStoryWidth);
    window.addEventListener("load", setStoryWidth);

    if ("ResizeObserver" in window) {
        new ResizeObserver(setStoryWidth).observe(box);
    }
})();

/* ======================================================
   ПЛАВНА ПРОКРУТКА ДО РОЗДІЛІВ (v6)
====================================================== */
(function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var raf = null;

    function ease(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function smoothScrollTo(targetY) {
        var startY = window.pageYOffset;
        var maxY = document.documentElement.scrollHeight - window.innerHeight;
        targetY = Math.max(0, Math.min(targetY, maxY));
        var distance = targetY - startY;
        if (Math.abs(distance) < 2) return;
        if (reduce) { window.scrollTo(0, targetY); return; }

        var duration = Math.min(1900, Math.max(900, Math.abs(distance) * 0.45));
        var startTime = null;
        if (raf) cancelAnimationFrame(raf);

        function stop() {
            if (raf) cancelAnimationFrame(raf);
            raf = null;
            window.removeEventListener("wheel", stop);
            window.removeEventListener("touchstart", stop);
        }
        window.addEventListener("wheel", stop, { passive: true, once: true });
        window.addEventListener("touchstart", stop, { passive: true, once: true });

        function step(now) {
            if (startTime === null) startTime = now;
            var p = Math.min((now - startTime) / duration, 1);
            window.scrollTo(0, startY + distance * ease(p));
            if (p < 1) { raf = requestAnimationFrame(step); } else { stop(); }
        }
        raf = requestAnimationFrame(step);
    }

    document.addEventListener("click", function (e) {
        var link = e.target.closest && e.target.closest('a[href^="#"]');
        if (!link || link.classList.contains("final-to-top")) return;
        var href = link.getAttribute("href");
        if (!href || href === "#") return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();

        var header = document.querySelector(".header");
        var offset = href === "#top" ? 0 : (header ? header.offsetHeight : 0);
        var y = target.getBoundingClientRect().top + window.pageYOffset - offset;
        smoothScrollTo(y);
    });
})();

