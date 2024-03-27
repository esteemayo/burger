import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SiCodechef } from 'react-icons/si';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import {
  AccountCardType,
  CardMenu,
  FeaturesType,
  FooterLinks,
  Menus,
  ProfileMenu,
  RelatedProductType,
  ReviewType,
  Socials,
} from '@/types';

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
    image: '/img/burger-1.jpg',
    price: 26000,
  },
  {
    id: 2,
    name: 'Grilled Chicken Burger',
    image: '/img/burger-2.jpg',
    price: 23500,
  },
  {
    id: 3,
    name: 'A crunchy chicken',
    image: '/img/burger-3.jpg',
    price: 30000,
  },
  {
    id: 4,
    name: 'Breakfast burger',
    image: '/img/burger-4.jpg',
    price: 13000,
  },
  {
    id: 5,
    name: 'Double beef & fries',
    image: '/img/burger-5.jpg',
    price: 37000,
  },
  {
    id: 6,
    name: 'Single beef burger',
    image: '/img/burger-6.jpg',
    price: 12700,
  },
  {
    id: 7,
    name: 'Double beef burger',
    image: '/img/burger-7.jpg',
    price: 16000,
  },
  {
    id: 8,
    name: 'Single beef & fries',
    image: '/img/burger-8.jpg',
    price: 27499,
  },
  {
    id: 9,
    name: 'Double crunchy chicken burger',
    image: '/img/burger-9.jpg',
    price: 21999,
  },
  {
    id: 10,
    name: 'Crunchy chicken burger',
    image: '/img/burger-10.jpg',
    price: 13999,
  },
  {
    id: 11,
    name: 'A double crunchy and fries',
    image: '/img/burger-11.jpg',
    price: 23499,
  },
  {
    id: 12,
    name: 'Double crunchy X fries',
    image: '/img/burger-12.jpg',
    price: 29999,
  },
];

export const products: CardMenu = [
  {
    id: 1,
    name: 'Double grilled chicken burger',
    image: '/img/burger-1.jpg',
    price: 26000,
  },
  {
    id: 2,
    name: 'Grilled Chicken Burger',
    image: '/img/burger-2.jpg',
    price: 23500,
  },
  {
    id: 3,
    name: 'A crunchy chicken',
    image: '/img/burger-3.jpg',
    price: 30000,
  },
  {
    id: 4,
    name: 'Breakfast burger',
    image: '/img/burger-4.jpg',
    price: 13000,
  },
  {
    id: 5,
    name: 'Double beef & fries',
    image: '/img/burger-5.jpg',
    price: 37000,
  },
  {
    id: 6,
    name: 'Single beef burger',
    image: '/img/burger-6.jpg',
    price: 12700,
  },
  {
    id: 7,
    name: 'Double beef burger',
    image: '/img/burger-7.jpg',
    price: 16000,
  },
  {
    id: 8,
    name: 'Single beef & fries',
    image: '/img/burger-8.jpg',
    price: 27499,
  },
  {
    id: 9,
    name: 'Double crunchy chicken burger',
    image: '/img/burger-9.jpg',
    price: 21999,
  },
  {
    id: 10,
    name: 'Crunchy chicken burger',
    image: '/img/burger-10.jpg',
    price: 13999,
  },
  {
    id: 11,
    name: 'A double crunchy and fries',
    image: '/img/burger-11.jpg',
    price: 23499,
  },
  {
    id: 12,
    name: 'Double crunchy X fries',
    image: '/img/burger-12.jpg',
    price: 29999,
  },
];

export const relatedProducts: RelatedProductType = [
  {
    id: 1,
    name: 'Crunchy chicken burger',
    image: '/img/burger-1.jpg',
    price: 13999,
  },
  {
    id: 2,
    name: 'A double crunchy and fries',
    image: '/img/burger-2.jpg',
    price: 23499,
  },
  {
    id: 3,
    name: 'Double crunchy X fries',
    image: '/img/burger-3.jpg',
    price: 29999,
  },
  {
    id: 4,
    name: 'Double crunchy chicken burger',
    image: '/img/burger-4.jpg',
    price: 21999,
  },
];

export const reviews: ReviewType = [
  {
    id: 1,
    desc: 'Looks so delicious...',
    rating: 5,
    user: {
      name: 'Emmanuel Adebayo',
      image: '/svg/male-avatar.svg',
    },
  },
  {
    id: 2,
    desc: 'The best burger i have had in a very long time.',
    rating: 5,
    user: {
      name: 'Lourdes Browning',
      image: '/svg/female-avatar.svg',
    },
  },
  {
    id: 3,
    desc: 'Crispy and delicious...love it!',
    rating: 4,
    user: {
      name: 'Christian Vega',
      image: '/svg/male-avatar.svg',
    },
  },
];

export const profileMenu: ProfileMenu = [
  {
    links: [
      { id: 1, url: '/', icon: 'credit-card', label: 'My orders' },
      { id: 2, url: '/', icon: 'user', label: 'Personal info' },
      { id: 3, url: '/', icon: 'receipt-percent', label: 'Coupons' },
    ],
  },
  {
    links: [
      { id: 1, url: '/', icon: 'wallet', label: 'Wallets' },
      { id: 2, url: '/', icon: 'arrows-pointing-out', label: 'Loyalty points' },
      { id: 3, url: '/', icon: 'wifi', label: 'Referral code' },
      { id: 4, url: '/', icon: 'map-pin', label: 'Your address' },
    ],
  },
  {
    links: [{ id: 1, url: '/', icon: 'cog-8-tooth', label: 'Settings' }],
  },
];

export const accountCards: AccountCardType = [
  {
    id: 1,
    count: 461,
    label: 'Days Since Joining',
    icon: '/svg/clock.svg',
  },
  {
    id: 2,
    price: 0.0,
    label: 'Amount in Wallet',
    icon: '/svg/wallet.svg',
  },
  {
    id: 3,
    count: 12,
    label: 'Orders',
    icon: '/svg/credit-card.svg',
  },
  {
    id: 4,
    count: 157,
    label: 'Loyalty Points',
    icon: '/svg/arrows-pointing-in.svg',
  },
];
