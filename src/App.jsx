import { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  ChevronDown,
  Gamepad2,
  Headphones,
  Heart,
  Laptop,
  MapPin,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Trash2,
  X,
  Watch,
} from 'lucide-react';
import { categories, products } from './data/products.js';

const text = {
  ro: {
    tagline: 'Tehnologie pentru fiecare zi · prețuri în MDL',
    location: 'Chișinău, Moldova',
    search: 'Caută telefoane, laptopuri, căști...',
    catalog: 'Categorii',
    makers: 'Vinde cu noi',
    about: 'Despre MoldExpress',
    account: 'Cont demo',
    cart: 'Coș',
    localBadge: 'MOLDEXPRESS · ELECTRONICE',
    heroTitle: 'Tehnologie bună.\nAlegere simplă.',
    heroBody: 'Telefoane, laptopuri și gadgeturi alese pentru ritmul tău. Compară produsele și găsește-ți următorul upgrade.',
    explore: 'Vezi produsele',
    meetMakers: 'Cum funcționează',
    makersCount: 'produse în catalogul demo',
    categoriesTitle: 'Găsește tehnologia potrivită',
    categoriesNote: 'Explorează rapid categoriile populare.',
    popular: 'Populare acum',
    popularNote: 'O selecție demo de dispozitive pentru muncă, casă și timp liber.',
    allProducts: 'Vezi toate produsele',
    reviews: 'recenzii',
    add: 'Adaugă în coș',
    details: 'Vezi detaliile',
    backToCatalog: 'Înapoi la catalog',
    description: 'Despre produs',
    category: 'Categorie',
    seller: 'Producător',
    newLocal: 'SELECȚIE MOLDEXPRESS',
    makersTitle: 'Cumperi informat, alegi în ritmul tău',
    makersBody: 'Compară specificațiile, verifică evaluările demo și găsește dispozitivul potrivit. Catalogul și comenzile sunt demonstrative.',
    makersLink: 'Vezi catalogul',
    sellerTitle: 'Ai un magazin de electronice?',
    sellerBody: 'Adaugă o fișă demo și vezi cum arată produsele tale în marketplace.',
    sellerCta: 'Adaugă un produs demo',
    footerAbout: 'MoldExpress · tehnologie, mai aproape.',
    footerNote: 'Vitrină demonstrativă. Comenzile și plățile reale nu sunt activate.',
    results: 'produse',
    noResults: 'Nu am găsit produse. Încearcă altă căutare.',
    sortBy: 'Sortează:',
    sortFeatured: 'Recomandate',
    sortPriceAsc: 'Preț crescător',
    sortPriceDesc: 'Preț descrescător',
    sortRating: 'Cele mai apreciate',
    addFavorite: 'Adaugă la favorite',
    removeFavorite: 'Elimină din favorite',
    cartTitle: 'Coșul tău',
    emptyCart: 'Coșul este gol deocamdată.',
    subtotal: 'Subtotal',
    demoCheckout: 'Continuă la datele comenzii',
    checkoutNote: 'Flux demonstrativ: comanda nu este trimisă, iar plata nu este procesată.',
    checkoutTitle: 'Detalii comandă',
    backToCart: 'Înapoi la coș',
    checkoutKicker: 'PASUL 2 · LIVRARE ȘI PLATĂ',
    contactDetails: 'Date de contact',
    fullName: 'Nume și prenume',
    phone: 'Telefon',
    deliveryAddress: 'Adresa de livrare',
    deliveryMethod: 'Metoda de livrare',
    courier: 'Curier',
    pickup: 'Ridicare personală',
    paymentMethod: 'Metoda de plată',
    cardDemo: 'Card · simulare',
    cash: 'Numerar la livrare',
    placeDemoOrder: 'Plasează comanda demo',
    orderSuccess: 'Comandă demonstrativă confirmată',
    orderSuccessNote: 'Nu s-a trimis nicio comandă și nu s-a efectuat nicio plată.',
    close: 'Închide',
    added: 'Adăugat în coș',
    city: 'Oraș',
  },
  ru: {
    tagline: 'Техника на каждый день · цены в MDL',
    location: 'Кишинёв, Молдова',
    search: 'Найти смартфон, ноутбук, наушники...',
    catalog: 'Категории',
    makers: 'Продавцам',
    about: 'О MoldExpress',
    account: 'Демо-профиль',
    cart: 'Корзина',
    localBadge: 'MOLDEXPRESS · ЭЛЕКТРОНИКА',
    heroTitle: 'Технологии для жизни.\nВыбор без лишнего.',
    heroBody: 'Смартфоны, ноутбуки и гаджеты для работы, дома и отдыха. Сравнивайте характеристики и выбирайте своё.',
    explore: 'Смотреть каталог',
    meetMakers: 'Как это работает',
    makersCount: 'товаров в демо-каталоге',
    categoriesTitle: 'Найдите свою категорию',
    categoriesNote: 'Популярная техника — в нескольких шагах.',
    popular: 'Популярное сейчас',
    popularNote: 'Демо-подборка устройств для работы, дома и отдыха.',
    allProducts: 'Все товары',
    reviews: 'отзывов',
    add: 'В корзину',
    details: 'Подробнее',
    backToCatalog: 'Назад в каталог',
    description: 'О товаре',
    category: 'Категория',
    seller: 'Продавец',
    newLocal: 'ВЫБОР MOLDEXPRESS',
    makersTitle: 'Выбирайте технику с умом',
    makersBody: 'Сравнивайте характеристики, смотрите демо-оценки и находите подходящее устройство. Каталог и оформление заказа демонстрационные.',
    makersLink: 'Перейти в каталог',
    sellerTitle: 'У вас магазин электроники?',
    sellerBody: 'Добавьте демо-карточку и посмотрите, как товары будут выглядеть на маркетплейсе.',
    sellerCta: 'Добавить демо-товар',
    footerAbout: 'MoldExpress · технологии ближе.',
    footerNote: 'Демонстрационная витрина. Реальные заказы и оплата не подключены.',
    results: 'товаров',
    noResults: 'Ничего не найдено. Попробуй изменить запрос.',
    sortBy: 'Сортировка:',
    sortFeatured: 'Рекомендуемые',
    sortPriceAsc: 'Сначала дешевле',
    sortPriceDesc: 'Сначала дороже',
    sortRating: 'По рейтингу',
    addFavorite: 'В избранное',
    removeFavorite: 'Убрать из избранного',
    cartTitle: 'Корзина',
    emptyCart: 'Пока корзина пуста.',
    subtotal: 'Итого',
    demoCheckout: 'Перейти к оформлению',
    checkoutNote: 'Демо-режим: заказ не отправляется, оплата не проводится.',
    checkoutTitle: 'Оформление заказа',
    backToCart: 'Вернуться в корзину',
    checkoutKicker: 'ШАГ 2 · ДОСТАВКА И ОПЛАТА',
    contactDetails: 'Контактные данные',
    fullName: 'Имя и фамилия',
    phone: 'Телефон',
    deliveryAddress: 'Адрес доставки',
    deliveryMethod: 'Способ доставки',
    courier: 'Курьер',
    pickup: 'Самовывоз',
    paymentMethod: 'Способ оплаты',
    cardDemo: 'Карта · симуляция',
    cash: 'Наличными при получении',
    placeDemoOrder: 'Оформить демо-заказ',
    orderSuccess: 'Демо-заказ подтверждён',
    orderSuccessNote: 'Заказ никуда не отправлен, оплата не проводилась.',
    close: 'Закрыть',
    added: 'Добавлено в корзину',
    city: 'Город',
  },
};

const formatPrice = (amount) =>
  new Intl.NumberFormat('ro-MD', { maximumFractionDigits: 0 }).format(amount);
const productLabel = (product, field, language) =>
  language === 'ro' ? product[`${field}Ro`] ?? product[field] : product[field];
const demoSeller = { name: 'Electro Demo', city: 'Chișinău' };
const categoryIcons = {
  phones: Smartphone,
  computers: Laptop,
  audio: Headphones,
  wearables: Watch,
  'photo-video': Camera,
  gaming: Gamepad2,
};

function SellerWorkspace({ language, productList, onAddProduct, onBack }) {
  const [form, setForm] = useState({ name: '', description: '', priceMDL: '', category: '', image: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const isRussian = language === 'ru';
  const sellerProducts = productList.filter((product) => product.sellerName === demoSeller.name);
  const labels = isRussian ? {
    back: 'Вернуться в каталог',
    eyebrow: 'ДЕМО-ПРОФИЛЬ ПРОДАВЦА',
    description: 'Демо-магазин электроники на MoldExpress. Регистрация продавцов и реальные заказы не подключены.',
    products: 'Товары продавца',
    formTitle: 'Добавить тестовый товар',
    formNote: 'Товар появится в каталоге и в этом профиле только на время текущего сеанса.',
    name: 'Название',
    descriptionField: 'Описание',
    price: 'Цена, MDL',
    category: 'Категория',
    categoryPlaceholder: 'Выберите категорию',
    image: 'URL изображения',
    submit: 'Добавить товар',
    empty: 'У этого продавца пока нет товаров.',
    added: 'Тестовый товар добавлен в каталог и профиль продавца.',
    required: 'Заполните это поле.',
    invalidPrice: 'Введите корректную неотрицательную цену.',
    invalidUrl: 'Введите корректный URL изображения (http или https).',
    chooseCategory: 'Выберите категорию.',
  } : {
    back: 'Înapoi la catalog',
    eyebrow: 'PROFIL DEMO DE VÂNZĂTOR',
    description: 'Magazin demo de electronice pe MoldExpress. Înregistrarea vânzătorilor și comenzile reale nu sunt activate.',
    products: 'Produsele vânzătorului',
    formTitle: 'Adaugă un produs de test',
    formNote: 'Produsul va apărea în catalog și în acest profil doar pe durata sesiunii.',
    name: 'Denumire',
    descriptionField: 'Descriere',
    price: 'Preț, MDL',
    category: 'Categorie',
    categoryPlaceholder: 'Alege categoria',
    image: 'URL imagine',
    submit: 'Adaugă produsul',
    empty: 'Acest vânzător nu are produse momentan.',
    added: 'Produsul de test a fost adăugat în catalog și profil.',
    required: 'Completează acest câmp.',
    invalidPrice: 'Introdu un preț valid, egal sau mai mare decât zero.',
    invalidUrl: 'Introdu un URL de imagine valid (http sau https).',
    chooseCategory: 'Alege o categorie.',
  };

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setSuccess('');
  }

  function submitProduct(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = labels.required;
    if (!form.description.trim()) nextErrors.description = labels.required;
    if (form.priceMDL.trim() === '') {
      nextErrors.priceMDL = labels.required;
    } else if (!Number.isFinite(Number(form.priceMDL)) || Number(form.priceMDL) < 0) {
      nextErrors.priceMDL = labels.invalidPrice;
    }
    if (!form.category) nextErrors.category = labels.chooseCategory;
    if (!form.image.trim()) {
      nextErrors.image = labels.required;
    } else {
      try {
        const imageUrl = new URL(form.image);
        if (!['http:', 'https:'].includes(imageUrl.protocol)) nextErrors.image = labels.invalidUrl;
      } catch {
        nextErrors.image = labels.invalidUrl;
      }
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onAddProduct({
      id: `demo-${Date.now()}`,
      name: form.name.trim(),
      description: form.description.trim(),
      priceMDL: Number(form.priceMDL),
      category: form.category,
      image: form.image.trim(),
      sellerName: demoSeller.name,
      sellerCity: demoSeller.city,
      rating: 0,
      reviewCount: 0,
      badge: isRussian ? 'Тестовый товар' : 'Produs de test',
    });
    setForm({ name: '', description: '', priceMDL: '', category: '', image: '' });
    setSuccess(labels.added);
  }

  function fieldError(name) {
    return errors[name] ? <span className="field-error" id={`${name}-error`}>{errors[name]}</span> : null;
  }

  return (
    <section className="seller-workspace page-container" aria-labelledby="seller-page-title">
      <button className="text-link seller-back" type="button" onClick={onBack}><ArrowRight size={16} className="back-arrow" />{labels.back}</button>
      <div className="seller-profile">
        <span className="seller-profile-mark"><Store size={25} aria-hidden="true" /></span>
        <div><span className="section-kicker">{labels.eyebrow}</span><h1 id="seller-page-title">{demoSeller.name}</h1><p>{labels.description}</p><span className="seller-profile-city"><MapPin size={14} aria-hidden="true" />{demoSeller.city}</span></div>
      </div>
      <div className="seller-products">
        <h2>{labels.products}<span>{sellerProducts.length}</span></h2>
        {sellerProducts.length ? <div className="product-grid">{sellerProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy" />{product.badge && <span className="product-badge">{product.badge}</span>}</div>
            <div className="product-info"><h3>{productLabel(product, 'name', language)}</h3><p className="seller-product-description">{productLabel(product, 'description', language)}</p><div className="product-bottom"><span className="product-price">{formatPrice(product.priceMDL)} <small>MDL</small></span></div></div>
          </article>
        ))}</div> : <p className="seller-empty">{labels.empty}</p>}
      </div>
      <form className="product-form" onSubmit={submitProduct} noValidate>
        <div className="product-form-heading"><div><span className="section-kicker">MOLDEXPRESS</span><h2>{labels.formTitle}</h2><p>{labels.formNote}</p></div></div>
        <div className="product-form-grid">
          <label className="form-field">
            <span>{labels.name}</span><input name="name" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />{fieldError('name')}
          </label>
          <label className="form-field">
            <span>{labels.price}</span><input name="priceMDL" type="number" min="0" step="any" value={form.priceMDL} onChange={updateField} aria-invalid={Boolean(errors.priceMDL)} aria-describedby={errors.priceMDL ? 'priceMDL-error' : undefined} />{fieldError('priceMDL')}
          </label>
          <label className="form-field form-field-wide">
            <span>{labels.descriptionField}</span><textarea name="description" rows="4" value={form.description} onChange={updateField} aria-invalid={Boolean(errors.description)} aria-describedby={errors.description ? 'description-error' : undefined} />{fieldError('description')}
          </label>
          <label className="form-field">
            <span>{labels.category}</span><select name="category" value={form.category} onChange={updateField} aria-invalid={Boolean(errors.category)} aria-describedby={errors.category ? 'category-error' : undefined}><option value="">{labels.categoryPlaceholder}</option>{categories.filter((category) => category.id !== 'all').map((category) => <option key={category.id} value={category.id}>{category[language]}</option>)}</select>{fieldError('category')}
          </label>
          <label className="form-field">
            <span>{labels.image}</span><input name="image" type="url" value={form.image} onChange={updateField} aria-invalid={Boolean(errors.image)} aria-describedby={errors.image ? 'image-error' : undefined} />{fieldError('image')}
          </label>
        </div>
        <div className="product-form-actions"><button className="button button-dark" type="submit">{labels.submit}<ArrowRight size={17} aria-hidden="true" /></button>{success && <span className="form-success" role="status"><Check size={16} aria-hidden="true" />{success}</span>}</div>
      </form>
    </section>
  );
}

function App() {
  const [language, setLanguage] = useState('ro');
  const [productList, setProductList] = useState(products);
  const [activeView, setActiveView] = useState('catalog');
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('featured');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [demoOrderTotal, setDemoOrderTotal] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [notice, setNotice] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = text[language];

  const demoSellerCount = new Set(productList.map((product) => product.sellerName)).size;
  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase();
    const matchingProducts = productList.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const searchable = `${product.name} ${product.nameRu ?? ''} ${product.nameRo ?? ''} ${product.description} ${product.descriptionRu ?? ''} ${product.descriptionRo ?? ''} ${product.sellerName} ${product.sellerCity}`.toLocaleLowerCase();
      return matchesCategory && (!normalizedSearch || searchable.includes(normalizedSearch));
    });
    if (sortOrder === 'price-asc') return [...matchingProducts].sort((a, b) => a.priceMDL - b.priceMDL);
    if (sortOrder === 'price-desc') return [...matchingProducts].sort((a, b) => b.priceMDL - a.priceMDL);
    if (sortOrder === 'rating') return [...matchingProducts].sort((a, b) => b.rating - a.rating);
    return matchingProducts;
  }, [activeCategory, productList, search, sortOrder]);

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.product.priceMDL * item.quantity, 0);
  const selectedProduct = productList.find((product) => product.id === selectedProductId);

  function showNotice(message) {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2400);
  }

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...current, { product, quantity: 1 }];
    });
    showNotice(t.added);
  }

  function updateQuantity(productId, difference) {
    setCart((current) =>
      current
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity + difference } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    setCart((current) => current.filter((item) => item.product.id !== productId));
  }

  function placeDemoOrder(event) {
    event.preventDefault();
    setDemoOrderTotal(cartTotal);
    setCart([]);
    setCheckoutStep('success');
  }

  function toggleFavorite(productId) {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }

  function selectCategory(categoryId) {
    setActiveView('catalog');
    setActiveCategory(categoryId);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <span><Sparkles size={13} aria-hidden="true" /> {t.tagline}</span>
        <span className="announcement-right">MOLDEXPRESS <span className="flag-mark" aria-hidden="true"><i /><i /><i /></span> DEMO STORE</span>
      </div>

      <header className="site-header">
        <div className="header-main page-container">
          <a className="brand" href="#top" onClick={() => setActiveView('catalog')} aria-label="MoldExpress home">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-word">Mold<span>Express</span><small>ELECTRONICE · MD</small></span>
          </a>

          <form className="search-box" onSubmit={(event) => { event.preventDefault(); setActiveView('catalog'); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} role="search">
            <Search size={18} aria-hidden="true" />
            <input
              aria-label={t.search}
              placeholder={t.search}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <span className="search-hint">MDL</span>
          </form>

          <div className="header-actions">
            <button className="location-button" type="button" onClick={() => showNotice(`${t.city}: ${t.location}`)}>
              <MapPin size={17} aria-hidden="true" />
              <span>{t.location}<small>{t.city}</small></span>
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            <button className="icon-action language-button" type="button" onClick={() => setLanguage(language === 'ro' ? 'ru' : 'ro')} aria-label="Schimbă limba">
              {language === 'ro' ? 'RU' : 'RO'}
            </button>
            <button className="icon-action account-action" type="button" onClick={() => showNotice(t.account)} aria-label={t.account}>
              <span className="avatar-mark">M</span>
            </button>
            <button className="cart-action" type="button" onClick={() => { setCheckoutStep('cart'); setCartOpen(true); }} aria-label={`${t.cart}, ${cartQuantity}`}>
              <ShoppingBag size={19} aria-hidden="true" />
              <span>{t.cart}</span>
              <b>{cartQuantity}</b>
            </button>
            <button className="mobile-menu-toggle" type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open menu">
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <nav className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <div className="page-container nav-inner">
            <button className="nav-catalog" type="button" onClick={() => selectCategory('all')}>
              <Menu size={17} aria-hidden="true" /> {t.catalog} <ChevronDown size={14} aria-hidden="true" />
            </button>
            <button className="nav-page-button" type="button" onClick={() => setActiveView('seller')}>{t.makers}</button>
            <a href="#our-story">{t.about}</a>
            <span className="nav-spacer" />
            <span className="nav-local"><span className="live-dot" /> {language === 'ro' ? 'Făcut cu drag, în Moldova' : 'Сделано с душой в Молдове'}</span>
          </div>
        </nav>
      </header>

      <main id="top">
        {activeView === 'seller' ? (
          <SellerWorkspace
            language={language}
            productList={productList}
            onAddProduct={(product) => setProductList((current) => [...current, product])}
            onBack={() => setActiveView('catalog')}
          />
        ) : (
          <>
            {selectedProduct && (
              <section className="product-detail page-container" aria-labelledby="detail-title">
                <button className="detail-back text-link" type="button" onClick={() => setSelectedProductId(null)}><ArrowLeft size={16} />{t.backToCatalog}</button>
                <div className="detail-layout">
                  <div className="detail-image-wrap"><img src={selectedProduct.image} alt={productLabel(selectedProduct, 'name', language)} /></div>
                  <div className="detail-copy">
                    {selectedProduct.badge && <span className="product-badge detail-badge">{productLabel(selectedProduct, 'badge', language)}</span>}
                    <span className="section-kicker">{categories.find((category) => category.id === selectedProduct.category)?.[language] ?? selectedProduct.category}</span>
                    <h1 id="detail-title">{productLabel(selectedProduct, 'name', language)}</h1>
                    <div className="product-rating detail-rating"><span className="star-mark">★</span><strong>{selectedProduct.rating.toFixed(1)}</strong><span>({selectedProduct.reviewCount} {t.reviews})</span></div>
                    <p className="detail-description">{productLabel(selectedProduct, 'description', language)}</p>
                    <div className="detail-facts"><div><span>{t.category}</span><strong>{categories.find((category) => category.id === selectedProduct.category)?.[language] ?? selectedProduct.category}</strong></div><div><span>{t.seller}</span><strong>{selectedProduct.sellerName}</strong><small>{selectedProduct.sellerCity}</small></div></div>
                    <div className="detail-buy"><strong>{formatPrice(selectedProduct.priceMDL)} <small>MDL</small></strong><button className="button button-dark" type="button" onClick={() => addToCart(selectedProduct)}><Plus size={17} />{t.add}</button></div>
                  </div>
                </div>
              </section>
            )}

            <section className="hero page-container" hidden={Boolean(selectedProduct)} aria-labelledby="hero-title">
              <div className="hero-copy">
                <div className="eyebrow"><span className="eyebrow-dot" /> {t.localBadge}</div>
                <h1 id="hero-title">{t.heroTitle.split('\n').map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</h1>
                <p>{t.heroBody}</p>
                <div className="hero-actions">
                  <button className="button button-dark" type="button" onClick={() => selectCategory('all')}>
                    {t.explore} <ArrowRight size={17} aria-hidden="true" />
                  </button>
                  <a className="text-link" href="#makers">{t.meetMakers}<ArrowDownRight size={16} aria-hidden="true" /></a>
                </div>
                <div className="hero-proof"><span className="proof-avatars"><i>A</i><i>M</i><i>V</i></span><span><strong>{demoSellerCount}</strong> · {t.makersCount}</span></div>
              </div>
              <div className="hero-image-wrap">
                <img className="hero-image" src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1500&q=90" alt={language === 'ro' ? 'Laptopuri și dispozitive electronice' : 'Ноутбуки и электронные устройства'} />
                <div className="hero-image-note"><span className="note-icon"><BadgeCheck size={17} /></span><span><strong>{language === 'ro' ? 'Alegere demo' : 'Демо-подборка'}</strong><small>{language === 'ro' ? 'Descoperă gadgeturi pentru fiecare zi' : 'Гаджеты на каждый день'}</small></span></div>
                <span className="hero-image-index">MOLDEXPRESS · TECH</span>
              </div>
              <div className="hero-bottom-label"><span>47°00&apos; N</span><span>•</span><span>28°51&apos; E</span></div>
            </section>

            <section className="category-section page-container" hidden={Boolean(selectedProduct)} aria-labelledby="category-title">
              <div className="section-heading compact-heading">
                <div><span className="section-kicker">{language === 'ro' ? 'GĂSEȘTE CEVA AL TĂU' : 'НАЙДИ СВОЁ'}</span><h2 id="category-title">{t.categoriesTitle}</h2></div>
                <p>{t.categoriesNote}</p>
              </div>
              <div className="category-list">
                {categories.map((category, index) => {
                  const CategoryIcon = categoryIcons[category.id] ?? Sparkles;
                  return (
                    <button
                      className={`category-item category-tone-${index} ${activeCategory === category.id ? 'is-active' : ''}`}
                      key={category.id}
                      type="button"
                      onClick={() => selectCategory(category.id)}
                      aria-pressed={activeCategory === category.id}
                    >
                      <span className="category-glyph" aria-hidden="true"><CategoryIcon size={21} strokeWidth={1.8} /></span>
                      <span className="category-label">{category[language]}</span>
                      <ArrowDownRight className="category-arrow" size={15} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="products-section" id="products" hidden={Boolean(selectedProduct)} aria-labelledby="products-title">
              <div className="page-container">
                <div className="section-heading products-heading">
                  <div><span className="section-kicker"><span className="live-dot" /> {t.newLocal}</span><h2 id="products-title">{search ? `${t.results}: “${search}”` : t.popular}</h2><p>{t.popularNote}</p></div>
                  <div className="products-heading-actions">
                    <label className="sort-control"><span>{t.sortBy}</span><select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} aria-label={t.sortBy}><option value="featured">{t.sortFeatured}</option><option value="price-asc">{t.sortPriceAsc}</option><option value="price-desc">{t.sortPriceDesc}</option><option value="rating">{t.sortRating}</option></select></label>
                    <span className="result-count">{visibleProducts.length.toString().padStart(2, '0')} {t.results}</span>
                    <button className="text-link all-products-link" type="button" onClick={() => { setSearch(''); setActiveCategory('all'); }}>{t.allProducts}<ArrowRight size={16} /></button>
                  </div>
                </div>
                {visibleProducts.length > 0 ? (
                  <div className="product-grid">
                    {visibleProducts.map((product, index) => (
                      <article className="product-card" key={product.id} style={{ '--item-index': index }}>
                        <div className="product-image-wrap">
                          <img src={product.image} alt={productLabel(product, 'name', language)} loading="lazy" />
                          {product.badge && <span className="product-badge">{productLabel(product, 'badge', language)}</span>}
                          <button className={`favorite-button ${favorites.includes(product.id) ? 'is-favorite' : ''}`} type="button" onClick={() => toggleFavorite(product.id)} aria-label={favorites.includes(product.id) ? t.removeFavorite : t.addFavorite}>
                            <Heart size={17} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                        <div className="product-info">
                          <div className="product-seller"><span className="seller-avatar">{product.sellerName.charAt(0)}</span><span>{product.sellerName}</span><span className="seller-city">· {product.sellerCity}</span></div>
                          <h3><button className="product-title-button" type="button" onClick={() => setSelectedProductId(product.id)}>{productLabel(product, 'name', language)}</button></h3>
                          <p className="product-spec">{product.shortSpec}</p>
                          <button className="detail-link" type="button" onClick={() => setSelectedProductId(product.id)}>{t.details}<ArrowRight size={13} /></button>
                          <div className="product-rating"><span className="star-mark">★</span><strong>{product.rating.toFixed(1)}</strong><span>({product.reviewCount} {t.reviews})</span></div>
                          <div className="product-bottom"><span className="price-stack"><span className="product-price">{formatPrice(product.priceMDL)} <small>MDL</small></span>{product.oldPriceMDL && <del>{formatPrice(product.oldPriceMDL)} MDL</del>}</span><button className="add-button" type="button" onClick={() => addToCart(product)} aria-label={`${t.add}: ${productLabel(product, 'name', language)}`}><Plus size={18} /><span>{t.add}</span></button></div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="empty-results"><Search size={23} /><p>{t.noResults}</p><button type="button" onClick={() => { setSearch(''); setActiveCategory('all'); }}>{t.allProducts}</button></div>
                )}
              </div>
            </section>

            <section className="maker-section page-container" hidden={Boolean(selectedProduct)} id="makers">
              <div className="maker-photo"><img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85" alt={language === 'ro' ? 'Dispozitive și tehnologie pentru lucru' : 'Техника и устройства для работы'} loading="lazy" /><span className="photo-caption">MOLDEXPRESS · DEMO CATALOG</span></div>
              <div className="maker-copy"><span className="section-kicker">{language === 'ro' ? 'ALEGE CU ÎNCREDERE' : 'ВЫБИРАЙТЕ УВЕРЕННО'}</span><h2>{t.makersTitle}</h2><p>{t.makersBody}</p><div className="maker-stat-row"><div><strong>{productList.length}</strong><small>{language === 'ro' ? 'produse demo' : 'демо-товаров'}</small></div><div><strong>{categories.length - 1}</strong><small>{language === 'ro' ? 'categorii' : 'категорий'}</small></div><div><strong>RO + RU</strong><small>{language === 'ro' ? 'limbi' : 'языка'}</small></div></div><a className="text-link" href="#products" onClick={() => { setActiveCategory('all'); setSearch(''); }}>{t.makersLink}<ArrowRight size={16} /></a></div>
              <span className="maker-side-note" aria-hidden="true">TECH · EVERY DAY</span>
            </section>

            <section className="seller-callout" id="seller-callout">
              <div className="page-container seller-callout-inner"><div className="seller-callout-icon"><Store size={22} /></div><div><h2>{t.sellerTitle}</h2><p>{t.sellerBody}</p></div><button className="button button-light" type="button" onClick={() => { setActiveView('seller'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t.sellerCta}<ArrowRight size={17} /></button><span className="seller-sparkle sparkle-one">✳</span><span className="seller-sparkle sparkle-two">✳</span></div>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer" id="our-story">
        <div className="page-container footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-word">Mold<span>Express</span><small>ELECTRONICE · MD</small></span></a><div className="footer-about"><strong>{t.footerAbout}</strong><span>{t.footerNote}</span></div><div className="footer-meta"><span>CHIȘINĂU · MOLDOVA</span><span>© 2026 MoldExpress</span></div></div>
      </footer>

      {cartOpen && <div className="drawer-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartOpen(false); }}>
        <aside className="cart-drawer" aria-label={checkoutStep === 'details' ? t.checkoutTitle : t.cartTitle}>
          <div className="drawer-heading">
            <div><span className="section-kicker">MOLDEXPRESS · {checkoutStep === 'details' ? t.checkoutKicker : 'DEMO'}</span><h2>{checkoutStep === 'details' ? t.checkoutTitle : checkoutStep === 'success' ? t.orderSuccess : t.cartTitle}{checkoutStep === 'cart' && <span>{cartQuantity}</span>}</h2></div>
            <div className="drawer-heading-actions">
              {checkoutStep === 'details' && <button className="close-drawer" type="button" onClick={() => setCheckoutStep('cart')} aria-label={t.backToCart}><ArrowLeft size={18} /></button>}
              <button className="close-drawer" type="button" onClick={() => { setCartOpen(false); setCheckoutStep('cart'); }} aria-label={t.close}><X size={20} /></button>
            </div>
          </div>
          {checkoutStep === 'cart' && (cart.length === 0 ? <div className="drawer-empty"><span className="empty-bag"><ShoppingBag size={28} /></span><p>{t.emptyCart}</p><button className="button button-dark" type="button" onClick={() => setCartOpen(false)}>{t.explore}<ArrowRight size={16} /></button></div> : <>
            <div className="cart-items">{cart.map(({ product, quantity }) => <div className="cart-item" key={product.id}><img src={product.image} alt="" /><div className="cart-item-copy"><strong>{productLabel(product, 'name', language)}</strong><span>{product.sellerName}</span><b>{formatPrice(product.priceMDL)} MDL</b><div className="quantity-control"><button type="button" onClick={() => updateQuantity(product.id, -1)} aria-label="Decrease quantity"><Minus size={13} /></button><span>{quantity}</span><button type="button" onClick={() => updateQuantity(product.id, 1)} aria-label="Increase quantity"><Plus size={13} /></button></div></div><button className="remove-cart-item" type="button" onClick={() => removeFromCart(product.id)} aria-label={language === 'ro' ? 'Elimină produsul' : 'Удалить товар'}><Trash2 size={16} /></button></div>)}</div>
            <div className="cart-summary"><div className="subtotal-row"><span>{t.subtotal}</span><strong>{formatPrice(cartTotal)} MDL</strong></div><p>{t.checkoutNote}</p><button className="button button-dark checkout-button" type="button" onClick={() => setCheckoutStep('details')}>{t.demoCheckout}<ArrowRight size={17} /></button></div>
          </>)}
          {checkoutStep === 'details' && <>
            <div className="checkout-scroll">
              <div className="checkout-order-lines">{cart.map(({ product, quantity }) => <div key={product.id}><span>{productLabel(product, 'name', language)} × {quantity}</span><strong>{formatPrice(product.priceMDL * quantity)} MDL</strong></div>)}</div>
              <form id="checkout-form" className="checkout-form" onSubmit={placeDemoOrder}>
                <fieldset><legend>{t.contactDetails}</legend>
                  <label>{t.fullName}<input name="name" autoComplete="name" required /></label>
                  <label>{t.phone}<input name="phone" type="tel" autoComplete="tel" required /></label>
                  <label>{t.city}<input name="city" autoComplete="address-level2" required /></label>
                  <label>{t.deliveryAddress}<input name="address" autoComplete="street-address" required /></label>
                </fieldset>
                <fieldset><legend>{t.deliveryMethod}</legend><div className="checkout-options">
                  <label className="checkout-choice"><input type="radio" name="delivery" value="courier" defaultChecked /><span>{t.courier}</span></label>
                  <label className="checkout-choice"><input type="radio" name="delivery" value="pickup" /><span>{t.pickup}</span></label>
                </div></fieldset>
                <fieldset><legend>{t.paymentMethod}</legend><div className="checkout-options">
                  <label className="checkout-choice"><input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} /><span>{t.cardDemo}</span></label>
                  <label className="checkout-choice"><input type="radio" name="payment" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} /><span>{t.cash}</span></label>
                </div></fieldset>
              </form>
            </div>
            <div className="checkout-footer"><div className="subtotal-row"><span>{t.subtotal}</span><strong>{formatPrice(cartTotal)} MDL</strong></div><p>{t.checkoutNote}</p><button className="button button-dark checkout-button" type="submit" form="checkout-form">{t.placeDemoOrder}<ArrowRight size={17} /></button></div>
          </>}
          {checkoutStep === 'success' && <div className="checkout-success"><span className="success-mark"><Check size={26} /></span><p>{t.orderSuccessNote}</p><div className="subtotal-row"><span>{t.subtotal}</span><strong>{formatPrice(demoOrderTotal)} MDL</strong></div><button className="button button-dark checkout-button" type="button" onClick={() => setCartOpen(false)}>{t.close}<Check size={17} /></button></div>}
        </aside>
      </div>}

      {notice && <div className="toast" role="status"><Check size={17} />{notice}</div>}
    </div>
  );
}

export default App;