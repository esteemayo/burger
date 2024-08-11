import CartItem from '../cartItem/CartItem';

const CartItems = ({
  products,
  cardClasses,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div className={cardClasses}>
      {products.map((product) => {
        const { id, name, price, quantity } = product;
        return (
          <CartItem
            key={id}
            id={id}
            name={name}
            price={price}
            quantity={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default CartItems;
