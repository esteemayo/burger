import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SiCodechef } from 'react-icons/si';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import { CardMenu, FeaturesType, FooterLinks, Menus, Socials } from '@/types';

export const footerLinks: FooterLinks = [
  { id: 1, url: '/', label: 'Get Help' },
  { id: 2, url: '/', label: 'Buy gift cards' },
  { id: 3, url: '/', label: 'Add your restaurant' },
  { id: 4, url: '/', label: 'Sign up to deliver' },
  { id: 5, url: '/', label: 'Create a business account' },
  { id: 6, url: '/', label: 'Promotions' },
];

export const footerMenus: FooterLinks = [
  { id: 1, url: '/', label: 'View all cities' },
  { id: 2, url: '/', label: 'Restaurants near me' },
  { id: 3, url: '/', label: 'View all countries' },
  { id: 4, url: '/', label: 'Pickup near me' },
  { id: 5, url: '/', label: 'About Uber Eats' },
  { id: 6, url: '/', icon: '/svg/language.svg', label: 'English' },
];

export const socials: Socials = [
  { id: 1, url: '/', icon: FacebookIcon },
  { id: 2, url: '/', icon: XIcon },
  { id: 3, url: '/', icon: InstagramIcon },
  { id: 4, url: '/', icon: YouTubeIcon },
];

export const menus: Menus = [
  { id: 1, url: '/', label: 'Privacy Policy' },
  { id: 2, url: '/', label: 'Terms' },
  { id: 3, url: '/', label: 'Pricing' },
  { id: 4, url: '/', label: 'Do not sell or share my personal information' },
];

export const features: FeaturesType = [
  {
    id: 1,
    icon: SiCodechef,
    title: 'Tropical atmosphere',
    desc: 'Our restaurant offers an amazing dining atmosphere for you and your guests.',
  },
  {
    id: 2,
    icon: LocalDiningIcon,
    title: 'Delicious food',
    desc: 'Our foods are carefully sourced and prepared for the nourishment of everyone',
  },
  {
    id: 3,
    icon: RoomServiceIcon,
    title: 'Fast delivery',
    desc: 'Get the best customer service experience with your orders at any time',
  },
];

export const cardMenus: CardMenu = [
  {
    id: 1,
    name: 'Double grilled chicken burger',
    image: '/img/hero.png',
    price: 26000,
  },
  {
    id: 2,
    name: 'Grilled Chicken Burger',
    image: '/img/hero.png',
    price: 23500,
  },
  {
    id: 3,
    name: 'A crunchy chicken',
    image: '/img/hero.png',
    price: 30000,
  },
  {
    id: 4,
    name: 'Breakfast burger',
    image: '/img/hero.png',
    price: 13000,
  },
  {
    id: 5,
    name: 'Double beef & fries',
    image: '/img/hero.png',
    price: 37000,
  },
  {
    id: 6,
    name: 'Single beef burger',
    image: '/img/hero.png',
    price: 12700,
  },
  {
    id: 7,
    name: 'Double beef burger',
    image: '/img/hero.png',
    price: 16000,
  },
  {
    id: 8,
    name: 'Single beef & fries',
    image: '/img/hero.png',
    price: 27499,
  },
  {
    id: 9,
    name: 'Double crunchy chicken burger',
    image: '/img/hero.png',
    price: 21999,
  },
  {
    id: 10,
    name: 'Crunchy chicken burger',
    image: '/img/hero.png',
    price: 13999,
  },
  {
    id: 11,
    name: 'A double crunchy and fries',
    image: '/img/hero.png',
    price: 23499,
  },
  {
    id: 12,
    name: 'Double crunchy X fries',
    image: '/img/hero.png',
    price: 29999,
  },
];

export const products: CardMenu = [
  {
    id: 1,
    name: 'Double grilled chicken burger',
    image: '/img/hero.png',
    price: 26000,
  },
  {
    id: 2,
    name: 'Grilled Chicken Burger',
    image: '/img/hero.png',
    price: 23500,
  },
  {
    id: 3,
    name: 'A crunchy chicken',
    image: '/img/hero.png',
    price: 30000,
  },
  {
    id: 4,
    name: 'Breakfast burger',
    image: '/img/hero.png',
    price: 13000,
  },
  {
    id: 5,
    name: 'Double beef & fries',
    image: '/img/hero.png',
    price: 37000,
  },
  {
    id: 6,
    name: 'Single beef burger',
    image: '/img/hero.png',
    price: 12700,
  },
  {
    id: 7,
    name: 'Double beef burger',
    image: '/img/hero.png',
    price: 16000,
  },
  {
    id: 8,
    name: 'Single beef & fries',
    image: '/img/hero.png',
    price: 27499,
  },
  {
    id: 9,
    name: 'Double crunchy chicken burger',
    image: '/img/hero.png',
    price: 21999,
  },
  {
    id: 10,
    name: 'Crunchy chicken burger',
    image: '/img/hero.png',
    price: 13999,
  },
  {
    id: 11,
    name: 'A double crunchy and fries',
    image: '/img/hero.png',
    price: 23499,
  },
  {
    id: 12,
    name: 'Double crunchy X fries',
    image: '/img/hero.png',
    price: 29999,
  },
];
