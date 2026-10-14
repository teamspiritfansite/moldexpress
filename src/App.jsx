import { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  X,
} from 'lucide-react';
import { categories, products } from './data/products.js';

const text = {
  ro: {
    tagline: 'Cumpără local. Alege cu rost.',
    location: 'Chișinău, Moldova',
    search: 'Ce cauți azi?',
    catalog: 'Catalog',
    makers: 'Producători',
    about: 'Povestea noastră',
    account: 'Contul meu',
    cart: 'Coșul meu',
    localBadge: 'PIAȚA LOCALĂ, ONLINE',
    heroTitle: 'Lucruri bune,\nfăcute aproape.',
    heroBody: 'Descoperă oameni talentați și produse cu poveste, create chiar aici, în Moldova.',
    explore: 'Descoperă produsele',
    meetMakers: 'Cunoaște producătorii',
    makersCount: 'creatori locali în catalogul demo',
    categoriesTitle: 'Alege ce-ți place',
    categoriesNote: 'De la ateliere mici, cu grijă pentru fiecare detaliu.',
    popular: 'Alese cu drag',
    popularNote: 'Produse locale care și-au găsit deja locul în casele oamenilor.',
    allProducts: 'Vezi toate produsele',
    reviews: 'recenzii',
    add: 'Adaugă în coș',
    newLocal: 'Proaspăt local',
    makersTitle: 'Oameni din spatele lucrurilor',
    makersBody: 'Fiecare produs vine cu o poveste, un loc și o pereche de mâini pricepute.',
    makersLink: 'Vezi toți producătorii',
    sellerTitle: 'Ai un atelier sau un mic brand?',
    sellerBody: 'Locul tău e aici. Arată Moldovei ce faci cu pasiune.',
    sellerCta: 'Devino partener',
    footerAbout: 'O piață mai aproape de casă.',
    footerNote: 'Un proiect demonstrativ pentru producători și cumpărători din Moldova.',
    results: 'produse',
    noResults: 'Nu am găsit produse. Încearcă altă căutare.',
    cartTitle: 'Coșul tău',
    emptyCart: 'Coșul este gol deocamdată.',
    subtotal: 'Subtotal',
    demoCheckout: 'Continuă comanda',
    checkoutNote: 'Comenzile și plățile nu sunt active în această versiune demo.',
    added: 'Adăugat în coș',
    city: 'Oraș',
  },
  ru: {
    tagline: 'Покупай местное. Выбирай с душой.',
    location: 'Кишинёв, Молдова',
    search: 'Что ищем сегодня?',
    catalog: 'Каталог',
    makers: 'Продавцы',
    about: 'О проекте',
    account: 'Мой профиль',
    cart: 'Корзина',
    localBadge: 'МЕСТНЫЙ МАРКЕТПЛЕЙС',
    heroTitle: 'Хорошие вещи,\nсозданные рядом.',
    heroBody: 'Открой талантливых мастеров и товары с историей, созданные здесь, в Молдове.',
    explore: 'Смотреть товары',
    meetMakers: 'Познакомиться с продавцами',
    makersCount: 'местных авторов в демо-каталоге',
    categoriesTitle: 'Выбирай, что нравится',
    categoriesNote: 'От небольших мастерских, с заботой о каждой детали.',
    popular: 'Выбрано с душой',
    popularNote: 'Местные товары, которые уже нашли место в чьих-то домах.',
    allProducts: 'Все товары',
    reviews: 'отзывов',
    add: 'В корзину',
    newLocal: 'Новинки рядом',
    makersTitle: 'Люди за этими вещами',
    makersBody: 'У каждого товара своя история, место и пара умелых рук.',
    makersLink: 'Все продавцы',
    sellerTitle: 'У тебя мастерская или небольшой бренд?',
    sellerBody: 'Тебе сюда. Покажи Молдове то, что создаёшь с любовью.',
    sellerCta: 'Стать партнёром',
    footerAbout: 'Местный рынок ближе к дому.',
    footerNote: 'Демонстрационный проект для продавцов и покупателей Молдовы.',
    results: 'товаров',
    noResults: 'Ничего не найдено. Попробуй изменить запрос.',
    cartTitle: 'Корзина',
    emptyCart: 'Пока корзина пуста.',
    subtotal: 'Итого',
    demoCheckout: 'Перейти к заказу',
    checkoutNote: 'Заказы и платежи не активны в демо-версии.',
    added: 'Добавлено в корзину',
    city: 'Город',
  },
};

const formatPrice = (amount) =>
  new Intl.NumberFormat('ro-MD', { maximumFractionDigits: 0 }).format(amount);
const demoSeller = { name: 'Atelier Demo', city: 'Chișinău' };

function SellerWorkspace({ language, productList, onAddProduct, onBack }) {
  const [form, setForm] = useState({ name: '', description: '', priceMDL: '', category: '', image: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const isRussian = language === 'ru';
  const sellerProducts = productList.filter((product) => product.sellerName === demoSeller.name);
  const labels = isRussian ? {
    back: 'Вернуться в каталог',
    eyebrow: 'ДЕМО-ПРОФИЛЬ ПРОДАВЦА',
    description: 'Небольшая мастерская тестирует публикацию товаров на MoldExpress. Этот профиль демонстрационный, регистрация и настоящая публикация не подключены.',
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
    description: 'Un mic atelier testează publicarea produselor pe MoldExpress. Profilul este demonstrativ; înregistrarea și publicarea reală nu sunt activate.',
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
            <div className="product-info"><h3>{product.name}</h3><p className="seller-product-description">{product.description}</p><div className="product-bottom"><span className="product-price">{formatPrice(product.priceMDL)} <small>MDL</small></span></div></div>
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
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [notice, setNotice] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = text[language];

  const demoSellerCount = new Set(productList.map((product) => product.sellerName)).size;
  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase();
    return productList.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const searchable = `${product.name} ${product.description} ${product.sellerName} ${product.sellerCity}`.toLocaleLowerCase();
      return matchesCategory && (!normalizedSearch || searchable.includes(normalizedSearch));
    });
  }, [activeCategory, productList, search]);

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.product.priceMDL * item.quantity, 0);

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
        <span className="announcement-right">MOLDOVA <span className="flag-mark" aria-hidden="true"><i /><i /><i /></span> CU DRAG</span>
      </div>

      <header className="site-header">
        <div className="header-main page-container">
          <a className="brand" href="#top" onClick={() => setActiveView('catalog')} aria-label="MoldExpress home">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-word">Mold<span>Express</span><small>PIAȚA NOASTRĂ</small></span>
          </a>

          <form className="search-box" onSubmit={(event) => { event.preventDefault(); setActiveView('catalog'); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} role="search">
            <Search size={18} aria-hidden="true" />
            <input
              aria-label={t.search}
              placeholder={t.search}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <span className="search-hint">⌘ K</span>
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
            <button className="cart-action" type="button" onClick={() => setCartOpen(true)} aria-label={`${t.cart}, ${cartQuantity}`}>
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
        {activeView === 'seller' ? <SellerWorkspace
          language={language}
          productList={productList}
          onAddProduct={(product) => setProductList((current) => [...current, product])}
          onBack={() => setActiveView('catalog')}
        /> : <>
        <section className="hero page-container" aria-labelledby="hero-title">
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
            <img className="hero-image" src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1500&q=90" alt="Piață cu produse locale proaspete" />
            <div className="hero-image-note"><span className="note-icon"><BadgeCheck size={17} /></span><span><strong>{language === 'ro' ? 'Aproape de tine' : 'Рядом с тобой'}</strong><small>{language === 'ro' ? 'Descoperă Moldova, produs cu produs' : 'Открывай Молдову, товар за товаром'}</small></span></div>
            <span className="hero-image-index">01 — 04</span>
          </div>
          <div className="hero-bottom-label"><span>47°00&apos; N</span><span>•</span><span>28°51&apos; E</span></div>
        </section>

        <section className="category-section page-container" aria-labelledby="category-title">
          <div className="section-heading compact-heading">
            <div><span className="section-kicker">{language === 'ro' ? 'GĂSEȘTE CEVA AL TĂU' : 'НАЙДИ СВОЁ'}</span><h2 id="category-title">{t.categoriesTitle}</h2></div>
            <p>{t.categoriesNote}</p>
          </div>
          <div className="category-list">
            {categories.map((category, index) => (
              <button
                className={`category-item category-tone-${index} ${activeCategory === category.id ? 'is-active' : ''}`}
                key={category.id}
                type="button"
                onClick={() => selectCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                <span className="category-glyph" aria-hidden="true">{category.mark}</span>
                <span className="category-label">{category[language]}</span>
                <ArrowDownRight className="category-arrow" size={15} aria-hidden="true" />
              </button>
            ))}
          </div>
        </section>

        <section className="products-section" id="products" aria-labelledby="products-title">
          <div className="page-container">
            <div className="section-heading products-heading">
              <div><span className="section-kicker"><span className="live-dot" /> {t.newLocal}</span><h2 id="products-title">{search ? `${t.results}: “${search}”` : t.popular}</h2><p>{t.popularNote}</p></div>
              <div className="products-heading-actions">
                <span className="result-count">{visibleProducts.length.toString().padStart(2, '0')} {t.results}</span>
                <button className="text-link all-products-link" type="button" onClick={() => { setSearch(''); setActiveCategory('all'); }}>{t.allProducts}<ArrowRight size={16} /></button>
              </div>
            </div>
            {visibleProducts.length > 0 ? (
              <div className="product-grid">
                {visibleProducts.map((product, index) => (
                  <article className="product-card" key={product.id} style={{ '--item-index': index }}>
                    <div className="product-image-wrap">
                      <img src={product.image} alt={product.name} loading="lazy" />
                      {product.badge && <span className="product-badge">{product.badge}</span>}
                      <button className={`favorite-button ${favorites.includes(product.id) ? 'is-favorite' : ''}`} type="button" onClick={() => toggleFavorite(product.id)} aria-label={favorites.includes(product.id) ? 'Remove from favorites' : 'Add to favorites'}>
                        <Heart size={17} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                    <div className="product-info">
                      <div className="product-seller"><span className="seller-avatar">{product.sellerName.charAt(0)}</span><span>{product.sellerName}</span><span className="seller-city">· {product.sellerCity}</span></div>
                      <h3>{product.name}</h3>
                      <div className="product-rating"><span className="star-mark">★</span><strong>{product.rating.toFixed(1)}</strong><span>({product.reviewCount} {t.reviews})</span></div>
                      <div className="product-bottom"><span className="product-price">{formatPrice(product.priceMDL)} <small>MDL</small></span><button className="add-button" type="button" onClick={() => addToCart(product)} aria-label={`${t.add}: ${product.name}`}><Plus size={18} /><span>{t.add}</span></button></div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-results"><Search size={23} /><p>{t.noResults}</p><button type="button" onClick={() => { setSearch(''); setActiveCategory('all'); }}>{t.allProducts}</button></div>
            )}
          </div>
        </section>

        <section className="maker-section page-container" id="makers">
          <div className="maker-photo"><img src="https://images.unsplash.com/photo-1455390582262-044cdee277a8?auto=format&fit=crop&w=1000&q=85" alt="Meșter lucrând la atelier" loading="lazy" /><span className="photo-caption">ATELIERE LOCALE · DIN ȚARĂ</span></div>
          <div className="maker-copy"><span className="section-kicker">MAI MULT DECÂT UN PRODUS</span><h2>{t.makersTitle}</h2><p>{t.makersBody}</p><div className="maker-stat-row"><div><strong>{demoSellerCount}</strong><small>{language === 'ro' ? 'vânzători demo' : 'продавцов в демо'}</small></div><div><strong>{categories.length - 1}</strong><small>{language === 'ro' ? 'categorii' : 'категории'}</small></div><div><strong>1</strong><small>{language === 'ro' ? 'proiect demo' : 'демо-проект'}</small></div></div><a className="text-link" href="#seller-callout">{t.makersLink}<ArrowRight size={16} /></a></div>
          <span className="maker-side-note" aria-hidden="true">LOCAL, CU SENS.</span>
        </section>

        <section className="seller-callout" id="seller-callout">
          <div className="page-container seller-callout-inner"><div className="seller-callout-icon"><Store size={22} /></div><div><h2>{t.sellerTitle}</h2><p>{t.sellerBody}</p></div><button className="button button-light" type="button" onClick={() => { setActiveView('seller'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t.sellerCta}<ArrowRight size={17} /></button><span className="seller-sparkle sparkle-one">✳</span><span className="seller-sparkle sparkle-two">✳</span></div>
        </section>
        </>}
      </main>

      <footer className="site-footer" id="our-story">
        <div className="page-container footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-word">Mold<span>Express</span><small>PIAȚA NOASTRĂ</small></span></a><div className="footer-about"><strong>{t.footerAbout}</strong><span>{t.footerNote}</span></div><div className="footer-meta"><span>CHIȘINĂU · MOLDOVA</span><span>© 2026 MoldExpress</span></div></div>
      </footer>

      {cartOpen && <div className="drawer-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartOpen(false); }}>
        <aside className="cart-drawer" aria-label={t.cartTitle}>
          <div className="drawer-heading"><div><span className="section-kicker">MOLDEXPRESS</span><h2>{t.cartTitle}<span>{cartQuantity}</span></h2></div><button className="close-drawer" type="button" onClick={() => setCartOpen(false)} aria-label="Close cart"><X size={20} /></button></div>
          {cart.length === 0 ? <div className="drawer-empty"><span className="empty-bag"><ShoppingBag size={28} /></span><p>{t.emptyCart}</p><button className="button button-dark" type="button" onClick={() => setCartOpen(false)}>{t.explore}<ArrowRight size={16} /></button></div> : <>
            <div className="cart-items">{cart.map(({ product, quantity }) => <div className="cart-item" key={product.id}><img src={product.image} alt="" /><div className="cart-item-copy"><strong>{product.name}</strong><span>{product.sellerName}</span><b>{formatPrice(product.priceMDL)} MDL</b><div className="quantity-control"><button type="button" onClick={() => updateQuantity(product.id, -1)} aria-label="Decrease quantity"><Minus size={13} /></button><span>{quantity}</span><button type="button" onClick={() => updateQuantity(product.id, 1)} aria-label="Increase quantity"><Plus size={13} /></button></div></div></div>)}</div>
            <div className="cart-summary"><div className="subtotal-row"><span>{t.subtotal}</span><strong>{formatPrice(cartTotal)} MDL</strong></div><p>{t.checkoutNote}</p><button className="button button-dark checkout-button" type="button" onClick={() => showNotice(t.checkoutNote)}>{t.demoCheckout}<ArrowRight size={17} /></button></div>
          </>}
        </aside>
      </div>}

      {notice && <div className="toast" role="status"><Check size={17} />{notice}</div>}
    </div>
  );
}

export default App;