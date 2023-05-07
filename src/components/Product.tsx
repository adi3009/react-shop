import {Quantity} from "./product/Quantity";
import {AddToCartButton} from "./product/AddToCartButton";
import {useState} from "react";
import {ProductInterface} from "types";

type Props = {
    product: ProductInterface
}

export function Product({product}: Props) {
    const {name, sku, price} = product;
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (q: number) => setQuantity(q);

    return (
        <>
            <h1>{name}</h1>
            <h4>{sku}</h4>
            <div data-testid="product-price">£{price}</div>
            <Quantity onChange={handleQuantityChange}/>
            <AddToCartButton product={product} quantity={quantity}/>
        </>
    );
}