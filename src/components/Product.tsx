import {Quantity} from "./product/Quantity";

type ProductProps = {
    name: string,
    price: number
}

export function Product({name, price}: ProductProps) {
    return (
        <>
            <h1>{name}</h1>
            <div data-testid="product-price">£{price}</div>
            <Quantity/>
        </>
    );
}