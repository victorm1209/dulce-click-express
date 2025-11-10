import { Product } from '@/types/Product';
import heladoConoFresa from '@/assets/5barquilla.jpg';
import heladoConoMantecado from '@/assets/3barquilla.jpg';
import heladoConoChocolate from '@/assets/4barquilla.jpg';
import heladoChocoPop from '@/assets/7chocopop.jpg';
import heladoSiropeChocolate from '@/assets/8sundae.jpg';
import heladoSiropeFresa from '@/assets/9sundae.jpg';
import heladoSiropeNaranja from '@/assets/10sundae.jpg';
import heladoGuanabana from '@/assets/17sorbete.jpg';
import heladoParchita from '@/assets/16sorbete.jpg';
import heladoSwingChocolate from '@/assets/6swing.jpg';
import heladoFresaMantecado from '@/assets/13tiniton.jpg';
import heladoMantecadoChocolate from '@/assets/11tiniton.jpg';
import heladoMantecadoNaranja from '@/assets/12tiniton.jpg';
import heladoChocolateFresa from '@/assets/14tiniton.jpg';
import heladoCrocante from '@/assets/2zoek.jpg';
import heladoSandwich from '@/assets/1sandwich.jpg';
import heladoMedioLitro from '@/assets/18clasico.jpg';
import heladoMedioLitroPremium from '@/assets/19premium.jpg';
import heladoMango from '@/assets/15sorbete.jpg';
import napolitano from '@/assets/20napolitano.jpg';


export const products: Product[] = [
  {
    id: '1',
    name: 'Sándwich',
    description: 'Helado de Mantecado cubierto con dos galletas de Chocolate.',
    price: 1.20,
    image: heladoSandwich,
    category: 'helados'
  },
  {
    id: '2',
    name: 'Zoek (Crocante)',
    description: 'Paleta de Mantecado con cobertura de Chocolate y trozos de Maní.',
    price: 1.20,
    image: heladoCrocante,
    category: 'helados'
  },
  {
    id: '3',
    name: 'Barquilla Clásica de Mantecado',
    description: 'Cono de galleta dulce cobertura interna de Mantecado.',
    price: 1.20,
    image: heladoConoMantecado,
    category: 'helados'
  },
  {
    id: '4',
    name: 'Barquilla Clásica de Chocolate',
    description: 'Cono de galleta dulce cobertura interna de Chocolate.',
    price: 1.20,
    image: heladoConoChocolate,
    category: 'helados'
  },
  {
    id: '5',
    name: 'Barquilla Clásica de Fresa',
    description: 'Cono de galleta dulce cobertura interna de Fresa.',
    price: 1.20,
    image: heladoConoFresa,
    category: 'helados'
  },
  {
    id: '6',
    name: 'Swing de Mantecado con sirope de Chocolate y Fresa',
    description: 'Tinita de Mantecado con sirope de Chocolate y Fresa, crujiente topping de Maní.',
    price: 1.20,
    image: heladoSwingChocolate,
    category: 'helados'
  },
  {
    id: '7',
    name: 'Choco Pop de Chocolate con sirope de Chocolate',
    description: 'Tinita de Chocolate con sirope de Chocolate.',
    price: 1.20,
    image: heladoChocoPop,
    category: 'helados'
  },
  {
    id: '8',
    name: 'Sundae de sirope de Chocolate',
    description: 'Tinita de Mantecado con sirope de Chocolate.',
    price: 1.20,
    image: heladoSiropeChocolate,
    category: 'helados'
  },
  {
    id: '9',
    name: 'Sundae de sirope de Fresa',
    description: 'Tinita de Mantecado con sirope de Fresa.',
    price: 1.20,
    image: heladoSiropeFresa,
    category: 'helados'
  },
  {
    id: '10',
    name: 'Sundae de sirope de Naranja',
    description: 'Tinita de Mantecado con sirope de Naranja.',
    price: 1.20,
    image: heladoSiropeNaranja,
    category: 'helados'
  },
  {
    id: '11',
    name: 'Tinitón de Mantecado y Chocolate',
    description: 'Tinita de Mantecado y Chocolate.',
    price: 1.20,
    image: heladoMantecadoChocolate,
    category: 'helados'
  },
  {
    id: '12',
    name: 'Tinitón de Mantecado y Naranja',
    description: 'Tinita de Mantecado y Naranja.',
    price: 1.20,
    image: heladoMantecadoNaranja,
    category: 'helados'
  },
  {
    id: '13',
    name: 'Tinitón de Mantecado y Fresa',
    description: 'Tinita de Mantecado y Fresa.',
    price: 1.20,
    image: heladoFresaMantecado,
    category: 'helados'
  },
  {
    id: '14',
    name: 'Tinitón de Chocolate y Fresa',
    description: 'Tinita de Chocolate y Fresa.',
    price: 1.20,
    image: heladoChocolateFresa,
    category: 'helados'
  },
  {
    id: '15',
    name: 'Sorbetes de Mango',
    description: 'Tinita de Mango.',
    price: 1.20,
    image: heladoMango,
    category: 'helados'
  },
  {
    id: '16',
    name: 'Sorbetes de Parchita',
    description: 'Tinita de Parchita.',
    price: 1.20,
    image: heladoParchita,
    category: 'helados'
  },
  {
    id: '17',
    name: 'Sorbetes de Guanábana',
    description: 'Tinita de Guanábana.',
    price: 1.20,
    image: heladoGuanabana,
    category: 'helados'
  },
  {
    id: '18',
    name: 'Clásico (1/2 litro)',
    description: 'Mantecado - Chocolate - Fresa - Mantecado/Chocolate - Mantecado/Fresa - Chocolate/Fresa.',
    price: 4.00,
    image: heladoMedioLitro,
    category: 'helados'
  },
  {
    id: '19',
    name: 'Premium',
    description: 'Ron con Pasas - Torta Suiza - Mantecado/Chocolate - Mantecado/Fresa Chocolate/Fresa.',
    price: 5.00,
    image: heladoMedioLitroPremium,
    category: 'helados'
  },
  {
    id: '20',
    name: 'Napolitano',
    description: 'Mantecado - Chocolate - Fresa.',
    price: 10.00,
    image: napolitano,
    category: 'helados'
  },
];
