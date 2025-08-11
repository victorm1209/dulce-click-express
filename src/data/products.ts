import { Product } from '@/types/Product';
import iceCreamProducts from '@/assets/ice-cream-products.jpg';
import snacksVariety from '@/assets/snacks-variety.jpg';
import candiesSweets from '@/assets/candies-sweets.jpg';
import heladoConoFresa from '@/assets/1-helado-cono-fresa.png';
import heladoConoMantecado from '@/assets/2-helado-cono-mantecado.png';
import heladoConoChocolate from '@/assets/3-helado-cono-chocolate.png';
import heladoUvaFresa from '@/assets/4-helado-uva-fresa.png';
import heladoChocoPop from '@/assets/5-helado-choco-pop.png';
import heladoSiropeChocolate from '@/assets/6-helado-sirope-chocolate.png';
import heladoSiropeFresa from '@/assets/7-helado-sirope-fresa.png';
import heladoSiropeNaranja from '@/assets/8-helado-sirope-naranja.png';
import heladoGuanabana from '@/assets/9-helado-guanabana.png';
import heladoParchita from '@/assets/11-helado-parchita.png';
import heladoUva from '@/assets/12-helado-uva.png';
import heladoFrutasTropicales from '@/assets/13-helado-frutas-tropicales.png';
import heladoLimon from '@/assets/14-helado-limon.png';
import heladoSwingChocolate from '@/assets/15-helado-swing-chocolate.png';
import heladoFresaChocolate from '@/assets/16-helado-fresa-chocolate.png';
import heladoFresaMantecado from '@/assets/17-helado-fresa-mantecado.png';
import heladoMantecadoChocolate from '@/assets/18-helado-mantecado-chocolate.png';
import heladoMantecadoNaranja from '@/assets/19-helado-mantecado-naranja.png';
import heladoClasico from '@/assets/20-helado-clasico.png';
import heladoCrocante from '@/assets/21-helado-crocante.png';
import heladoSandwich from '@/assets/FLYERS2(1).jpg';
import heladoMedioLitro from '@/assets/23-helado-medio-litro.png';
import heladoMedioLitroPremium from '@/assets/24-helado-medio-litro-premium.png';
import heladoMango from '@/assets/10-helado-mango.png';


export const products: Product[] = [
  {
    id: '1',
    name: 'Barquilla de Fresa',
    description: 'Crujiente barquilla con helado de fresa.',
    price: 1.10,
    image: heladoConoFresa,
    category: 'helados'
  },
  {
    id: '2',
    name: 'Barquilla de Mantecado',
    description: 'Barquilla clásica rellena de helado suave de mantecado.',
    price: 1.10,
    image: heladoConoMantecado,
    category: 'helados'
  },
  {
    id: '3',
    name: 'Barquilla de Chocolate',
    description: 'Deliciosa barquilla con helado de chocolate cremoso.',
    price: 1.10,
    image: heladoConoChocolate,
    category: 'helados'
  },
  {
    id: '22',
    name: 'Helado Sandwich',
    description: 'Helado de mantecado cubierto con dos galletas',
    price: 1.10,
    image: heladoSandwich,
    category: 'helados'
  },
  {
    id: '4',
    name: 'Helado Bati Bati',
    description: 'Helado frutal con sabor a uva y fresa, ideal para niños.',
    price: 1.10,
    image: heladoUvaFresa,
    category: 'helados'
  },
  {
    id: '5',
    name: 'Choco Pop',
    description: 'Helado de tinita de chocolate.',
    price: 1.10,
    image: heladoChocoPop,
    category: 'helados'
  },
  {
    id: '6',
    name: 'Helado con Sirope de Chocolate',
    description: 'Helado clásico bañado en sirope de chocolate.',
    price: 1.10,
    image: heladoSiropeChocolate,
    category: 'helados'
  },
  {
    id: '7',
    name: 'Helado con Sirope de Fresa',
    description: 'Helado suave con dulce sirope de fresa.',
    price: 1.10,
    image: heladoSiropeFresa,
    category: 'helados'
  },
  {
    id: '8',
    name: 'Helado con Sirope de Naranja',
    description: 'Helado cremoso con un toque cítrico de naranja.',
    price: 1.10,
    image: heladoSiropeNaranja,
    category: 'helados'
  },
  {
    id: '9',
    name: 'Helado de Guanábana',
    description: 'Refrescante helado de guanábana.',
    price: 1.10,
    image: heladoGuanabana,
    category: 'helados'
  },
  {
    id: '10',
    name: 'Helado de Mango',
    description: 'Sabor tropical de mango en un helado suave.',
    price: 1.10,
    image: heladoMango,
    category: 'helados'
  },
  {
    id: '11',
    name: 'Helado de Parchita',
    description: 'Cremoso helado de parchita.',
    price: 1.10,
    image: heladoParchita,
    category: 'helados'
  },
  {
    id: '12',
    name: 'Helado de Uva',
    description: 'Dulce y suave helado con sabor a uva morada.',
    price: 1.10,
    image: heladoUva,
    category: 'helados'
  },
  {
    id: '13',
    name: 'Helado de Frutas Tropicales',
    description: 'Mezcla frutal refrescante de sabores tropicales.',
    price: 1.10,
    image: heladoFrutasTropicales,
    category: 'helados'
  },
  {
    id: '14',
    name: 'Helado de Limón',
    description: 'Helado de limón, perfecto para el calor.',
    price: 1.10,
    image: heladoLimon,
    category: 'helados'
  },
  {
    id: '15',
    name: 'Helado Swing de Chocolate',
    description: 'Tinita recubierta de chocolate.',
    price: 1.10,
    image: heladoSwingChocolate,
    category: 'helados'
  },
  {
    id: '16',
    name: 'Helado de Fresa con Chocolate',
    description: 'Combinación clásica de sabores para todos los gustos.',
    price: 1.10,
    image: heladoFresaChocolate,
    category: 'helados'
  },
  {
    id: '17',
    name: 'Helado de Fresa con Mantecado',
    description: 'Mezcla irresistible de fresa dulce y mantecado.',
    price: 1.10,
    image: heladoFresaMantecado,
    category: 'helados'
  },
  {
    id: '18',
    name: 'Helado de Mantecado con Chocolate',
    description: 'Helado suave con toque de chocolate cremoso.',
    price: 1.10,
    image: heladoMantecadoChocolate,
    category: 'helados'
  },
  {
    id: '19',
    name: 'Helado Mantecado de Naranja',
    description: 'Delicioso mantecado con un toque de naranja.',
    price: 1.10,
    image: heladoMantecadoNaranja,
    category: 'helados'
  },
  {
    id: '20',
    name: 'Helado Clásico',
    description: 'Sabor tradicional, ideal para cualquier ocasión.',
    price: 1.10,
    image: heladoClasico,
    category: 'helados'
  },
  {
    id: '21',
    name: 'Helado Crocante',
    description: 'Helado cubierto con capa crocante y sabrosa.',
    price: 1.10,
    image: heladoCrocante,
    category: 'helados'
  },
  {
    id: '22',
    name: 'Helado Sandwich',
    description: 'Helado de mantecado cubierto con dos galletas',
    price: 1.10,
    image: heladoSandwich,
    category: 'helados'
  },
  {
    id: '23',
    name: 'Helado 1/2 de sabores clásicos',
    description: 'Medio litro de nuestros sabores clásicos favoritos.',
    price: 3.00,
    image: heladoMedioLitro,
    category: 'helados'
  },
  {
    id: '24',
    name: 'Helado 1/2 de sabores premium',
    description: 'Medio litro de helado premium.',
    price: 3.50,
    image: heladoMedioLitroPremium,
    category: 'helados'
  },
  {
    id: '25',
    name: '2 litros de Napolitano',
    description: 'Clásico helado napolitano con capas de vainilla, chocolate y fresa. Solo por encargo.',
    price: 9.5,
    image: iceCreamProducts,
    category: 'helados'
  },
];
