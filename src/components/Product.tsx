import {Quantity} from "./product/Quantity";
import {AddToCartButton} from "./product/AddToCartButton";
import {useState} from "react";

type ProductProps = {
    name: string,
    price: number
}

export function Product({name, price}: ProductProps) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (q: number) => setQuantity(q);

    return (
        <>
            <h1>{name}</h1>
            <div data-testid="product-price">£{price}</div>
            <Quantity onChange={handleQuantityChange}/>
            <AddToCartButton quantity={quantity}/>
        </>
    );
}