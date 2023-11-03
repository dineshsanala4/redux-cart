import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={{
                price: item.price,
                quantity: item.quantity,
                total: item.total,
                title: item.name,
                id: item.id,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
