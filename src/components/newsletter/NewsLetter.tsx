import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import './NewsLetter.scss';

const NewsLetter = () => {
  return (
    <section className='newsLetter'>
      <div className='container'>
        <div className='textWrap'>
          <div className='headingWrap'>
            <EmailOutlinedIcon />
            <h5>Subscribe to special offers</h5>
          </div>
        </div>
        <div className='formWrap'>
          <form>
            <input type='text' placeholder='Your email address' />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
