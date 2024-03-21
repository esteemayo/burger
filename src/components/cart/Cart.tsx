import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import './Cart.scss';

const Cart = () => {
  return (
    <aside className='productCart'>
      <div className='detailBox'>
        <div className='cardWrap'>
          <div className='cardHeading'>Your cart</div>
          <div className='cardBody'>
            <div className='catProduct'>
              <div className='cardBox'>
                <div className='cardProductBox'>
                  <div className='cardProduct'>
                    <div className='cardName'>
                      <p>
                        <span>1</span>
                        Grilled chicken burger
                      </p>
                    </div>
                    <button type='button' className='deleteCardBtn'>
                      <RemoveShoppingCartIcon />
                    </button>
                    <div className='cardPrice'>$11999.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cardFooter'>
            <button type='button'>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
