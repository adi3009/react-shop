import {gql, useQuery} from "@apollo/client";
import {ProductInterface} from "types";
import {Product} from "./Product";

export function ProductList() {
    const {loading, error, data} = useQuery(GET_PRODUCTS_QUERY);

    if (loading) {
        return (<div>Loading...</div>);
    }

    if (error) {
        return (<div>Sorry, there is an error.</div>)
    }

    return (
        <div className="product-list">
            <ul>
                {data?.allProducts.map((product: ProductInterface) => <li key={product.sku}>
                    <div data-testid="product-container">
                        <Product product={product}/>
                    </div>
                </li>)}
            </ul>
        </div>
    );
}

export const GET_PRODUCTS_QUERY = gql`
    query GetProducts {
        allProducts {
            name
            sku
            price
        }
    }
`;