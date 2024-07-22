import { RootState } from '../../app/store';
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from './cartSlice';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const handleRemove = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrease = (id: number) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseItemQuantity(id));
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>
                {item.price} x {item.quantity} = {item.price * item.quantity}
              </p>
              <button onClick={() => handleIncrease(item.id)}>+</button>
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: {totalAmount}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
