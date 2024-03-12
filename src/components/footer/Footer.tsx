import Link from 'next/link';
import Image from 'next/image';

import Logo from '../logo/Logo';
import { footerLinks } from '@/data';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <div className='top'>
          <div className='left'>
            <div className=''>
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
          </div>
        </div>
        <div className='bottom'></div>
      </div>
    </footer>
  );
};

export default Footer;
