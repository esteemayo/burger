import './Reviews.scss';

const Reviews = () => {
  return (
    <div className='reviews'>
      <div className='reviewBox'>
        <ul className='listWrap'>
          <li className='listItem active'>Reviews (0)</li>
        </ul>
        <div className='reviewWrap'>
          <div className='reviewContainer'>
            <div className='allReviews'>
              <p>There are no reviews yet.</p>
            </div>
            <div className='reviewFormWrap'>
              <div className='reviewForm'>
                <div className='respond'>
                  <span className='replyTitle'>
                    Be the first to review “Chicken Caesar Salad”
                  </span>
                  <form>
                    <textarea name='review' id='review' cols={30} rows={10} />
                    <div className='inputWrap'>
                      <input type='text' name='name' placeholder='Name' />
                      <input type='email' name='email' placeholder='Email' />
                    </div>
                    <div className='consent'>
                      <p>
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </p>
                      <div>
                        <input type='checkbox' name='consent' id='consent' />
                        <label htmlFor='consent'>
                          Sign me up for the newsletter!
                        </label>
                      </div>
                    </div>
                    <button type='submit'>Submit review</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
