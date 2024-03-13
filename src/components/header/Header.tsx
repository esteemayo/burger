import Image from 'next/image';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <h1>Search</h1>
        <div className='search'>
          <div className='searchInput'>
            <Image
              src='/img/search.png'
              width={20}
              height={20}
              alt='search icon'
              className='searchIcon'
            />
            <input type='text' className='search' placeholder='Search burger...' />
          </div>
          <button className='searchBtn'>Find burger</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
