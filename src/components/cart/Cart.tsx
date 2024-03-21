import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                <div className='cardProductWrap'>
                  <div className='cardProduct'>
                    <div className='cardName'>
                      <p>
                        <span>1</span>
                        Grilled chicken burger
                      </p>
                    </div>
                    <div className='cardButtons'>
                      <button type='button'>
                        <ExpandMoreIcon />
                      </button>
                      <button type='button'>
                        <ExpandLessIcon />
                      </button>
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
