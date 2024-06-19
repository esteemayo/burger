import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SiCodechef } from 'react-icons/si';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import {
  AccountCardType,
  AuthLinkType,
  CardMenu,
  CartType,
  ColumnType,
  FeaturesType,
  FooterLinks,
  Menus,
  OrderType,
  ProfileMenu,
  RelatedProductType,
  ReviewType,
  SingleOrderType,
  Socials,
  UserLinkType,
} from '@/types';

export const authLinks: AuthLinkType = [
  {
    id: 1,
    url: '/login',
    icon: 'signin',
    label: 'Login',
    urlName: 'loginLink',
    imgName: 'loginLogo',
  },
  {
    id: 2,
    url: '/register',
    icon: 'signup',
    label: 'Register',
    urlName: 'registerLink',
    imgName: 'registerLogo',
  },
];

export const userLinks: UserLinkType = [
  {
    id: 1,
    url: '/orders',
    icon: 'shopping-cart',
    label: 'Upcoming orders',
  },
  {
    id: 2,
    url: '/profile',
    icon: 'user',
    label: 'Account',
  },
];

export const cart: CartType = [
  {
    id: '1',
    name: 'Breakfast burger',
    desc: '',
    image: '/img/burger-4.jpg',
    price: 13000,
    ingredients: ['butter', 'flour', 'meat'],
    quantity: 1,
    isFeatured: true,
    likes: [],
    ratingsAverage: 4.5,
    ratingsQuantity: 3,
    createdAt: '',
  },
  {
    id: '2',
    name: 'Double beef & fries',
    desc: '',
    image: '/img/burger-5.jpg',
    price: 37000,
    ingredients: ['beef', 'fries', 'butter', 'flour'],
    quantity: 1,
    isFeatured: true,
    likes: [],
    ratingsAverage: 4,
    ratingsQuantity: 2,
    createdAt: '',
  },
  {
    id: '3',
    name: 'Single beef burger',
    desc: '',
    image: '/img/burger-6.jpg',
    price: 12700,
    ingredients: ['butter', 'beef', 'flour', 'butter'],
    quantity: 1,
    isFeatured: true,
    likes: [],
    ratingsAverage: 5,
    ratingsQuantity: 1,
    createdAt: '',
  },
];

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
    desc: 'A Double Patty Grilled Chicken Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-1.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 26000,
  },
  {
    id: 2,
    name: 'Grilled Chicken Burger',
    desc: 'Our Single Patty Grilled Chicken Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-2.jpg',
    ingredients: [
      'cheese',
      'tomato',
      'cucumber',
      'lettuce',
      'onions',
      'flour',
      'chicken',
    ],
    price: 23500,
  },
  {
    id: 3,
    name: 'A crunchy chicken',
    desc: 'Our "A Crunchy Chicken" Is Prepared With The Best Quality Of Burger buns and chicken That Gives A Great Taste And Texture plus our chicken patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-3.jpg',
    ingredients: ['olive oil', 'garlic', 'lemon', ' spices', 'flour'],
    price: 30000,
  },
  {
    id: 4,
    name: 'Breakfast burger',
    desc: 'Our Breakfast Burger with cheese, tomato, cucumber, lettuce and caramelized onions topped with lettuce, tomatoes and spicy mayo are super crispy and the most delicious!',
    image: '/img/burger-4.jpg',
    ingredients: [
      'cheese',
      'tomato',
      'cucumber',
      'lettuce',
      'onions',
      'spicy mayo',
    ],
    price: 13000,
  },
  {
    id: 5,
    name: 'Double Beef X Fries',
    desc: 'Our "Double beef x fries" Is Prepared With The Best Quality Of Burger buns and beef That Gives A Great Taste And Texture plus our beef patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-5.jpg',
    ingredients: ['lemon', 'spicies', 'garlic', 'olive oil', 'chips'],
    price: 37000,
  },
  {
    id: 6,
    name: 'Single beef burger',
    desc: 'Our "Single Beef Burger" Is Prepared With The Best Quality Of Burger buns and beef That Gives A Great Taste And Texture plus our beef patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-6.jpg',
    ingredients: ['spicies', 'tomato', 'flour', 'lettuce', 'garlic'],
    price: 10999,
  },
  {
    id: 7,
    name: 'Double beef burger',
    desc: 'Our "Double Beef Burger" Is Prepared With The Best Quality Of Burger buns and beef That Gives A Great Taste And Texture plus our beef patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-7.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 15999,
  },
  {
    id: 8,
    name: 'Single beef & fries',
    desc: "Our Single Beef & Fries Burger are specially curated to let you shake things up a lil bit and let's the Bite from every burger hit hard.",
    image: '/img/burger-8.jpg',
    ingredients: ['cheese', 'beef', 'onions', 'parsley'],
    price: 27499,
  },
  {
    id: 9,
    name: 'Double Crunchy Chicken Burger',
    desc: 'Our "Double Crunchy Chicken Burger" Is Prepared With The Best Quality Of Burger buns and chicken That Gives A Great Taste And Texture plus our chicken patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-9.jpg',
    ingredients: ['garlic', 'olive oil', 'parsley', 'spicies'],
    price: 21999,
  },
  {
    id: 10,
    name: 'Crunchy Chicken Burger',
    desc: 'Our "Crunchy Chicken Burger" Is Prepared With The Best Quality Of Burger buns and chicken That Gives A Great Taste And Texture plus our chicken patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-10.jpg',
    ingredients: ['flour', 'parsley', 'chicken', 'lettuce', 'onions'],
    price: 13999,
  },
  {
    id: 11,
    name: 'A Double Crunchy X Fries',
    desc: 'Our Double Crunchy Chicken x Fries are ultra crispy and absolutely bursting with flavour topped with fresh lettuce , cucumbers, Onions, our special sauce and cheese! Its an absolute crowd pleaser',
    image: '/img/burger-11.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 21499,
  },
  {
    id: 12,
    name: 'Double Crunchy Chicken X Fries',
    desc: 'Our Double Crunchy Chicken x Fries are ultra crispy and absolutely bursting with flavour topped with fresh lettuce , cucumbers, Onions, our special sauce and cheese! Its an absolute crowd pleaser',
    image: '/img/burger-12.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 21999,
  },
];

export const products: CardMenu = [
  {
    id: 1,
    name: 'Double grilled chicken burger',
    desc: 'A Double Patty Grilled Chicken Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-1.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 26000,
  },
  {
    id: 2,
    name: 'Grilled Chicken Burger',
    desc: 'Our Single Patty Grilled Chicken Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-2.jpg',
    ingredients: [
      'cheese',
      'tomato',
      'cucumber',
      'lettuce',
      'onions',
      'flour',
      'chicken',
    ],
    price: 23500,
  },
  {
    id: 3,
    name: 'A crunchy chicken',
    desc: 'Our "A Crunchy Chicken" Is Prepared With The Best Quality Of Burger buns and chicken That Gives A Great Taste And Texture plus our chicken patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-3.jpg',
    ingredients: ['olive oil', 'garlic', 'lemon', ' spices', 'flour'],
    price: 30000,
  },
  {
    id: 4,
    name: 'Breakfast burger',
    desc: 'Our Breakfast Burger with cheese, tomato, cucumber, lettuce and caramelized onions topped with lettuce, tomatoes and spicy mayo are super crispy and the most delicious!',
    image: '/img/burger-4.jpg',
    ingredients: [
      'cheese',
      'tomato',
      'cucumber',
      'lettuce',
      'onions',
      'spicy mayo',
    ],
    price: 13000,
  },
  {
    id: 5,
    name: 'Double Beef X Fries',
    desc: 'Our "Double beef x fries" Is Prepared With The Best Quality Of Burger buns and beef That Gives A Great Taste And Texture plus our beef patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-5.jpg',
    ingredients: ['lemon', 'spicies', 'garlic', 'olive oil', 'chips'],
    price: 37000,
  },
  {
    id: 6,
    name: 'Single beef burger',
    desc: 'Our "Single Beef Burger" Is Prepared With The Best Quality Of Burger buns and beef That Gives A Great Taste And Texture plus our beef patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-6.jpg',
    ingredients: ['spicies', 'tomato', 'flour', 'lettuce', 'garlic'],
    price: 10999,
  },
  {
    id: 7,
    name: 'Double beef burger',
    desc: 'Our "Double Beef Burger" Is Prepared With The Best Quality Of Burger buns and beef That Gives A Great Taste And Texture plus our beef patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-7.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 15999,
  },
  {
    id: 8,
    name: 'Single beef & fries',
    desc: "Our Single Beef & Fries Burger are specially curated to let you shake things up a lil bit and let's the Bite from every burger hit hard.",
    image: '/img/burger-8.jpg',
    ingredients: ['cheese', 'beef', 'onions', 'parsley'],
    price: 27499,
  },
  {
    id: 9,
    name: 'Double Crunchy Chicken Burger',
    desc: 'Our "Double Crunchy Chicken Burger" Is Prepared With The Best Quality Of Burger buns and chicken That Gives A Great Taste And Texture plus our chicken patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-9.jpg',
    ingredients: ['garlic', 'olive oil', 'parsley', 'spicies'],
    price: 21999,
  },
  {
    id: 10,
    name: 'Crunchy Chicken Burger',
    desc: 'Our "Crunchy Chicken Burger" Is Prepared With The Best Quality Of Burger buns and chicken That Gives A Great Taste And Texture plus our chicken patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-10.jpg',
    ingredients: ['flour', 'parsley', 'chicken', 'lettuce', 'onions'],
    price: 13999,
  },
  {
    id: 11,
    name: 'A Double Crunchy X Fries',
    desc: 'Our Double Crunchy Chicken x Fries are ultra crispy and absolutely bursting with flavour topped with fresh lettuce , cucumbers, Onions, our special sauce and cheese! Its an absolute crowd pleaser',
    image: '/img/burger-11.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 21499,
  },
  {
    id: 12,
    name: 'Double Crunchy Chicken X fries',
    desc: 'Our Double Crunchy chicken x Fries are ultra crispy and absolutely bursting with flavour topped with fresh lettuce , cucumbers, Onions, our special sauce and cheese! Its an absolute crowd pleaser',
    image: '/img/burger-12.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 21999,
  },
  {
    id: 13,
    name: '10X Chicken Nugget',
    desc: 'Our 10x Chicken Nugget are ultra crispy and absolutely bursting with flavour topped with fresh lettuce , cucumbers, Onions, our special sauce and cheese! Its an absolute crowd pleaser',
    image: '/img/burger-13.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'chicken', 'garlic'],
    price: 9999,
  },
  {
    id: 14,
    name: '5X Chicken Nugget',
    desc: 'Our 5x Chicken Nugget are ultra crispy and absolutely bursting with flavour topped with fresh lettuce , cucumbers, Onions, our special sauce and cheese! Its an absolute crowd pleaser',
    image: '/img/burger-14.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'chicken', 'garlic'],
    price: 5999,
  },
  {
    id: 15,
    name: '3X Crunchy Burger',
    desc: 'Our 3x Crunchy Burger are ultra crispy and absolutely bursting with flavour topped with fresh lettuce , cucumbers, Onions, our special sauce and cheese! Its an absolute crowd pleaser',
    image: '/img/burger-15.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 7499,
  },
  {
    id: 16,
    name: 'Crunchy Chicken X2',
    desc: 'A Double Patty Crunchy Chicken x2 Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-16.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 9499,
  },
  {
    id: 17,
    name: 'Single Chicken Burger',
    desc: 'A Single Chicken Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-22.jpg',
    ingredients: [
      'cheese',
      'tomato',
      'cucumber',
      'lettuce',
      'onions',
      'spicy mayo',
    ],
    price: 11999,
  },
  {
    id: 18,
    name: 'A Double Chicken Burger',
    desc: 'A Double Patty A Double Chicken Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-18.jpg',
    ingredients: [
      'cheese',
      'tomato',
      'cucumber',
      'lettuce',
      'onions',
      'spicies',
    ],
    price: 15999,
  },
  {
    id: 19,
    name: 'Crunchy Beef Burger',
    desc: 'A Double Patty Crunchy Beef Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-19.jpg',
    ingredients: ['beef', 'cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 5499,
  },
  {
    id: 20,
    name: 'Crunchy Beef Burger X2',
    desc: 'A Double Patty Crunchy Beef x2 Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-20.jpg',
    ingredients: [
      'cheese',
      'tomato',
      'cucumber',
      'lettuce',
      'onions',
      'spicies',
    ],
    price: 8999,
  },
  {
    id: 21,
    name: 'Single Chicken X Fries',
    desc: 'Our Single Patty Single Chicken x Fries Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
    image: '/img/burger-21.jpg',
    ingredients: ['chicken', 'spicies', 'flour', 'lettuce', 'garlic'],
    price: 7999,
  },
];

export const relatedProducts: RelatedProductType = [
  {
    id: 1,
    name: 'Double Crunchy Chicken Burger',
    desc: 'Our "Double Crunchy Chicken Burger" Is Prepared With The Best Quality Of Burger buns and chicken That Gives A Great Taste And Texture plus our chicken patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-1.jpg',
    ingredients: ['garlic', 'olive oil', 'parsley', 'spicies'],
    price: 21999,
  },
  {
    id: 2,
    name: 'Crunchy Chicken Burger',
    desc: 'Our "Crunchy Chicken Burger" Is Prepared With The Best Quality Of Burger buns and chicken That Gives A Great Taste And Texture plus our chicken patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
    image: '/img/burger-2.jpg',
    ingredients: ['flour', 'parsley', 'chicken', 'lettuce', 'onions'],
    price: 13999,
  },
  {
    id: 3,
    name: 'A Double Crunchy X Fries',
    desc: 'Our Double Crunchy Chicken x Fries are ultra crispy and absolutely bursting with flavour topped with fresh lettuce , cucumbers, Onions, our special sauce and cheese! Its an absolute crowd pleaser',
    image: '/img/burger-3.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
    price: 21499,
  },
  {
    id: 4,
    name: 'Double Crunchy X fries',
    desc: 'Our Double Crunchy chicken x fries are ultra crispy and absolutely bursting with flavour topped with fresh lettuce , cucumbers, Onions, our special sauce and cheese! Its an absolute crowd pleaser',
    image: '/img/burger-4.jpg',
    ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
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
    label: 'top',
    links: [
      { id: 1, url: '/', icon: 'credit-card', label: 'My orders' },
      { id: 2, url: '/profile', icon: 'user', label: 'Personal info' },
      { id: 3, url: '/', icon: 'receipt-percent', label: 'Coupons' },
    ],
  },
  {
    label: 'center',
    links: [
      { id: 1, url: '/', icon: 'wallet', label: 'Wallets' },
      { id: 2, url: '/', icon: 'arrows-pointing-out', label: 'Loyalty points' },
      { id: 3, url: '/', icon: 'user-group', label: 'Referral code' },
      { id: 4, url: '/', icon: 'map-pin', label: 'Your address' },
    ],
  },
  {
    label: 'bottom',
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

export const orders: OrderType = [
  {
    id: '2059665',
    name: 'Double Crunchy Chicken Burger',
    price: 199.99,
    products: [
      {
        id: '1',
        name: 'Double grilled chicken burger',
        desc: 'A Double Patty Grilled Chicken Burger with cheese, tomato, cucumber, lettuce and caramelized onions, Topped with lettuce, tomatoes, cheese and spicy mayo, they are the most delicious, easy dinner and a guaranteed crowd pleaser. Unlike ground chicken burgers that require chicken patties made with ground chicken (or ground turkey), bread crumbs, etc. these juicy chicken burgers need only a handful of ingredients and can be made in a fraction of the time. The chicken is marinated in an aromatic mixture of olive oil, garlic, lemon and spices.',
        image: '/img/burger-1.jpg',
        ingredients: ['cheese', 'tomato', 'cucumber', 'lettuce', 'onions'],
        price: 26000,
        isFeatured: true,
        quantity: 1,
        ratingsAverage: 4.5,
        ratingsQuantity: 3,
        createdAt: '',
      },
    ],
    status: 'preparing',
    createdAt: '2024-04-15T18:18:46.712+00:00',
  },
  {
    id: '2059667',
    name: 'Double crunchy X fries',
    price: 299.99,
    products: [
      {
        id: '3',
        name: 'A crunchy chicken',
        desc: 'Our "A Crunchy Chicken" Is Prepared With The Best Quality Of Burger buns and chicken That Gives A Great Taste And Texture plus our chicken patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
        image: '/img/burger-3.jpg',
        ingredients: ['olive oil', 'garlic', 'lemon', ' spices', 'flour'],
        price: 30000,
        isFeatured: false,
        quantity: 2,
        ratingsAverage: 4,
        ratingsQuantity: 2,
        createdAt: '',
      },
    ],
    status: 'on the way',
    createdAt: '2024-04-15T18:25:35.069+00:00',
  },
  {
    id: '2059669',
    name: 'Double grilled chicken burger',
    price: 399.99,
    products: [
      {
        id: '5',
        name: 'Double Beef X Fries',
        desc: 'Our "Double beef x fries" Is Prepared With The Best Quality Of Burger buns and beef That Gives A Great Taste And Texture plus our beef patty is marinated in an aromatic mixture of olive oil, garlic, lemon and spices that wakes you up once you take a bite!',
        image: '/img/burger-5.jpg',
        ingredients: ['lemon', 'spicies', 'garlic', 'olive oil', 'chips'],
        price: 37000,
        isFeatured: false,
        quantity: 1,
        ratingsAverage: 5,
        ratingsQuantity: 1,
        createdAt: '',
      },
    ],
    status: 'delivered',
    createdAt: '2024-04-15T18:26:11.725+00:00',
  },
];

export const order: SingleOrderType = {
  id: 2059665,
  name: 'Emmanuel Adebayo',
  address: 'No 10, Twins street, off ijesha road, surulere lagos, Lagos state',
  total: 199.99,
  createdAt: '2024-04-22T18:18:46.712+00:00',
  deliveryDate: '2024-04-27T18:18:46.712+00:00',
};

export const orderColumns: ColumnType = [
  {
    path: 'id',
    label: 'Order ID',
  },
  {
    path: 'createdAt',
    label: 'Date',
  },
  {
    path: 'price',
    label: 'Price',
  },
  {
    path: 'products',
    label: 'Products',
  },
  {
    path: 'status',
    label: 'Status',
  },
];
