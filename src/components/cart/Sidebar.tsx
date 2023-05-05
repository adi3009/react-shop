import {deleteProduct, emptyCart, useCart, useCartDispatch} from "../../reducers/cartReducer";
import {calculateCartTotal} from "./totalCalculator";

export function Sidebar() {
    const cart = useCart();

    const cartDispatch = useCartDispatch();

    let total = cart !== null ? calculateCartTotal(cart?.items) : 0;

    const handleRemoveItem = (sku: string) => {
        cartDispatch?.(deleteProduct(sku));
    }

    const handleEmptyCart = () => {
        cartDispatch?.(emptyCart());
    }

    return (
      <>
          <h2>Cart</h2>
          <ul>
              {cart?.items.map(item => (
                  <li key={item.sku}>
                      <h4>{item.name}</h4>
                      <p>{item.sku}</p>
                      <p>{item.quantity}</p>
                      <button onClick={(e) => handleRemoveItem(item.sku) }>Remove</button>
                  </li>
              ))}
          </ul>
          <div data-testid="total">
              Total - £{total}
          </div>
          <div>
              <button onClick={handleEmptyCart}>Empty cart</button>
          </div>
      </>
    );
}