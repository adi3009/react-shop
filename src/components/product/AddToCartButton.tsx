import {useState} from "react";

type Props = {
    quantity: number
}

export function AddToCartButton({quantity}: Props) {

    const [inCart, setInCart] = useState(0);

    const handleClick = () => setInCart(prev => prev + quantity);

    return (
        <>
            <button onClick={handleClick}>Add To Cart</button>
            <p>{inCart} in Cart</p>
        </>
    );
}