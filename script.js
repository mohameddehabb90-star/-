
const bookGroups = {
  "تكنولوجيا التعليم": [
    "مدخل إلى تكنولوجيا التعليم",
    "تصميم بيئات التعلم الإلكترونية",
    "التعلم الإلكتروني",
    "الوسائل التعليمية الرقمية",
    "التصميم التعليمي",
    "الفصول الافتراضية",
    "التقويم الإلكتروني"
  ],
  "المكتبات الرقمية": [
    "المكتبات الرقمية",
    "بنوك المعرفة",
    "مصادر المعلومات الإلكترونية",
    "الفهرسة الإلكترونية",
    "محركات البحث العلمي",
    "المستودعات الرقمية",
    "البحث في قواعد البيانات"
  ],
  "الذكاء الاصطناعي": [
    "مقدمة في الذكاء الاصطناعي",
    "النظم الخبيرة",
    "التعلم الآلي",
    "الذكاء الاصطناعي في التعليم",
    "معالجة اللغة الطبيعية",
    "الروبوتات التعليمية"
  ],
  "البرمجة والحاسب": [
    "أساسيات الحاسب الآلي",
    "مبادئ البرمجة",
    "تصميم صفحات الويب",
    "لغة HTML",
    "لغة CSS",
    "قواعد البيانات",
    "الأمن السيبراني",
    "تطبيقات الحاسب في التعليم"
  ],
  "الوسائط المتعددة": [
    "الوسائط المتعددة",
    "تصميم الفيديو التعليمي",
    "الصوت الرقمي",
    "الصورة الرقمية",
    "الرسوم المتحركة التعليمية",
    "إنتاج العروض التقديمية"
  ],
  "التعليم الإلكتروني": [
    "منصات التعلم الإلكتروني",
    "إدارة التعلم الإلكتروني",
    "التعلم المدمج",
    "التعلم عن بعد",
    "التعلم التكيفي",
    "التفاعل في البيئات الرقمية"
  ],
  "تكنولوجيا حديثة": [
    "الواقع الافتراضي",
    "الواقع المعزز",
    "الواقع المختلط",
    "الهولوجرام",
    "إنترنت الأشياء",
    "الطباعة ثلاثية الأبعاد",
    "التعلم باستخدام الأجهزة الذكية"
  ],
  "مهارات البحث": [
    "مهارات البحث العلمي",
    "مناهج البحث التربوي",
    "التوثيق العلمي",
    "تحليل البيانات",
    "أدوات جمع البيانات",
    "الإحصاء التربوي"
  ]
};

const chapterTopics = {
  "تكنولوجيا التعليم": [
    "المفهوم والنشأة",
    "الأهمية والأهداف",
    "الأسس النظرية",
    "المكونات والعناصر",
    "الخصائص والأنواع"
  ],
  "المكتبات الرقمية": [
    "المفهوم والنشأة",
    "الأهمية والأهداف",
    "المكونات ومصادر المعلومات",
    "التنظيم والاسترجاع",
    "الخدمات والتحديات"
  ],
  "الذكاء الاصطناعي": [
    "المفهوم والتطور التاريخي",
    "الأسس والمبادئ",
    "الخوارزميات وتمثيل المعرفة",
    "التطبيقات العملية",
    "الأخلاقيات والتحديات"
  ],
  "البرمجة والحاسب": [
    "المفاهيم الأساسية",
    "مكونات الحاسب والبرمجيات",
    "الخوارزميات ولغات البرمجة",
    "التطبيقات العملية",
    "الأمن والتطور المستقبلي"
  ],
  "الوسائط المتعددة": [
    "المفهوم والأهمية",
    "عناصر الوسائط المتعددة",
    "التصميم والإنتاج",
    "التطبيقات التعليمية",
    "الجودة والتحديات"
  ],
  "التعليم الإلكتروني": [
    "المفهوم والنشأة",
    "الأنماط والبيئات",
    "التصميم وإدارة المحتوى",
    "التفاعل والتقويم",
    "الجودة والتحديات"
  ],
  "تكنولوجيا حديثة": [
    "المفهوم والأساس العلمي",
    "المكونات وآلية العمل",
    "الأنواع والخصائص",
    "التطبيقات التعليمية",
    "المميزات والتحديات"
  ],
  "مهارات البحث": [
    "أساسيات البحث العلمي",
    "المشكلة والأهداف",
    "المناهج والأدوات",
    "تحليل البيانات والنتائج",
    "التوثيق وكتابة التقرير"
  ]
};

const pageAngles = [
  {
    title: "المفاهيم والتعريفات",
    text: "تبدأ الدراسة العلمية بتحديد المفاهيم والمصطلحات الأساسية، ثم توضيح المعنى المقصود بكل مصطلح والتمييز بينه وبين المفاهيم القريبة منه. ويساعد التعريف الدقيق على بناء فهم منظم للموضوع."
  },
  {
    title: "الشرح والتحليل",
    text: "يتطلب تحليل الموضوع دراسة عناصره والعلاقات التي تربط بينها، وتفسير أسباب ظهور الظاهرة والنتائج المترتبة عليها. ويفضل دعم التفسير بأمثلة واضحة ومعلومات يمكن التحقق منها."
  },
  {
    title: "التطبيقات والتقويم",
    text: "تختبر فاعلية المفاهيم عند تطبيقها في مواقف واقعية. ويشمل ذلك تحديد الهدف، واختيار الإجراء المناسب، وملاحظة النتائج، ثم تقويم الأداء وتحديد نقاط القوة والجوانب التي تحتاج إلى تحسين."
  }
];

/* إنشاء الكتب */

const books = [];

Object.entries(bookGroups).forEach(([category, titles]) => {
  titles.forEach(title => {
    books.push({
      title,
      author: "قسم تكنولوجيا التعليم",
      category,
      description: `مرجع تمهيدي للتعرف على ${title} ومفاهيمه ومجالات استخدامه.`,
      isFavorite: false,
      isRead: false,
      cover: "",
      pages: []
    });
  });
});

/* إنشاء صفحات الكتب */

function makePages(book) {
  const topics = chapterTopics[book.category];
  const pages = [];

  topics.forEach((topic, chapterIndex) => {
    pageAngles.forEach(angle => {
      pages.push({
        chapter: chapterIndex,
        title: `الفصل ${chapterIndex + 1}: ${topic}`,
        subTitle: angle.title,
        text: `
          <strong>${angle.title}</strong><br>
          ${book.title} من الموضوعات المرتبطة بمجال ${book.category}.
          ويتناول هذا الجزء ${topic} من خلال عرض المفاهيم الأساسية
          وشرحها وتحليل علاقتها ببقية عناصر المجال.

          <br><br>
          <strong>أولًا: الإطار العلمي</strong><br>
          ${angle.text}

          <br><br>
          <strong>ثانيًا: الارتباط بموضوع الكتاب</strong><br>
          يرتبط ${topic} بموضوع ${book.title}؛ إذ يساعد على تفسير
          جوانب أساسية منه، كما يوضح كيفية الاستفادة من المعرفة النظرية
          في الممارسة. ويجب عند دراسة هذا الجانب مراعاة طبيعة المجال
          والهدف من استخدامه والإمكانات المتاحة.

          <br><br>
          <strong>ثالثًا: مثال توضيحي</strong><br>
          يمكن توضيح الفكرة من خلال موقف تعليمي أو بحثي يتم فيه
          تحديد المشكلة أو الحاجة، ثم اختيار الأسلوب أو الأداة المناسبة،
          وتنفيذ الخطوات بصورة منظمة، ومراجعة النتائج في ضوء الهدف المحدد.

          <br><br>
          <strong>رابعًا: نقاط أساسية</strong><br>
          • فهم المصطلحات المرتبطة بالموضوع.<br>
          • الربط بين الأساس النظري والتطبيق العملي.<br>
          • مراعاة الدقة والجودة عند التنفيذ.<br>
          • تقويم النتائج والاستفادة منها في التطوير.

          <br><br>
          <strong>خلاصة الصفحة</strong><br>
          يوضح هذا الجزء جانبًا من ${topic}، ويؤكد أهمية التعامل
          مع المعلومات بطريقة منظمة ونقدية، مع الرجوع إلى المراجع
          المتخصصة عند إعداد دراسة علمية تفصيلية.
        `
      });
    });
  });

  return pages;
}

books.forEach(book => {
  book.pages = makePages(book);
});

/* المتغيرات العامة */

let currentBook = null;
let currentPage = 0;
let selectedCategory = "الكل";
let toastTimer;

let activeSuggestionIndex = -1;
let currentSuggestions = [];

const STORAGE_KEYS = {
  favorites: "digitalLibraryFavorites",
  read: "digitalLibraryRead",
  user: "digitalLibraryUser"
};

/* أدوات التخزين */

function loadStoredIds(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function saveIds(key, ids) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
  } catch (error) {
    console.warn("تعذر حفظ البيانات محليًا", error);
  }
}

function syncStoredState() {
  const favorites = new Set(loadStoredIds(STORAGE_KEYS.favorites));
  const read = new Set(loadStoredIds(STORAGE_KEYS.read));

  books.forEach((book, index) => {
    book.isFavorite = favorites.has(index);
    book.isRead = read.has(index);
  });
}

/* رسائل التنبيه */

function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

/* النوافذ المنبثقة */

function openModal(id) {
  const modal = document.getElementById(id);

  if (!modal) return;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);

  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  if (!document.querySelector(".modal-backdrop.open")) {
    document.body.style.overflow = "";
  }
}

/* الأقسام */

function displayCategories() {
  const container = document.getElementById("categories");
  if (!container) return;

  const categories = ["الكل", ...Object.keys(bookGroups)];

  container.innerHTML = categories.map(category => `
    <button
      class="category-card ${selectedCategory === category ? "active" : ""}"
      data-category="${category}"
      type="button"
    >
      ${category}
    </button>
  `).join("");

  container.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      selectCategory(button.dataset.category);
    });
  });
}

function selectCategory(category) {
  selectedCategory = category;

  displayCategories();
  displayBooks();

  document.getElementById("booksSection")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* البحث والاقتراحات */

function normalizeSearch(value) {
  return String(value || "")
    .toLocaleLowerCase("ar")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[^\u0600-\u06FFa-z0-9\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function editDistance(first, second) {
  const a = first;
  const b = second;

  const matrix = Array.from(
    { length: a.length + 1 },
    () => Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

function similarityScore(text, query) {
  const normalizedText = normalizeSearch(text);
  const normalizedQuery = normalizeSearch(query);

  if (!normalizedQuery) return 0;
  if (normalizedText === normalizedQuery) return 1;
  if (normalizedText.includes(normalizedQuery)) return 0.95;

  const queryWords = normalizedQuery.split(" ");
  const textWords = normalizedText.split(" ");

  let totalScore = 0;

  queryWords.forEach(queryWord => {
    if (!queryWord) return;

    let bestScore = 0;

    textWords.forEach(textWord => {
      if (textWord.includes(queryWord) || queryWord.includes(textWord)) {
        bestScore = Math.max(bestScore, 0.9);
        return;
      }

      const distance = editDistance(queryWord, textWord);
      const longest = Math.max(queryWord.length, textWord.length);

      if (longest > 0) {
        bestScore = Math.max(bestScore, 1 - distance / longest);
      }
    });

    totalScore += bestScore;
  });

  return totalScore / queryWords.length;
}

function getBookSearchScore(book, query) {
  return Math.max(
    similarityScore(book.title, query),
    similarityScore(book.category, query) * 0.85,
    similarityScore(book.description, query) * 0.7
  );
}

function getSearchSuggestions(query) {
  const normalizedQuery = normalizeSearch(query);

  if (!normalizedQuery || normalizedQuery.length < 2) return [];

  return books
    .map((book, index) => ({
      book,
      index,
      score: getBookSearchScore(book, normalizedQuery)
    }))
    .filter(item => item.score >= 0.35)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

function hideSuggestions() {
  const box = document.getElementById("searchSuggestions");
  const input = document.getElementById("searchInput");

  if (!box || !input) return;

  box.hidden = true;
  input.setAttribute("aria-expanded", "false");
  activeSuggestionIndex = -1;
}

function displaySuggestions(query) {
  const box = document.getElementById("searchSuggestions");
  const input = document.getElementById("searchInput");

  if (!box || !input) return;

  const normalizedQuery = normalizeSearch(query);

  if (!normalizedQuery || normalizedQuery.length < 2) {
    hideSuggestions();
    return;
  }

  currentSuggestions = getSearchSuggestions(normalizedQuery);
  activeSuggestionIndex = -1;

  if (!currentSuggestions.length) {
    box.innerHTML = `
      <div class="search-no-results">
        لا توجد اقتراحات قريبة من البحث.
      </div>
    `;

    box.hidden = false;
    input.setAttribute("aria-expanded", "true");
    return;
  }

  box.innerHTML = currentSuggestions.map((item, position) => `
    <button
      class="suggestion-item"
      type="button"
      role="option"
      data-suggestion-index="${position}"
      aria-selected="false"
    >
      <span class="suggestion-cover">
        <img src="${item.book.cover || getFallbackCover(item.book)}" alt="" loading="lazy">
      </span>

      <span class="suggestion-info">
        <strong>${item.book.title}</strong>
        <small>${item.book.category}</small>
      </span>
    </button>
  `).join("");

  box.hidden = false;
  input.setAttribute("aria-expanded", "true");

  box.querySelectorAll("[data-suggestion-index]").forEach(button => {
    button.addEventListener("mousedown", event => {
      event.preventDefault();
    });

    button.addEventListener("click", () => {
      const position = Number(button.dataset.suggestionIndex);
      const selected = currentSuggestions[position];

      if (selected) goToSearchBook(selected.index);
    });
  });
}

function updateActiveSuggestion() {
  const buttons = document.querySelectorAll(
    "#searchSuggestions .suggestion-item"
  );

  buttons.forEach((button, index) => {
    const active = index === activeSuggestionIndex;

    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  buttons[activeSuggestionIndex]?.scrollIntoView({
    block: "nearest"
  });
}

function goToSearchBook(index) {
  const book = books[index];
  if (!book) return;

  const searchInput = document.getElementById("searchInput");

  searchInput.value = book.title;
  selectedCategory = book.category;

  displayCategories();
  displayBooks();
  hideSuggestions();

  const card = document.querySelector(
    `.book-card[data-book-index="${index}"]`
  );

  if (card) {
    card.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    card.classList.add("search-highlight");

    setTimeout(() => {
      card.classList.remove("search-highlight");
    }, 1800);
  }
}

/* تفعيل البحث */

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    displayBooks();
    displaySuggestions(searchInput.value);
  });

  searchInput.addEventListener("keydown", event => {
    const suggestionsBox = document.getElementById("searchSuggestions");

    if (event.key === "ArrowDown" && suggestionsBox && !suggestionsBox.hidden) {
      event.preventDefault();

      if (currentSuggestions.length) {
        activeSuggestionIndex = Math.min(
          activeSuggestionIndex + 1,
          currentSuggestions.length - 1
        );

        updateActiveSuggestion();
      }
    } else if (event.key === "ArrowUp" && suggestionsBox && !suggestionsBox.hidden) {
      event.preventDefault();

      activeSuggestionIndex = Math.max(activeSuggestionIndex - 1, 0);
      updateActiveSuggestion();
    } else if (event.key === "Enter") {
      event.preventDefault();

      if (activeSuggestionIndex >= 0 && currentSuggestions[activeSuggestionIndex]) {
        goToSearchBook(currentSuggestions[activeSuggestionIndex].index);
        return;
      }

      const results = getSearchSuggestions(searchInput.value.trim());

      if (results.length) {
        goToSearchBook(results[0].index);
      } else if (searchInput.value.trim()) {
        hideSuggestions();
        showToast("لم يتم العثور على كتاب قريب من هذا الاسم");
      }
    } else if (event.key === "Escape") {
      hideSuggestions();
    }
  });
}

document.addEventListener("click", event => {
  const searchContainer = document.querySelector(".search-container");

  if (searchContainer && !searchContainer.contains(event.target)) {
    hideSuggestions();
  }
});

/* ==================================
   نظام صور الكتب
   ================================== */

/*
  صور احتياطية مختلفة من Unsplash.
  كل كتاب له رقم مختلف، وبالتالي يحصل على صورة مختلفة.
*/

const fallbackPhotos = [
  "photo-1509062522246-3755977927d7",
  "photo-1507842217343-583bb7270b66",
  "photo-1677442136019-21780ecad995",
  "photo-1518770660439-4636190af475",
  "photo-1498050108023-c5249f4df085",
  "photo-1516321318423-f06f85e504b3",
  "photo-1451187580459-43490279c0fa",
  "photo-1455390582262-044cdead277a",
  "photo-1521587760476-6c12a4b040da",
  "photo-1519389950473-47ba0277781c",
  "photo-1516321497487-e288fb19713f",
  "photo-1531482615713-2afd69097998",
  "photo-1516321318423-f06f85e504b3",
  "photo-1515879218367-8466d910aaa4",
  "photo-1550751827-4bd374c3f58b",
  "photo-1535223289827-42f1e9919769",
  "photo-1481627834876-b7833e8f5570",
  "photo-1497366754035-f200968a6e72",
  "photo-1503676260728-1c00da094a0b",
  "photo-1522202176988-66273c2fd55f",
  "photo-1531297484001-80022131f5a1",
  "photo-1516321318423-f06f85e504b3",
  "photo-1519389950473-47ba0277781c",
  "photo-1518770660439-4636190af475",
  "photo-1516321318423-f06f85e504b3",
  "photo-1550751827-4bd374c3f58b",
  "photo-1515879218367-8466d910aaa4",
  "photo-1519389950473-47ba0277781c",
  "photo-1509062522246-3755977927d7",
  "photo-1498050108023-c5249f4df085",
  "photo-1521587760476-6c12a4b040da",
  "photo-1451187580459-43490279c0fa",
  "photo-1531482615713-2afd69097998",
  "photo-1507842217343-583bb7270b66",
  "photo-1677442136019-21780ecad995",
  "photo-1518770660439-4636190af475",
  "photo-1497366754035-f200968a6e72",
  "photo-1503676260728-1c00da094a0b",
  "photo-1522202176988-66273c2fd55f",
  "photo-1531297484001-80022131f5a1",
  "photo-1535223289827-42f1e9919769",
  "photo-1481627834876-b7833e8f5570",
  "photo-1516321497487-e288fb19713f",
  "photo-1519389950473-47ba0277781c",
  "photo-1515879218367-8466d910aaa4",
  "photo-1550751827-4bd374c3f58b"
];

/* إنشاء رابط الصورة الاحتياطية */

function getFallbackCover(book) {
  const index = Math.max(0, books.indexOf(book));
  const photo = fallbackPhotos[index % fallbackPhotos.length];

  return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=600&h=800&q=85`;
}

/* إنشاء الغلاف */

function coverMarkup(book) {
  return `
    <img
      class="book-cover"
      src="${book.cover || getFallbackCover(book)}"
      alt="غلاف كتاب ${book.title}"
      loading="lazy"
      data-book-cover="${books.indexOf(book)}"
    >
  `;
}

/* تحميل غلاف حقيقي من Open Library */

async function loadCoverForBook(book, index) {
  try {
    const url =
      `https://openlibrary.org/search.json?title=${encodeURIComponent(book.title)}&limit=5&fields=title,cover_i`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Open Library request failed");
    }

    const data = await response.json();
    const docs = data.docs || [];

    const result = docs.find(doc => doc.cover_i);

    if (result && result.cover_i) {
      book.cover =
        `https://covers.openlibrary.org/b/id/${result.cover_i}-L.jpg`;
    } else {
      book.cover = getFallbackCover(book);
    }
  } catch (error) {
    book.cover = getFallbackCover(book);
  }

  updateBookCoverImages(index);
}

/* تحديث صورة الكتاب في كل الأماكن */

function updateBookCoverImages(index) {
  const book = books[index];
  if (!book) return;

  document.querySelectorAll(`[data-book-cover="${index}"]`)
    .forEach(image => {
      image.src = book.cover;
    });

  if (!document.getElementById("searchSuggestions")?.hidden) {
    displaySuggestions(searchInput?.value || "");
  }
}

/* تحميل الصور بالتتابع لتقليل الضغط على المتصفح */

async function loadBookCovers() {
  for (let index = 0; index < books.length; index++) {
    const book = books[index];

    book.cover = getFallbackCover(book);
    updateBookCoverImages(index);

    loadCoverForBook(book, index);
  }
}

/* ==================================
   بطاقات الكتب
   ================================== */

function bookCardMarkup(book) {
  const index = books.indexOf(book);

  return `
    <article class="book-card" data-book-index="${index}">
      <div class="cover-wrap">
        ${coverMarkup(book)}
      </div>

      <h3>${book.title}</h3>

      <p class="book-category">${book.category}</p>

      <p class="book-description">${book.description}</p>

      <div class="card-actions">
        <button data-open-book="${index}" type="button">
          اقرأ الكتاب
        </button>

        <button
          class="icon-action ${book.isFavorite ? "is-active" : ""}"
          data-favorite="${index}"
          title="إضافة إلى المفضلة"
          aria-label="إضافة إلى المفضلة"
          type="button"
        >
          ${book.isFavorite ? "♥" : "♡"}
        </button>

        <button
          class="icon-action ${book.isRead ? "is-active" : ""}"
          data-read="${index}"
          title="إضافة إلى الكتب المقروءة"
          aria-label="إضافة إلى الكتب المقروءة"
          type="button"
        >
          ◉
        </button>
      </div>
    </article>
  `;
}

function attachCardEvents(container) {
  container.querySelectorAll("[data-open-book]").forEach(button => {
    button.addEventListener("click", () => {
      openBook(Number(button.dataset.openBook));
    });
  });

  container.querySelectorAll("[data-favorite]").forEach(button => {
    button.addEventListener("click", () => {
      toggleFavorite(Number(button.dataset.favorite));
    });
  });

  container.querySelectorAll("[data-read]").forEach(button => {
    button.addEventListener("click", () => {
      toggleRead(Number(button.dataset.read));
    });
  });
}

function displayBooks() {
  const container = document.getElementById("books");
  if (!container) return;

  const searchText = normalizeSearch(
    document.getElementById("searchInput")?.value || ""
  );

  const filtered = books.filter(book => {
    const categoryMatch =
      selectedCategory === "الكل" ||
      book.category === selectedCategory;

    const searchMatch =
      !searchText ||
      getBookSearchScore(book, searchText) >= 0.35;

    return categoryMatch && searchMatch;
  });

  const title = document.getElementById("currentCategoryTitle");
  const total = document.getElementById("bookTotal");

  if (title) {
    title.textContent =
      selectedCategory === "الكل" ? "جميع الكتب" : selectedCategory;
  }

  if (total) total.textContent = `${filtered.length} كتاب`;

  container.innerHTML = filtered.length
    ? filtered.map(bookCardMarkup).join("")
    : '<p class="empty-message">لا توجد كتب مطابقة لعملية البحث.</p>';

  attachCardEvents(container);
}

/* العدادات */

function updateCounts() {
  const favoriteCount = document.getElementById("favoriteCount");
  const readCount = document.getElementById("readCount");

  if (favoriteCount) {
    favoriteCount.textContent =
      books.filter(book => book.isFavorite).length;
  }

  if (readCount) {
    readCount.textContent =
      books.filter(book => book.isRead).length;
  }
}

/* المفضلة */

function toggleFavorite(index) {
  if (!books[index]) return;

  books[index].isFavorite = !books[index].isFavorite;

  saveIds(
    STORAGE_KEYS.favorites,
    books.map((book, i) => book.isFavorite ? i : null)
      .filter(i => i !== null)
  );

  refreshLibrary();

  if (currentBook === books[index]) {
    updateBookFavoriteButton();
  }

  showToast(
    books[index].isFavorite
      ? "تمت إضافة الكتاب إلى المفضلة"
      : "تم حذف الكتاب من المفضلة"
  );
}

/* الكتب المقروءة */

function toggleRead(index) {
  if (!books[index]) return;

  books[index].isRead = !books[index].isRead;

  saveIds(
    STORAGE_KEYS.read,
    books.map((book, i) => book.isRead ? i : null)
      .filter(i => i !== null)
  );

  refreshLibrary();

  showToast(
    books[index].isRead
      ? "تمت إضافة الكتاب إلى الكتب المقروءة"
      : "تمت إزالة الكتاب من الكتب المقروءة"
  );
}

/* تحديث المكتبة */

function refreshLibrary() {
  displayBooks();
  displayFavorites();
  updateCounts();
  displaySavedLists();
}

function displayFavorites() {
  const container = document.getElementById("favoriteBooks");
  if (!container) return;

  const favorites = books.filter(book => book.isFavorite);

  container.innerHTML = favorites.length
    ? favorites.map(bookCardMarkup).join("")
    : '<p class="empty-message">لم تتم إضافة كتب إلى المفضلة حتى الآن.</p>';

  attachCardEvents(container);
}

/* قوائم Reader والمفضلة */

function displaySavedLists() {
  const readBooks = books.filter(book => book.isRead);
  const favoriteBooks = books.filter(book => book.isFavorite);

  const readList = document.getElementById("readBooksList");
  const favoriteList = document.getElementById("favoriteModalList");

  if (readList) {
    readList.innerHTML = savedListMarkup(
      readBooks,
      "لا توجد كتب مقروءة حتى الآن.",
      true
    );
  }

  if (favoriteList) {
    favoriteList.innerHTML = savedListMarkup(
      favoriteBooks,
      "قائمة المفضلة فارغة حاليًا.",
      false
    );
  }

  document.querySelectorAll("[data-list-open]").forEach(button => {
    button.addEventListener("click", () => {
      closeModal(button.dataset.closeList);
      openBook(Number(button.dataset.listOpen));
    });
  });

  document.querySelectorAll("[data-remove-read]").forEach(button => {
    button.addEventListener("click", () => {
      removeReadBook(Number(button.dataset.removeRead));
    });
  });
}

function savedListMarkup(items, emptyText, allowRemove = false) {
  if (!items.length) {
    return `<div class="saved-empty">${emptyText}</div>`;
  }

  return items.map(book => {
    const index = books.indexOf(book);

    return `
      <div class="saved-book-row">
        <div class="saved-book-thumb">
          <img
            src="${book.cover || getFallbackCover(book)}"
            alt=""
            loading="lazy"
          >
        </div>

        <div class="saved-book-info">
          <strong>${book.title}</strong>
          <small>${book.category}</small>
        </div>

        <button
          data-list-open="${index}"
          data-close-list="${allowRemove ? "readerModal" : "favoritesModal"}"
          type="button"
        >
          فتح الكتاب
        </button>

        ${allowRemove ? `
          <button
            class="remove-read"
            data-remove-read="${index}"
            title="إزالة من الكتب المقروءة"
            aria-label="إزالة ${book.title} من الكتب المقروءة"
            type="button"
          >
            ×
          </button>
        ` : ""}
      </div>
    `;
  }).join("");
}

function removeReadBook(index) {
  if (!books[index]) return;

  books[index].isRead = false;

  saveIds(
    STORAGE_KEYS.read,
    books.map((book, i) => book.isRead ? i : null)
      .filter(i => i !== null)
  );

  refreshLibrary();
  showToast("تمت إزالة الكتاب من قائمة Reader");
}

/* قارئ الكتب */

function openBook(index) {
  currentBook = books[index];
  if (!currentBook) return;

  currentPage = 0;

  document.getElementById("readerTitle").textContent =
    currentBook.title;

  document.getElementById("readerAuthor").textContent =
    currentBook.author;

  updateBookFavoriteButton();
  showPage();
  openModal("bookModal");
}

function updateBookFavoriteButton() {
  const button = document.getElementById("modalFavoriteBtn");
  if (!button || !currentBook) return;

  button.textContent = currentBook.isFavorite
    ? "♥ إزالة من المفضلة"
    : "♡ أضف للمفضلة";
}

function showPage() {
  if (!currentBook) return;

  const page = currentBook.pages[currentPage];

  document.getElementById("chapterTitle").textContent =
    page.title;

  document.getElementById("pageText").innerHTML =
    page.text;

  const pageInChapter = (currentPage % 3) + 1;
  const chapterNumber = Math.floor(currentPage / 3) + 1;

  document.getElementById("pageNumber").textContent =
    `الفصل ${chapterNumber} من 5 — الصفحة ${pageInChapter} من 3`;

  document.getElementById("previousBtn").disabled =
    currentPage === 0;

  document.getElementById("nextBtn").disabled =
    currentPage === currentBook.pages.length - 1;

  document.getElementById("chapterList").innerHTML =
    chapterTopics[currentBook.category].map((topic, index) => `
      <button
        class="chapter-pill ${page.chapter === index ? "active" : ""}"
        data-chapter="${index}"
        type="button"
      >
        الفصل ${index + 1}
      </button>
    `).join("");

  document.querySelectorAll("[data-chapter]").forEach(button => {
    button.addEventListener("click", () => {
      goToChapter(Number(button.dataset.chapter));
    });
  });
}

function goToChapter(chapterIndex) {
  currentPage = chapterIndex * 3;
  showPage();
}

function changePage(direction) {
  if (!currentBook) return;

  const next = currentPage + direction;

  if (next >= 0 && next < currentBook.pages.length) {
    currentPage = next;
    showPage();
  }
}

function markCurrentBookRead() {
  if (!currentBook) return;

  const index = books.indexOf(currentBook);

  if (!currentBook.isRead) {
    currentBook.isRead = true;

    saveIds(
      STORAGE_KEYS.read,
      books.map((book, i) => book.isRead ? i : null)
        .filter(i => i !== null)
    );

    refreshLibrary();
    showToast("ظهر الكتاب الآن في قائمة Reader");
  } else {
    showToast("هذا الكتاب موجود بالفعل في قائمة Reader");
  }
}

/* تسجيل الدخول */

document.getElementById("loginOpen")?.addEventListener("click", () => {
  openModal("loginModal");
});

document.getElementById("readerOpen")?.addEventListener("click", () => {
  displaySavedLists();
  openModal("readerModal");
});

document.getElementById("favoritesOpen")?.addEventListener("click", () => {
  displaySavedLists();
  openModal("favoritesModal");
});

/* التنقل بين الصفحات */

document.getElementById("previousBtn")?.addEventListener("click", () => {
  changePage(-1);
});

document.getElementById("nextBtn")?.addEventListener("click", () => {
  changePage(1);
});

document.getElementById("modalFavoriteBtn")?.addEventListener("click", () => {
  if (currentBook) {
    toggleFavorite(books.indexOf(currentBook));
  }
});

document.getElementById("markReadBtn")?.addEventListener("click", markCurrentBookRead);

/* إغلاق النوافذ */

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    closeModal(button.dataset.close);
  });
});

document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
  backdrop.addEventListener("click", event => {
    if (event.target === backdrop) {
      closeModal(backdrop.id);
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal-backdrop.open")
      .forEach(modal => closeModal(modal.id));
  }
});

/* نموذج تسجيل الدخول */

document.getElementById("loginForm")?.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("loginName").value.trim();
  const email = document.getElementById("loginEmail").value.trim();

  if (!name || !email) return;

  try {
    localStorage.setItem(
      STORAGE_KEYS.user,
      JSON.stringify({ name, email })
    );
  } catch {}

  updateGreeting();
  closeModal("loginModal");
  event.target.reset();

  showToast(`أهلًا بك يا ${name}`);
});

/* رسالة الترحيب */

function updateGreeting() {
  try {
    const user = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.user) || "null"
    );

    if (user && user.name) {
      const greeting = document.getElementById("userGreeting");

      if (greeting) {
        greeting.textContent = `مرحبًا، ${user.name}`;
      }
    }
  } catch {}
}

/* ==================================
   زر الرجوع لأعلى الصفحة
   ================================== */

function createScrollTopButton() {
  if (document.getElementById("scrollTopButton")) return;

  const button = document.createElement("button");

  button.id = "scrollTopButton";
  button.className = "scroll-top-button";
  button.type = "button";
  button.setAttribute("aria-label", "العودة إلى أعلى الصفحة");

  button.innerHTML = `
    <svg class="scroll-progress-ring" viewBox="0 0 56 56">
      <circle class="scroll-progress-track" cx="28" cy="28" r="24"></circle>
      <circle class="scroll-progress-value" cx="28" cy="28" r="24"></circle>
    </svg>
    <span class="scroll-top-arrow">↑</span>
  `;

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  document.body.appendChild(button);

  const progressCircle = button.querySelector(".scroll-progress-value");
  const circumference = 2 * Math.PI * 24;

  progressCircle.style.strokeDasharray = String(circumference);
  progressCircle.style.strokeDashoffset = String(circumference);

  let ticking = false;

  function updateScrollProgress() {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollableHeight > 0
      ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
      : 0;

    progressCircle.style.strokeDashoffset =
      String(circumference * (1 - progress));

    button.classList.toggle("visible", window.scrollY > 220);
    button.classList.toggle("at-bottom", progress >= 0.995);

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollProgress);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", updateScrollProgress);
  updateScrollProgress();
}

/* ==================================
   تشغيل المكتبة
   ================================== */

syncStoredState();
displayCategories();
refreshLibrary();
updateGreeting();
createScrollTopButton();
loadBookCovers();
