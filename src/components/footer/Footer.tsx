import Link from 'next/link';
import Image from 'next/image';

import Logo from '../logo/Logo';
import { footerLinks, footerMenus, menus, socials } from '@/data';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='top'>
          <div className='left'>
            <div className='logoBox'>
              <Logo />
              <div className='download'>
                <Image
                  src='/svg/app-store.svg'
                  width={135}
                  height={40}
                  alt='app store'
                />
                <Image
                  src='/img/google-play.png'
                  width={135}
                  height={40}
                  alt='google play store'
                />
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='links'>
              {footerLinks.map((link) => {
                const { id, url, label } = link;
                return (
                  <Link key={id} href={url}>
                    {label}
                  </Link>
                );
              })}
            </div>
            <div className='links'>
              {footerMenus.map((link) => {
                const { id, url, label } = link;
                return (
                  <Link key={id} href={url}>
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className='bottom'>
          <div className='left'>
            <h6>Follow us</h6>
            <ul className='socials'>
              {socials.map((item) => {
                const { id, url, icon: Icon } = item;
                return (
                  <li key={id}>
                    <Link href={url}>
                      <Icon />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='right'>
            <div className='menus'>
              {menus.map((menu) => {
                const { id, url, label } = menu;
                return (
                  <Link key={id} href={url}>
                    {label}
                  </Link>
                );
              })}
            </div>
            <div className='security'>
              This site is protected by reCAPTCHA and the Google{' '}
              <Link href='/'>Privacy Policy</Link> and{' '}
              <Link href='/'>Terms of Service</Link> apply.
              <div>© 2024 Burger Technologies Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
