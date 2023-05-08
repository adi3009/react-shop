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
            <h2 data-testid="product-name">{name}</h2>
            <h4 data-testid="product-sku">{sku}</h4>
            <div data-testid="product-price">£{price}</div>
            <Quantity onChange={handleQuantityChange}/>
            <AddToCartButton product={product} quantity={quantity}/>
        </>
    );
}