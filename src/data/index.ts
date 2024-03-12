import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { FooterLinks, Socials } from '@/types';

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
  { id: 6, url: '/', label: 'English' },
];

export const socials: Socials = [
  { id: 1, icon: FacebookIcon },
  { id: 2, icon: XIcon },
  { id: 3, icon: InstagramIcon },
  { id: 4, icon: YouTubeIcon },
];
