import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SiCodechef } from 'react-icons/si';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import { FeaturesType, FooterLinks, Menus, Socials } from '@/types';

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
