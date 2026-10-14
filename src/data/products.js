/**
 * Shared marketplace product shape for Issues #1-#3.
 * Keep these fields stable when adding catalog, seller, or cart features.
 * @typedef {Object} Product
 * @property {string} id Stable unique identifier
 * @property {string} name Product title
 * @property {string} description Short product description
 * @property {number} priceMDL Price in Moldovan lei
 * @property {string} category Category slug
 * @property {string} image Product image URL
 * @property {string} sellerName Seller display name
 * @property {string} sellerCity Seller's city or locality
 * @property {number} rating Average rating from 0 to 5
 * @property {number} reviewCount Number of reviews
 * @property {string} badge Optional short label for the product card
 */

/** @type {Product[]} */
export const products = [
  {
    id: 'ceramic-cup-set',
    name: 'Set de cești „Dimineață”',
    description: 'Două cești lucrate manual din ceramică, glazurate în nuanțe naturale.',
    priceMDL: 480,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=960&q=85',
    sellerName: 'Atelier Lut',
    sellerCity: 'Chișinău',
    rating: 4.9,
    reviewCount: 18,
    badge: 'Lucrat manual',
  },
  {
    id: 'acacia-honey',
    name: 'Miere de salcâm, 500 g',
    description: 'Miere naturală culeasă și ambalată în satul Văleni.',
    priceMDL: 145,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=960&q=85',
    sellerName: 'Prisaca lui Ion',
    sellerCity: 'Văleni',
    rating: 5.0,
    reviewCount: 32,
    badge: 'De la producător',
  },
  {
    id: 'woven-market-bag',
    name: 'Geantă țesută „Dor”',
    description: 'Geantă rezistentă, țesută în atelier familial din bumbac reciclat.',
    priceMDL: 390,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=960&q=85',
    sellerName: 'Fir cu Fir',
    sellerCity: 'Orhei',
    rating: 4.8,
    reviewCount: 11,
    badge: 'Ediție mică',
  },
  {
    id: 'strawberry-jam',
    name: 'Dulceață de căpșuni',
    description: 'Căpșuni de sezon, zahăr puțin și rețeta bunicii Maria.',
    priceMDL: 95,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=960&q=85',
    sellerName: 'Bunătăți de Acasă',
    sellerCity: 'Călărași',
    rating: 4.9,
    reviewCount: 24,
    badge: 'De sezon',
  },
  {
    id: 'linen-shirt',
    name: 'Cămașă din in „Nistru”',
    description: 'Croială lejeră și material natural, cusută în atelier local.',
    priceMDL: 890,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=960&q=85',
    sellerName: 'Nord Studio',
    sellerCity: 'Bălți',
    rating: 4.7,
    reviewCount: 9,
    badge: 'Material natural',
  },
  {
    id: 'lavender-bouquet',
    name: 'Buchet de lavandă uscată',
    description: 'Lavandă crescută în grădină proprie, culeasă și legată manual.',
    priceMDL: 210,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=960&q=85',
    sellerName: 'Grădina Albastră',
    sellerCity: 'Cricova',
    rating: 4.9,
    reviewCount: 16,
    badge: 'Natural',
  },
];

export const categories = [
  { id: 'all', ro: 'Toate produsele', ru: 'Все товары', mark: '✳' },
  { id: 'home', ro: 'Casă & decor', ru: 'Дом и декор', mark: '⌂' },
  { id: 'food', ro: 'Gust local', ru: 'Местные продукты', mark: '◒' },
  { id: 'clothing', ro: 'Haine', ru: 'Одежда', mark: '◌' },
  { id: 'accessories', ro: 'Accesorii', ru: 'Аксессуары', mark: '◇' },
];