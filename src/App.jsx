import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowLeftRight,
  ArrowUp,
  Baby,
  BadgeCheck,
  Check,
  ChevronDown,
  Dumbbell,
  Gem,
  House,
  Heart,
  MapPin,
  Menu,
  Minus,
  Paintbrush,
  Plus,
  Search,
  Shirt,
  SlidersHorizontal,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Trash2,
  Utensils,
  X,
} from 'lucide-react';
import { categories, products } from './data/products.js';

const text = {
  ro: {
    tagline: 'Produse de la producători din Moldova · prețuri în MDL',
    navLabel: 'Navigare principală',
    brandHome: 'Pagina principală MoldExpress',
    demoStore: 'VITRINĂ DEMO',
    photoCaption: 'CATALOG DEMO',
    location: 'Chișinău, Moldova',
    search: 'Caută miere, ceramică, haine...',
    catalog: 'Categorii',
    makers: 'Vinde cu noi',
    about: 'Despre MoldExpress',
    account: 'Cont demo',
    cart: 'Coș',
    favorites: 'Favorite',
    favoritesTitle: 'Produsele favorite',
    favoritesEmpty: 'Nu ai adăugat produse la favorite.',
    compare: 'Compară',
    clearSearch: 'Șterge căutarea',
    priceFrom: 'Preț minim',
    priceTo: 'Preț maxim',
    sellerFilter: 'Vânzător',
    allSellers: 'Toți vânzătorii',
    resetFilters: 'Resetează filtrele',
    activeFilters: 'Filtre active',
    availabilityUnknown: 'Disponibilitatea se confirmă la vânzător',
    sellerTermsUnknown: 'Condițiile de livrare și retur nu sunt incluse în datele demo.',
    comparisonTitle: 'Compară produse',
    comparisonEmpty: 'Adaugă produse din catalog pentru a le compara.',
    comparisonLimit: 'Poți compara cel mult 4 produse.',
    compareProduct: 'Adaugă la comparație',
    removeCompare: 'Elimină din comparație',
    comparisonCategoryNote: 'Produsele din categorii diferite au specificații distincte; compararea nu este direct echivalentă.',
    comparisonSameCategory: 'Aceeași categorie',
    comparisonDifferent: 'Diferă',
    comparePrice: 'Preț',
    compareSpecs: 'Caracteristici',
    compareSeller: 'Vânzător',
    compareRating: 'Evaluare demo',
    searchSuggestions: 'Căutare în denumire, descriere și vânzător',
    sortPopularityUnavailable: 'Popularitatea nu este disponibilă în date',
    requiredField: 'Completează acest câmp.',
    allMoldova: 'Toată Moldova',
    localBadge: 'PRODUCĂTORI LOCALI · MOLDOVA',
    heroTitle: 'Lucruri frumoase.\nFăcute aproape.',
    heroBody: 'Descoperă gusturi, obiecte pentru casă, haine și cadouri create de producători și artizani din Moldova.',
    explore: 'Vezi catalogul',
    meetMakers: 'Cum funcționează',
    makersCount: 'produse în catalogul demo',
    categoriesTitle: 'Descoperă produse pentru fiecare zi',
    categoriesNote: 'De la bunătăți locale la lucruri făcute cu grijă.',
    popular: 'Descoperiri din Moldova',
    popularNote: 'Produse alese de la artizani, ateliere și branduri locale.',
    allProducts: 'Vezi toate produsele',
    reviews: 'recenzii',
    add: 'Adaugă în coș',
    details: 'Vezi detaliile',
    backToCatalog: 'Înapoi la catalog',
    description: 'Despre produs',
    category: 'Categorie',
    seller: 'Producător',
    newLocal: 'SELECȚIE MOLDEXPRESS',
    makersTitle: 'Cumperi direct de la oamenii care creează',
    makersBody: 'Descoperă produse făcute în Moldova, află cine le produce și susține atelierele și brandurile locale. Catalogul este demonstrativ.',
    makersLink: 'Vezi catalogul',
    sellerTitle: 'Ești producător sau ai un brand local?',
    sellerBody: 'Publică produsele în vitrina demo și fă-le vizibile cumpărătorilor din toată Moldova.',
    sellerCta: 'Vinde pe MoldExpress',
    footerAbout: 'MoldExpress · produse create aproape de tine.',
    footerNote: 'Vitrină demonstrativă. Produsele și comenzile nu sunt salvate pe un server.',
    results: 'produse',
    noResults: 'Nu am găsit produse. Încearcă o altă căutare.',
    sortBy: 'Sortează:',
    sortFeatured: 'Ordinea catalogului',
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
    placeDemoOrder: 'Încheie demonstrația',
    orderSuccess: 'Demonstrație încheiată',
    orderSuccessNote: 'Datele nu au fost trimise, comanda nu a fost creată și plata nu a fost procesată.',
    close: 'Închide',
    added: 'Adăugat în coș',
    city: 'Oraș',
    backToTop: 'Înapoi sus',
  },
  ru: {
    tagline: 'Товары от производителей Молдовы · цены в MDL',
    navLabel: 'Главная навигация',
    brandHome: 'Главная страница MoldExpress',
    demoStore: 'ДЕМО-ВИТРИНА',
    photoCaption: 'ДЕМО-КАТАЛОГ',
    location: 'Кишинёв, Молдова',
    search: 'Найти мёд, керамику, одежду...',
    catalog: 'Категории',
    makers: 'Продавцам',
    about: 'О MoldExpress',
    account: 'Демо-профиль',
    cart: 'Корзина',
    favorites: 'Избранное',
    favoritesTitle: 'Избранные товары',
    favoritesEmpty: 'Вы пока не добавили товары в избранное.',
    compare: 'Сравнение',
    clearSearch: 'Очистить поиск',
    priceFrom: 'Цена от',
    priceTo: 'Цена до',
    sellerFilter: 'Продавец',
    allSellers: 'Все продавцы',
    resetFilters: 'Сбросить фильтры',
    activeFilters: 'Активные фильтры',
    availabilityUnknown: 'Наличие уточняйте у продавца',
    sellerTermsUnknown: 'Условия доставки и возврата в демоданных не указаны.',
    comparisonTitle: 'Сравнение товаров',
    comparisonEmpty: 'Добавьте товары из каталога для сравнения.',
    comparisonLimit: 'Для сравнения можно выбрать не более 4 товаров.',
    compareProduct: 'Добавить к сравнению',
    removeCompare: 'Убрать из сравнения',
    comparisonCategoryNote: 'У товаров из разных категорий разные характеристики; сравнение не будет прямым.',
    comparisonSameCategory: 'Одна категория',
    comparisonDifferent: 'Отличается',
    comparePrice: 'Цена',
    compareSpecs: 'Характеристики',
    compareSeller: 'Продавец',
    compareRating: 'Демо-рейтинг',
    searchSuggestions: 'Поиск по названию, описанию и продавцу',
    sortPopularityUnavailable: 'Данных о популярности нет',
    requiredField: 'Заполните это поле.',
    allMoldova: 'Вся Молдова',
    localBadge: 'МЕСТНЫЕ ПРОИЗВОДИТЕЛИ · МОЛДОВА',
    heroTitle: 'Вещи с историей.\nСделаны рядом.',
    heroBody: 'Продукты, вещи для дома, одежда и подарки от мастеров и производителей со всей Молдовы.',
    explore: 'Перейти в каталог',
    meetMakers: 'Как это работает',
    makersCount: 'товаров в демо-каталоге',
    categoriesTitle: 'Находите нужное для каждого дня',
    categoriesNote: 'От местных продуктов до вещей ручной работы.',
    popular: 'Находки из Молдовы',
    popularNote: 'Товары от местных мастеров, мастерских и брендов.',
    allProducts: 'Все товары',
    reviews: 'отзывов',
    add: 'В корзину',
    details: 'Подробнее',
    backToCatalog: 'Назад в каталог',
    description: 'О товаре',
    category: 'Категория',
    seller: 'Продавец',
    newLocal: 'ВЫБОР MOLDEXPRESS',
    makersTitle: 'Покупайте у тех, кто это создаёт',
    makersBody: 'Знакомьтесь с товарами из Молдовы, узнавайте их создателей и поддерживайте местные мастерские и бренды. Каталог демонстрационный.',
    makersLink: 'Перейти в каталог',
    sellerTitle: 'Вы производитель или местный бренд?',
    sellerBody: 'Разместите товары в демо-витрине и покажите их покупателям по всей Молдове.',
    sellerCta: 'Продавать на MoldExpress',
    footerAbout: 'MoldExpress · местные товары ближе.',
    footerNote: 'Демонстрационная витрина. Товары и заказы не сохраняются на сервере.',
    results: 'товаров',
    noResults: 'Ничего не найдено. Попробуйте изменить запрос.',
    sortBy: 'Сортировка:',
    sortFeatured: 'Порядок каталога',
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
    placeDemoOrder: 'Завершить демо-оформление',
    orderSuccess: 'Демонстрация завершена',
    orderSuccessNote: 'Данные никуда не отправлены, заказ не создан и оплата не проводилась.',
    close: 'Закрыть',
    added: 'Добавлено в корзину',
    city: 'Город',
    backToTop: 'Наверх',
  },
};

const formatPrice = (amount) =>
  new Intl.NumberFormat('ro-MD', { maximumFractionDigits: 0 }).format(amount);
const productLabel = (product, field, language) =>
  language === 'ro' ? product[`${field}Ro`] ?? product[field] : product[field];
const demoSeller = { name: 'Producător local', city: 'Chișinău' };
const categoryIcons = {
  food: Utensils,
  home: House,
  fashion: Shirt,
  beauty: Sparkles,
  crafts: Paintbrush,
  kids: Baby,
  electronics: Smartphone,
  accessories: Gem,
  sports: Dumbbell,
};

function readStoredValue(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function readCatalogQuery() {
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get('q') ?? '',
    category: categories.some((category) => category.id === params.get('category')) ? params.get('category') : 'all',
    sort: ['featured', 'price-asc', 'price-desc', 'rating'].includes(params.get('sort')) ? params.get('sort') : 'featured',
    min: params.get('min') ?? '',
    max: params.get('max') ?? '',
    seller: params.get('seller') ?? '',
    city: params.get('city') ?? '',
  };
}

function saveStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in private browsing; the current session still works.
  }
}

function SellerWorkspace({ language, productList, onAddProduct, onBack }) {
  const [form, setForm] = useState({ sellerName: demoSeller.name, sellerCity: demoSeller.city, name: '', description: '', priceMDL: '', category: '', image: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const isRussian = language === 'ru';
  const sellerProducts = productList.filter((product) => product.sellerName === form.sellerName);
  const labels = isRussian ? {
    back: 'Вернуться в каталог',
    eyebrow: 'ВИТРИНА МЕСТНОГО ПРОИЗВОДИТЕЛЯ',
    description: 'Укажите название бренда и город, добавьте товары в демо-каталог MoldExpress.',
    products: 'Товары продавца',
    formTitle: 'Опубликовать товар',
    formNote: 'Товар сразу появится в каталоге. Данные сохраняются только до перезагрузки страницы.',
    businessName: 'Название бренда или мастерской',
    businessCity: 'Город или населённый пункт',
    name: 'Название',
    descriptionField: 'Описание',
    price: 'Цена, MDL',
    category: 'Категория',
    categoryPlaceholder: 'Выберите категорию',
    image: 'Ссылка на фото товара',
    submit: 'Опубликовать в каталоге',
    empty: 'У этого продавца пока нет товаров.',
    added: 'Тестовый товар добавлен в каталог и профиль продавца.',
    required: 'Заполните это поле.',
    invalidPrice: 'Введите корректную неотрицательную цену.',
    invalidUrl: 'Введите корректную ссылку на фото (http или https).',
    chooseCategory: 'Выберите категорию.',
  } : {
    back: 'Înapoi la catalog',
    eyebrow: 'VITRINA UNUI PRODUCĂTOR LOCAL',
    description: 'Adaugă numele brandului și orașul, apoi publică produse în catalogul demo MoldExpress.',
    products: 'Produsele vânzătorului',
    formTitle: 'Publică un produs',
    formNote: 'Produsul apare imediat în catalog. Datele sunt păstrate doar până la reîncărcarea paginii.',
    businessName: 'Numele brandului sau atelierului',
    businessCity: 'Oraș sau localitate',
    name: 'Denumire',
    descriptionField: 'Descriere',
    price: 'Preț, MDL',
    category: 'Categorie',
    categoryPlaceholder: 'Alege categoria',
    image: 'Link către fotografia produsului',
    submit: 'Publică în catalog',
    empty: 'Acest vânzător nu are produse momentan.',
    added: 'Produsul de test a fost adăugat în catalog și profil.',
    required: 'Completează acest câmp.',
    invalidPrice: 'Introdu un preț valid, egal sau mai mare decât zero.',
    invalidUrl: 'Introdu un link valid către fotografie (http sau https).',
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
    if (!form.sellerName.trim()) nextErrors.sellerName = labels.required;
    if (!form.sellerCity.trim()) nextErrors.sellerCity = labels.required;
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
      sellerName: form.sellerName.trim(),
      sellerCity: form.sellerCity.trim(),
      rating: 0,
      reviewCount: 0,
      badge: isRussian ? 'Тестовый товар' : 'Produs de test',
    });
    setForm((current) => ({ ...current, name: '', description: '', priceMDL: '', category: '', image: '' }));
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
        <div><span className="section-kicker">{labels.eyebrow}</span><h1 id="seller-page-title">{form.sellerName || labels.eyebrow}</h1><p>{labels.description}</p><span className="seller-profile-city"><MapPin size={14} aria-hidden="true" />{form.sellerCity || demoSeller.city}</span></div>
      </div>
      <div className="seller-products">
        <h2>{labels.products}<span>{sellerProducts.length}</span></h2>
        {sellerProducts.length ? <div className="product-grid">{sellerProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image-wrap"><img src={product.image} alt={product.name} width="300" height="264" loading="lazy" />{product.badge && <span className="product-badge">{product.badge}</span>}</div>
            <div className="product-info"><h3>{productLabel(product, 'name', language)}</h3><p className="seller-product-description">{productLabel(product, 'description', language)}</p><div className="product-bottom"><span className="product-price">{formatPrice(product.priceMDL)} <small>MDL</small></span></div></div>
          </article>
        ))}</div> : <p className="seller-empty">{labels.empty}</p>}
      </div>
      <form className="product-form" onSubmit={submitProduct} noValidate>
        <div className="product-form-heading"><div><span className="section-kicker">MOLDEXPRESS</span><h2>{labels.formTitle}</h2><p>{labels.formNote}</p></div></div>
        <div className="product-form-grid">
          <label className="form-field">
            <span>{labels.businessName}</span><input name="sellerName" value={form.sellerName} onChange={updateField} aria-invalid={Boolean(errors.sellerName)} aria-describedby={errors.sellerName ? 'sellerName-error' : undefined} />{fieldError('sellerName')}
          </label>
          <label className="form-field">
            <span>{labels.businessCity}</span><input name="sellerCity" value={form.sellerCity} onChange={updateField} aria-invalid={Boolean(errors.sellerCity)} aria-describedby={errors.sellerCity ? 'sellerCity-error' : undefined} />{fieldError('sellerCity')}
          </label>
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

function ComparisonPage({ language, items, onRemove, onBack, labels }) {
  const sameCategory = items.length > 1 && items.every((product) => product.category === items[0].category);
  const rows = [
    { label: labels.category, value: (product) => categories.find((category) => category.id === product.category)?.[language] ?? product.category },
    { label: labels.comparePrice, value: (product) => `${formatPrice(product.priceMDL)} MDL` },
    { label: labels.compareSpecs, value: (product) => productLabel(product, 'shortSpec', language) ?? '—' },
    { label: labels.compareSeller, value: (product) => product.sellerName },
    { label: labels.city, value: (product) => product.sellerCity },
    { label: labels.compareRating, value: (product) => product.reviewCount > 0 ? `${product.rating.toFixed(1)} (${product.reviewCount})` : '—' },
  ];

  return (
    <section className="comparison-page page-container" aria-labelledby="comparison-title">
      <button className="text-link comparison-back" type="button" onClick={onBack}><ArrowLeft size={16} />{labels.backToCatalog}</button>
      <div className="section-heading"><div><span className="section-kicker">MOLDEXPRESS</span><h1 id="comparison-title">{labels.comparisonTitle}</h1></div><span className="result-count">{items.length} / 4</span></div>
      {items.length === 0 ? (
        <div className="empty-results comparison-empty"><ArrowLeftRight size={25} aria-hidden="true" /><p>{labels.comparisonEmpty}</p><button type="button" onClick={onBack}>{labels.allProducts}</button></div>
      ) : (
        <>
          {items.length > 1 && <p className={`comparison-note ${sameCategory ? 'is-same-category' : ''}`}>{sameCategory ? labels.comparisonSameCategory : labels.comparisonCategoryNote}</p>}
          <div className="comparison-scroll" role="region" aria-label={labels.comparisonTitle} tabIndex="0">
            <div className="comparison-table">
              <div className="comparison-row comparison-products-row" style={{ '--comparison-count': items.length }}><div className="comparison-label" />{items.map((product) => (
                <div className="comparison-cell comparison-product" key={product.id}>
                  <img src={product.image} alt={productLabel(product, 'name', language)} width="112" height="96" loading="lazy" />
                  <strong>{productLabel(product, 'name', language)}</strong>
                  <button type="button" className="text-link" onClick={() => onRemove(product.id)}>{labels.removeCompare}<X size={14} /></button>
                </div>
              ))}</div>
              {rows.map((row) => {
                const values = items.map(row.value);
                const hasDifferences = new Set(values).size > 1;
                return <div className="comparison-row" style={{ '--comparison-count': items.length }} key={row.label}><strong className="comparison-label">{row.label}</strong>{items.map((product, index) => <div className={`comparison-cell ${hasDifferences ? 'is-different' : ''}`} key={product.id}>{values[index] || '—'}{hasDifferences && <span>{labels.comparisonDifferent}</span>}</div>)}</div>;
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

function App() {
  const initialQuery = readCatalogQuery();
  const [language, setLanguage] = useState(() => {
    const savedLanguage = readStoredValue('moldexpress.language', 'ro');
    return savedLanguage === 'ru' ? 'ru' : 'ro';
  });
  const [productList, setProductList] = useState(products);
  const [activeView, setActiveView] = useState('catalog');
  const [search, setSearch] = useState(initialQuery.search);
  const [activeCategory, setActiveCategory] = useState(initialQuery.category);
  const [sortOrder, setSortOrder] = useState(initialQuery.sort);
  const [minPrice, setMinPrice] = useState(initialQuery.min);
  const [maxPrice, setMaxPrice] = useState(initialQuery.max);
  const [selectedSeller, setSelectedSeller] = useState(initialQuery.seller);
  const [selectedCity, setSelectedCity] = useState(initialQuery.city);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = readStoredValue('moldexpress.cart', []);
    return Array.isArray(savedCart) ? savedCart : [];
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [checkoutErrors, setCheckoutErrors] = useState({});
  const [demoOrderTotal, setDemoOrderTotal] = useState(0);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = readStoredValue('moldexpress.favorites', []);
    return Array.isArray(savedFavorites) ? savedFavorites : [];
  });
  const [comparison, setComparison] = useState(() => {
    const savedComparison = readStoredValue('moldexpress.comparison', []);
    return Array.isArray(savedComparison) ? savedComparison.slice(0, 4) : [];
  });
  const [notice, setNotice] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const t = text[language];

  const demoProductCount = productList.length;
  const visibleProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase();
    const matchingProducts = productList.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSeller = !selectedSeller || product.sellerName === selectedSeller;
      const matchesCity = !selectedCity || product.sellerCity === selectedCity;
      const matchesMinPrice = minPrice === '' || product.priceMDL >= Number(minPrice);
      const matchesMaxPrice = maxPrice === '' || product.priceMDL <= Number(maxPrice);
      const searchable = `${product.name} ${product.nameRu ?? ''} ${product.nameRo ?? ''} ${product.description} ${product.descriptionRu ?? ''} ${product.descriptionRo ?? ''} ${product.shortSpec ?? ''} ${product.sellerName} ${product.sellerCity}`.toLocaleLowerCase();
      return matchesCategory && matchesSeller && matchesCity && matchesMinPrice && matchesMaxPrice && (!normalizedSearch || searchable.includes(normalizedSearch));
    });
    if (sortOrder === 'price-asc') return [...matchingProducts].sort((a, b) => a.priceMDL - b.priceMDL);
    if (sortOrder === 'price-desc') return [...matchingProducts].sort((a, b) => b.priceMDL - a.priceMDL);
    if (sortOrder === 'rating') return [...matchingProducts].sort((a, b) => (b.reviewCount ? b.rating : -1) - (a.reviewCount ? a.rating : -1));
    return matchingProducts;
  }, [activeCategory, maxPrice, minPrice, productList, search, selectedCity, selectedSeller, sortOrder]);

  const displayedProducts = activeView === 'favorites'
    ? productList.filter((product) => favorites.includes(product.id))
    : visibleProducts;
  const availableSellers = [...new Set(productList.map((product) => product.sellerName))].sort();
  const availableCities = [...new Set(productList.map((product) => product.sellerCity))].sort();
  const favoriteProducts = productList.filter((product) => favorites.includes(product.id));
  const comparisonProducts = productList.filter((product) => comparison.includes(product.id));
  const activeFilterCount = Number(Boolean(search.trim())) + Number(activeCategory !== 'all') + Number(minPrice !== '') + Number(maxPrice !== '') + Number(Boolean(selectedSeller)) + Number(Boolean(selectedCity));

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    for (const key of ['q', 'category', 'sort', 'min', 'max', 'seller', 'city']) params.delete(key);
    if (search) params.set('q', search);
    if (activeCategory !== 'all') params.set('category', activeCategory);
    if (sortOrder !== 'featured') params.set('sort', sortOrder);
    if (minPrice) params.set('min', minPrice);
    if (maxPrice) params.set('max', maxPrice);
    if (selectedSeller) params.set('seller', selectedSeller);
    if (selectedCity) params.set('city', selectedCity);
    window.history.replaceState({}, '', url);
  }, [activeCategory, maxPrice, minPrice, search, selectedCity, selectedSeller, sortOrder]);

  useEffect(() => {
    const restoreCatalog = () => {
      const query = readCatalogQuery();
      setSearch(query.search);
      setActiveCategory(query.category);
      setSortOrder(query.sort);
      setMinPrice(query.min);
      setMaxPrice(query.max);
      setSelectedSeller(query.seller);
      setSelectedCity(query.city);
    };
    window.addEventListener('popstate', restoreCatalog);
    return () => window.removeEventListener('popstate', restoreCatalog);
  }, []);

  useEffect(() => saveStoredValue('moldexpress.language', language), [language]);
  useEffect(() => saveStoredValue('moldexpress.cart', cart), [cart]);
  useEffect(() => saveStoredValue('moldexpress.favorites', favorites), [favorites]);
  useEffect(() => saveStoredValue('moldexpress.comparison', comparison), [comparison]);
  useEffect(() => {
    const productIds = new Set(productList.map((product) => product.id));
    setFavorites((current) => current.filter((id) => productIds.has(id)));
    setComparison((current) => current.filter((id) => productIds.has(id)).slice(0, 4));
  }, [productList]);
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'ru'
      ? 'MoldExpress — товары от производителей Молдовы'
      : 'MoldExpress — produse de la producători din Moldova';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === 'ru'
      ? 'Демонстрационный маркетплейс товаров от местных производителей и мастеров. Цены в MDL.'
      : 'Marketplace demonstrativ cu produse de la producători și meșteri locali. Prețuri în MDL.';
  }, [language]);

  useEffect(() => {
    const updateScrollButton = () => setShowScrollToTop(window.scrollY > 300);
    updateScrollButton();
    window.addEventListener('scroll', updateScrollButton, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollButton);
  }, []);

  useEffect(() => {
    const product = productList.find((item) => item.id === selectedProductId);
    const description = document.querySelector('meta[name="description"]');
    if (product) {
      document.title = `${productLabel(product, 'name', language)} | MoldExpress`;
      if (description) description.content = productLabel(product, 'description', language).slice(0, 160);
    } else {
      document.title = language === 'ru' ? 'MoldExpress — товары от производителей Молдовы' : 'MoldExpress — produse de la producători din Moldova';
      if (description) description.content = language === 'ru'
        ? 'Демонстрационный маркетплейс товаров от местных производителей и мастеров. Цены в MDL.'
        : 'Marketplace demonstrativ cu produse de la producători și meșteri locali. Prețuri în MDL.';
    }
  }, [language, productList, selectedProductId]);

  useEffect(() => {
    if (!cartOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    document.querySelector('.cart-drawer button')?.focus();
    function handleDrawerKeys(event) {
      if (event.key === 'Escape') {
        setCartOpen(false);
        setCheckoutStep('cart');
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...document.querySelectorAll('.cart-drawer button:not(:disabled), .cart-drawer input:not(:disabled), .cart-drawer select:not(:disabled)')];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', handleDrawerKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleDrawerKeys);
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, [cartOpen]);

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
    if (cart.length === 0) return;
    const formData = new FormData(event.currentTarget);
    const nextErrors = {};
    for (const field of ['name', 'phone', 'city', 'address']) {
      if (!String(formData.get(field) ?? '').trim()) nextErrors[field] = true;
    }
    setCheckoutErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setDemoOrderTotal(cartTotal);
    setCheckoutStep('success');
  }

  function toggleFavorite(productId) {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId && productList.some((product) => product.id === id))
        : [...current.filter((id) => productList.some((product) => product.id === id)), productId],
    );
  }

  function toggleComparison(productId) {
    setComparison((current) => {
      const validItems = current.filter((id) => productList.some((product) => product.id === id));
      if (validItems.includes(productId)) return validItems.filter((id) => id !== productId);
      if (validItems.length >= 4) {
        showNotice(t.comparisonLimit);
        return validItems;
      }
      return [...validItems, productId];
    });
  }

  function resetFilters() {
    setSearch('');
    setActiveCategory('all');
    setSortOrder('featured');
    setMinPrice('');
    setMaxPrice('');
    setSelectedSeller('');
    setSelectedCity('');
  }

  function selectCategory(categoryId) {
    setActiveView('catalog');
    setSelectedProductId(null);
    setActiveCategory(categoryId);
    setMobileMenuOpen(false);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
    <div className="site-shell">
      <div className="announcement-bar">
        <span><Sparkles size={13} aria-hidden="true" /> {t.tagline}</span>
        <span className="announcement-right">MOLDEXPRESS <span className="flag-mark" aria-hidden="true"><i /><i /><i /></span> {t.demoStore}</span>
      </div>

      <header className="site-header">
        <div className="header-main page-container">
          <a className="brand" href="#top" onClick={() => { setActiveView('catalog'); setSelectedProductId(null); }} aria-label={t.brandHome}>
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-word">Mold<span>Express</span><small>{language === 'ru' ? 'МЕСТНЫЕ БРЕНДЫ · MD' : 'BRANDURI LOCALE · MD'}</small></span>
          </a>

          <form className="search-box" onSubmit={(event) => { event.preventDefault(); setActiveView('catalog'); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }} role="search">
            <Search size={18} aria-hidden="true" />
            <input
              list="product-search-suggestions"
              aria-label={t.search}
              placeholder={t.search}
              value={search}
              onChange={(event) => { setSearch(event.target.value); setActiveView('catalog'); }}
            />
            <datalist id="product-search-suggestions">
              {productList.map((product) => <option key={product.id} value={productLabel(product, 'name', language)} />)}
              {availableSellers.map((seller) => <option key={seller} value={seller} />)}
            </datalist>
            {search && <button className="search-clear" type="button" onClick={() => setSearch('')} aria-label={t.clearSearch}><X size={16} /></button>}
          </form>

          <div className="header-actions">
            <label className="location-button">
              <MapPin size={17} aria-hidden="true" />
              <select aria-label={t.city} value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)}>
                <option value="">{t.allMoldova}</option>
                {availableCities.map((city) => <option key={city} value={city}>{city}</option>)}
              </select>
              <ChevronDown size={14} aria-hidden="true" />
            </label>
            <button className="icon-action language-button" type="button" onClick={() => setLanguage(language === 'ro' ? 'ru' : 'ro')} aria-label={language === 'ro' ? 'Русский' : 'Română'} title={language === 'ro' ? 'Русский' : 'Română'}>
                {language === 'ro' ? 'Русский' : 'Română'}
            </button>
            <button className="icon-action utility-action" type="button" onClick={() => { setActiveView('favorites'); setSelectedProductId(null); }} aria-label={`${t.favorites}, ${favoriteProducts.length}`} title={t.favorites}>
              <Heart size={18} aria-hidden="true" /><span className="utility-count">{favoriteProducts.length}</span>
            </button>
            <button className="icon-action utility-action" type="button" onClick={() => { setActiveView('compare'); setSelectedProductId(null); }} aria-label={`${t.compare}, ${comparisonProducts.length}`} title={t.compare}>
              <ArrowLeftRight size={18} aria-hidden="true" /><span className="utility-count">{comparisonProducts.length}</span>
            </button>
            <button className="cart-action" type="button" onClick={() => { setCheckoutStep('cart'); setCartOpen(true); }} aria-label={`${t.cart}, ${cartQuantity}`}>
              <ShoppingBag size={19} aria-hidden="true" />
              <span>{t.cart}</span>
              <b>{cartQuantity}</b>
            </button>
            <button className="mobile-menu-toggle" type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={language === 'ru' ? 'Открыть меню' : 'Deschide meniul'} aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <nav className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label={t.navLabel}>
          <div className="page-container nav-inner">
            <button className="nav-catalog" type="button" onClick={() => selectCategory('all')}>
              <Menu size={17} aria-hidden="true" /> {t.catalog} <ChevronDown size={14} aria-hidden="true" />
            </button>
            <button className="nav-page-button" type="button" onClick={() => { setSelectedProductId(null); setActiveView('seller'); setMobileMenuOpen(false); }}>{t.makers}</button>
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
            <div hidden={activeView !== 'compare'}>
              <ComparisonPage
                language={language}
                items={comparisonProducts}
                onRemove={toggleComparison}
                onBack={() => setActiveView('catalog')}
                labels={t}
              />
            </div>

            {selectedProduct && activeView === 'catalog' && (
              <section className="product-detail page-container" aria-labelledby="detail-title">
                <button className="detail-back text-link" type="button" onClick={() => { setSelectedProductId(null); setActiveView('catalog'); }}><ArrowLeft size={16} />{t.backToCatalog}</button>
                <div className="detail-layout">
                  <div className="detail-image-wrap"><img src={selectedProduct.image} alt={productLabel(selectedProduct, 'name', language)} width="700" height="640" /></div>
                  <div className="detail-copy">
                    {selectedProduct.badge && <span className="product-badge detail-badge">{productLabel(selectedProduct, 'badge', language)}</span>}
                    <span className="section-kicker">{categories.find((category) => category.id === selectedProduct.category)?.[language] ?? selectedProduct.category}</span>
                    <h1 id="detail-title">{productLabel(selectedProduct, 'name', language)}</h1>
                    {selectedProduct.reviewCount > 0 && <div className="product-rating detail-rating"><span className="star-mark">★</span><strong>{selectedProduct.rating.toFixed(1)}</strong><span>({selectedProduct.reviewCount} {t.reviews})</span></div>}
                    <p className="detail-description">{productLabel(selectedProduct, 'description', language)}</p>
                    <div className="detail-facts"><div><span>{t.category}</span><strong>{categories.find((category) => category.id === selectedProduct.category)?.[language] ?? selectedProduct.category}</strong></div><div><span>{t.seller}</span><strong>{selectedProduct.sellerName}</strong><small>{selectedProduct.sellerCity}</small></div><div><span>{language === 'ru' ? 'Наличие' : 'Disponibilitate'}</span><strong>{t.availabilityUnknown}</strong></div></div>
                    <p className="detail-terms-note">{t.sellerTermsUnknown}</p>
                    <div className="detail-buy"><strong>{formatPrice(selectedProduct.priceMDL)} <small>MDL</small></strong><div className="detail-actions"><button className={`favorite-button detail-favorite ${favorites.includes(selectedProduct.id) ? 'is-favorite' : ''}`} type="button" onClick={() => toggleFavorite(selectedProduct.id)} aria-label={favorites.includes(selectedProduct.id) ? t.removeFavorite : t.addFavorite}><Heart size={18} fill={favorites.includes(selectedProduct.id) ? 'currentColor' : 'none'} /></button><button className={`detail-compare ${comparison.includes(selectedProduct.id) ? 'is-selected' : ''}`} type="button" onClick={() => toggleComparison(selectedProduct.id)} aria-label={comparison.includes(selectedProduct.id) ? t.removeCompare : t.compareProduct}><ArrowLeftRight size={17} /></button><button className="button button-dark" type="button" onClick={() => addToCart(selectedProduct)}><Plus size={17} />{t.add}</button></div></div>
                  </div>
                </div>
              </section>
            )}

            <section className="hero page-container" hidden={Boolean(selectedProduct) || activeView !== 'catalog'} aria-labelledby="hero-title">
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
                <div className="hero-proof"><span><strong>{demoProductCount}</strong> · {t.makersCount}</span></div>
              </div>
              <div className="hero-image-wrap">
                <img className="hero-image" src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1500&q=90" alt={language === 'ro' ? 'Produse proaspete la piața locală' : 'Свежие продукты на местном рынке'} width="1500" height="1000" />
                <div className="hero-image-note"><span className="note-icon"><BadgeCheck size={17} /></span><span><strong>{language === 'ro' ? 'Creat în Moldova' : 'Создано в Молдове'}</strong><small>{language === 'ro' ? 'Descoperă branduri și ateliere locale' : 'Откройте местные бренды и мастерские'}</small></span></div>
                <span className="hero-image-index">MOLDEXPRESS · PRODUSE LOCALE</span>
              </div>
              <div className="hero-bottom-label"><span>47°00&apos; N</span><span>•</span><span>28°51&apos; E</span></div>
            </section>

            <section className="category-section page-container" hidden={Boolean(selectedProduct) || activeView !== 'catalog'} aria-labelledby="category-title">
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

            <section className="products-section" id="products" hidden={Boolean(selectedProduct) || !['catalog', 'favorites'].includes(activeView)} aria-labelledby="products-title">
              <div className="page-container">
                <div className="section-heading products-heading">
                  <div><span className="section-kicker"><span className="live-dot" /> {t.newLocal}</span><h2 id="products-title">{activeView === 'favorites' ? t.favoritesTitle : search ? `${t.results}: “${search}”` : t.popular}</h2><p>{t.popularNote}</p></div>
                  <div className="products-heading-actions">
                    <label className="sort-control"><span>{t.sortBy}</span><select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} aria-label={t.sortBy}><option value="featured">{t.sortFeatured}</option><option value="price-asc">{t.sortPriceAsc}</option><option value="price-desc">{t.sortPriceDesc}</option><option value="rating">{t.sortRating}</option></select></label>
                    <span className="result-count">{displayedProducts.length.toString().padStart(2, '0')} {t.results}</span>
                    {activeView === 'favorites' && <button className="text-link all-products-link" type="button" onClick={() => setActiveView('catalog')}>{t.allProducts}<ArrowRight size={16} /></button>}
                  </div>
                </div>
                {activeView === 'catalog' && <div className="filter-bar" aria-label={t.activeFilters}>
                  <span className="filter-bar-title"><SlidersHorizontal size={16} aria-hidden="true" />{t.activeFilters}</span>
                  <label><span>{t.priceFrom}</span><input type="number" min="0" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} aria-label={t.priceFrom} /></label>
                  <label><span>{t.priceTo}</span><input type="number" min="0" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} aria-label={t.priceTo} /></label>
                  <label><span>{t.sellerFilter}</span><select value={selectedSeller} onChange={(event) => setSelectedSeller(event.target.value)} aria-label={t.sellerFilter}><option value="">{t.allSellers}</option>{availableSellers.map((seller) => <option key={seller} value={seller}>{seller}</option>)}</select></label>
                  <label><span>{t.city}</span><select value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)} aria-label={t.city}><option value="">{t.allMoldova}</option>{availableCities.map((city) => <option key={city} value={city}>{city}</option>)}</select></label>
                  {activeFilterCount > 0 && <button className="filter-reset" type="button" onClick={resetFilters}>{t.resetFilters} <X size={14} /></button>}
                </div>}
                {activeFilterCount > 0 && activeView === 'catalog' && <div className="active-filter-list" aria-live="polite">
                  {activeCategory !== 'all' && <span>{categories.find((category) => category.id === activeCategory)?.[language]}</span>}
                  {search.trim() && <span>“{search.trim()}”</span>}
                  {minPrice && <span>{t.priceFrom}: {minPrice} MDL</span>}
                  {maxPrice && <span>{t.priceTo}: {maxPrice} MDL</span>}
                  {selectedSeller && <span>{selectedSeller}</span>}
                  {selectedCity && <span>{selectedCity}</span>}
                </div>}
                {displayedProducts.length > 0 ? (
                  <div className="product-grid">
                    {displayedProducts.map((product, index) => (
                      <article className="product-card" key={product.id} style={{ '--item-index': index }}>
                        <div className="product-image-wrap">
                          <img src={product.image} alt={productLabel(product, 'name', language)} width="300" height="264" loading="lazy" />
                          {product.badge && <span className="product-badge">{productLabel(product, 'badge', language)}</span>}
                          <button className={`favorite-button ${favorites.includes(product.id) ? 'is-favorite' : ''}`} type="button" onClick={() => toggleFavorite(product.id)} aria-label={favorites.includes(product.id) ? t.removeFavorite : t.addFavorite}>
                            <Heart size={17} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                          </button>
                          <button className={`compare-button ${comparison.includes(product.id) ? 'is-selected' : ''}`} type="button" onClick={() => toggleComparison(product.id)} aria-label={comparison.includes(product.id) ? t.removeCompare : t.compareProduct} title={comparison.includes(product.id) ? t.removeCompare : t.compareProduct}><ArrowLeftRight size={16} /></button>
                        </div>
                        <div className="product-info">
                          <div className="product-seller"><span className="seller-avatar">{product.sellerName.charAt(0)}</span><span>{product.sellerName}</span><span className="seller-city">· {product.sellerCity}</span></div>
                          <h3><button className="product-title-button" type="button" onClick={() => setSelectedProductId(product.id)}>{productLabel(product, 'name', language)}</button></h3>
                          <p className="product-spec">{productLabel(product, 'shortSpec', language) ?? productLabel(product, 'description', language)}</p>
                          <p className="product-availability">{t.availabilityUnknown}</p>
                          <button className="detail-link" type="button" onClick={() => setSelectedProductId(product.id)}>{t.details}<ArrowRight size={13} /></button>
                          {product.reviewCount > 0 && <div className="product-rating"><span className="star-mark">★</span><strong>{product.rating.toFixed(1)}</strong><span>({product.reviewCount} {t.reviews})</span></div>}
                          <div className="product-bottom"><span className="price-stack"><span className="product-price">{formatPrice(product.priceMDL)} <small>MDL</small></span>{product.oldPriceMDL && <del>{formatPrice(product.oldPriceMDL)} MDL</del>}</span><button className="add-button" type="button" onClick={() => addToCart(product)} aria-label={`${t.add}: ${productLabel(product, 'name', language)}`}><Plus size={18} /><span>{t.add}</span></button></div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="empty-results"><Search size={23} /><p>{activeView === 'favorites' ? t.favoritesEmpty : t.noResults}</p><button type="button" onClick={() => { if (activeView === 'favorites') setActiveView('catalog'); resetFilters(); }}>{t.allProducts}</button></div>
                )}
              </div>
            </section>

            <section className="maker-section page-container" hidden={Boolean(selectedProduct) || activeView !== 'catalog'} id="makers">
              <div className="maker-photo"><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85" alt={language === 'ro' ? 'Produse proaspete de la producători locali' : 'Свежие продукты местных производителей'} width="1000" height="667" loading="lazy" /><span className="photo-caption">MOLDEXPRESS · {t.photoCaption}</span></div>
              <div className="maker-copy"><span className="section-kicker">{language === 'ro' ? 'ALEGE CU ÎNCREDERE' : 'ВЫБИРАЙТЕ УВЕРЕННО'}</span><h2>{t.makersTitle}</h2><p>{t.makersBody}</p><div className="maker-stat-row"><div><strong>{productList.length}</strong><small>{language === 'ro' ? 'produse demo' : 'демо-товаров'}</small></div><div><strong>{categories.length - 1}</strong><small>{language === 'ro' ? 'categorii' : 'категорий'}</small></div><div><strong>RO + RU</strong><small>{language === 'ro' ? 'limbi' : 'языка'}</small></div></div><a className="text-link" href="#products" onClick={() => { setActiveCategory('all'); setSearch(''); }}>{t.makersLink}<ArrowRight size={16} /></a></div>
            </section>

            <section className="seller-callout" id="seller-callout" hidden={activeView !== 'catalog' || Boolean(selectedProduct)}>
              <div className="page-container seller-callout-inner"><div className="seller-callout-icon"><Store size={22} /></div><div><h2>{t.sellerTitle}</h2><p>{t.sellerBody}</p></div><button className="button button-light" type="button" onClick={() => { setActiveView('seller'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t.sellerCta}<ArrowRight size={17} /></button><span className="seller-sparkle sparkle-one">✳</span><span className="seller-sparkle sparkle-two">✳</span></div>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer" id="our-story">
        <div className="page-container footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-word">Mold<span>Express</span><small>{language === 'ru' ? 'МЕСТНЫЕ БРЕНДЫ · MD' : 'BRANDURI LOCALE · MD'}</small></span></a><div className="footer-about"><strong>{t.footerAbout}</strong><span>{t.footerNote}</span></div><div className="footer-meta"><span>CHIȘINĂU · MOLDOVA</span><span>© 2026 MoldExpress</span></div></div>
      </footer>

      {cartOpen && <div className="drawer-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartOpen(false); }}>
        <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label={checkoutStep === 'details' ? t.checkoutTitle : t.cartTitle}>
          <div className="drawer-heading">
            <div><span className="section-kicker">MOLDEXPRESS · {checkoutStep === 'details' ? t.checkoutKicker : 'DEMO'}</span><h2>{checkoutStep === 'details' ? t.checkoutTitle : checkoutStep === 'success' ? t.orderSuccess : t.cartTitle}{checkoutStep === 'cart' && <span>{cartQuantity}</span>}</h2></div>
            <div className="drawer-heading-actions">
              {checkoutStep === 'details' && <button className="close-drawer" type="button" onClick={() => { setCheckoutErrors({}); setCheckoutStep('cart'); }} aria-label={t.backToCart}><ArrowLeft size={18} /></button>}
              <button className="close-drawer" type="button" onClick={() => { setCartOpen(false); setCheckoutStep('cart'); }} aria-label={t.close}><X size={20} /></button>
            </div>
          </div>
          {checkoutStep === 'cart' && (cart.length === 0 ? <div className="drawer-empty"><span className="empty-bag"><ShoppingBag size={28} /></span><p>{t.emptyCart}</p><button className="button button-dark" type="button" onClick={() => setCartOpen(false)}>{t.explore}<ArrowRight size={16} /></button></div> : <>
            <div className="cart-items">{cart.map(({ product, quantity }) => <div className="cart-item" key={product.id}><img src={product.image} alt="" width="76" height="82" /><div className="cart-item-copy"><strong>{productLabel(product, 'name', language)}</strong><span>{product.sellerName}</span><b>{formatPrice(product.priceMDL)} MDL</b><div className="quantity-control"><button type="button" onClick={() => updateQuantity(product.id, -1)} aria-label={language === 'ro' ? 'Scade cantitatea' : 'Уменьшить количество'}><Minus size={13} /></button><span>{quantity}</span><button type="button" onClick={() => updateQuantity(product.id, 1)} aria-label={language === 'ro' ? 'Mărește cantitatea' : 'Увеличить количество'}><Plus size={13} /></button></div></div><button className="remove-cart-item" type="button" onClick={() => removeFromCart(product.id)} aria-label={language === 'ro' ? 'Elimină produsul' : 'Удалить товар'}><Trash2 size={16} /></button></div>)}</div>
            <div className="cart-summary"><div className="subtotal-row"><span>{t.subtotal}</span><strong>{formatPrice(cartTotal)} MDL</strong></div><p>{t.checkoutNote}</p><button className="button button-dark checkout-button" type="button" onClick={() => { setCheckoutErrors({}); setCheckoutStep('details'); }}>{t.demoCheckout}<ArrowRight size={17} /></button></div>
          </>)}
          {checkoutStep === 'details' && <>
            <div className="checkout-scroll">
              <div className="checkout-order-lines">{cart.map(({ product, quantity }) => <div key={product.id}><span>{productLabel(product, 'name', language)} × {quantity}</span><strong>{formatPrice(product.priceMDL * quantity)} MDL</strong></div>)}</div>
              <form id="checkout-form" className="checkout-form" onSubmit={placeDemoOrder} noValidate>
                <fieldset><legend>{t.contactDetails}</legend>
                  <label>{t.fullName}<input name="name" autoComplete="name" aria-invalid={Boolean(checkoutErrors.name)} aria-describedby={checkoutErrors.name ? 'checkout-name-error' : undefined} onChange={() => setCheckoutErrors((current) => ({ ...current, name: false }))} /><span className="field-error" id="checkout-name-error" role="alert">{checkoutErrors.name ? t.requiredField : ''}</span></label>
                  <label>{t.phone}<input name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(checkoutErrors.phone)} aria-describedby={checkoutErrors.phone ? 'checkout-phone-error' : undefined} onChange={() => setCheckoutErrors((current) => ({ ...current, phone: false }))} /><span className="field-error" id="checkout-phone-error" role="alert">{checkoutErrors.phone ? t.requiredField : ''}</span></label>
                  <label>{t.city}<input name="city" autoComplete="address-level2" aria-invalid={Boolean(checkoutErrors.city)} aria-describedby={checkoutErrors.city ? 'checkout-city-error' : undefined} onChange={() => setCheckoutErrors((current) => ({ ...current, city: false }))} /><span className="field-error" id="checkout-city-error" role="alert">{checkoutErrors.city ? t.requiredField : ''}</span></label>
                  <label>{t.deliveryAddress}<input name="address" autoComplete="street-address" aria-invalid={Boolean(checkoutErrors.address)} aria-describedby={checkoutErrors.address ? 'checkout-address-error' : undefined} onChange={() => setCheckoutErrors((current) => ({ ...current, address: false }))} /><span className="field-error" id="checkout-address-error" role="alert">{checkoutErrors.address ? t.requiredField : ''}</span></label>
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
    {showScrollToTop && (
      <button
        className="scroll-to-top"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t.backToTop}
        title={t.backToTop}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    )}
    </>
  );
}

export default App;