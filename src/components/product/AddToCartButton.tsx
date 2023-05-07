import {ProductInterface} from "types";
import {addProduct, useCart, useCartDispatch} from "reducers/cartReducer";

type Props = {
    product: ProductInterface,
    quantity: number
}

export function AddToCartButton({product, quantity}: Props) {

    const cartState = useCart();

    const cartDispatch = useCartDispatch();

    const itemInCart = cartState?.items.find(item => item.sku === product.sku);

    const inCart = itemInCart ? itemInCart.quantity : 0;

    const handleClick = () => {
        const item = {...product, quantity};
        cartDispatch?.(addProduct(item));
    };

    return (
        <>
            <button onClick={handleClick}>Add To Cart</button>
            {itemInCart && <p>{inCart} in Cart</p>}
        </>
    );
}