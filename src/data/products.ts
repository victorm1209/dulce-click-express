import { Product } from '@/types/Product';
import iceCreamProducts from '@/assets/ice-cream-products.jpg';
import snacksVariety from '@/assets/snacks-variety.jpg';
import candiesSweets from '@/assets/candies-sweets.jpg';

export const products: Product[] = [
  // Helados
  {
    id: '1',
    name: 'Helado de Vainilla Premium',
    description: 'Cremoso helado artesanal de vainilla con trozos de vainilla real',
    price: 2.50,
    image: iceCreamProducts,
    category: 'helados'
  },
  {
    id: '2',
    name: 'Helado de Chocolate Intenso',
    description: 'Helado de chocolate belga con chispas de chocolate negro',
    price: 3.00,
    image: iceCreamProducts,
    category: 'helados'
  },
  {
    id: '3',
    name: 'Paleta de Frutas Tropicales',
    description: 'Paleta refrescante con sabores de mango, piña y maracuyá',
    price: 1.75,
    image: iceCreamProducts,
    category: 'helados'
  },
  {
    id: '4',
    name: 'Sandwich de Helado',
    description: 'Galletas de chocolate con helado de cookies & cream',
    price: 2.25,
    image: iceCreamProducts,
    category: 'helados'
  },

  // Snacks
  {
    id: '5',
    name: 'Papas Fritas Artesanales',
    description: 'Crujientes papas fritas con sal marina y hierbas',
    price: 1.50,
    image: snacksVariety,
    category: 'snacks'
  },
  {
    id: '6',
    name: 'Mix de Frutos Secos',
    description: 'Mezcla premium de almendras, nueces y pasas',
    price: 3.50,
    image: snacksVariety,
    category: 'snacks'
  },
  {
    id: '7',
    name: 'Galletas de Avena',
    description: 'Galletas caseras de avena con chispas de chocolate',
    price: 2.00,
    image: snacksVariety,
    category: 'snacks'
  },
  {
    id: '8',
    name: 'Popcorn Gourmet',
    description: 'Palomitas de maíz con sabor a caramelo y queso',
    price: 1.25,
    image: snacksVariety,
    category: 'snacks'
  },

  // Dulces
  {
    id: '9',
    name: 'Ositos de Goma',
    description: 'Deliciosos ositos de goma en variedad de sabores frutales',
    price: 1.00,
    image: candiesSweets,
    category: 'dulces'
  },
  {
    id: '10',
    name: 'Chocolate Artesanal',
    description: 'Tableta de chocolate negro 70% cacao ecuatoriano',
    price: 4.00,
    image: candiesSweets,
    category: 'dulces'
  },
  {
    id: '11',
    name: 'Chupetas Multicolor',
    description: 'Chupetas en espiral con sabores de frutas mixtas',
    price: 0.75,
    image: candiesSweets,
    category: 'dulces'
  },
  {
    id: '12',
    name: 'Caramelos de Café',
    description: 'Caramelos duros con intenso sabor a café colombiano',
    price: 1.50,
    image: candiesSweets,
    category: 'dulces'
  },

  // Pasapalos
  {
    id: '13',
    name: 'Tequeños Criollos',
    description: 'Tequeños caseros rellenos de queso blanco venezolano',
    price: 0.50,
    image: snacksVariety,
    category: 'pasapalos'
  },
  {
    id: '14',
    name: 'Empanadas de Queso',
    description: 'Empanadas horneadas rellenas de queso derretido',
    price: 1.00,
    image: snacksVariety,
    category: 'pasapalos'
  },
  {
    id: '15',
    name: 'Cachapas Mini',
    description: 'Mini cachapas dulces perfectas para compartir',
    price: 1.25,
    image: snacksVariety,
    category: 'pasapalos'
  },
  {
    id: '16',
    name: 'Arepitas de Chicharrón',
    description: 'Pequeñas arepas rellenas con chicharrón prensado',
    price: 0.75,
    image: snacksVariety,
    category: 'pasapalos'
  }
];