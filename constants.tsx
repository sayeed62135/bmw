
import { CarModel, NavItem, FeatureItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Our Heritage', href: '#heritage' },
  { label: 'BMW Models', href: '#models' },
  { label: 'Service & Care', href: '#service' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Contact', href: '#contact' },
];

export const BMW_MODELS: CarModel[] = [
  {
    id: 1,
    name: 'BMW 3 Series Sedan',
    type: 'Plug-in Hybrid',
    image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/demo/1733137476XwDBI.webp',
    link: 'https://www.bmw.com.bd/models/bmw-3-series-sedan-overview/'
  },
  {
    id: 2,
    name: 'BMW i5',
    type: 'Full-Electric',
    image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw-i5/17331435906GDCI.png',
    link: 'https://www.bmw.com.bd/models/bmw-i5/'
  },
  {
    id: 3,
    name: 'BMW 7 Series Sedan',
    type: 'Petrol',
    image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw7-series-sedan/17331386569UqDM.webp',
    link: 'https://www.bmw.com.bd/models/bmw-7-series-sedan-highlights/'
  },
  {
    id: 4,
    name: 'BMW i7',
    type: 'Full-Electric',
    image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw-i7/1733142051A58xU.webp',
    link: 'https://www.bmw.com.bd/models/the-new-i7'
  },
  {
    id: 5,
    name: 'BMW X1',
    type: 'Petrol',
    image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw-x1/1733141628tFgau.webp',
    link: 'https://www.bmw.com.bd/models/the-new-x1/'
  },
  {
    id: 6,
    name: 'BMW iX3',
    type: 'Full-Electric',
    image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw-ix31/1733142454kqXfn.webp',
    link: 'https://www.bmw.com.bd/models/bmw-ix3-highlights/'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    title: "German Engineering Excellence",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Retail.Next Experience",
    image: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Unmatched Luxury Performance",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Exclusive Concierge Service",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop"
  }
];
