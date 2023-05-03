import {useState} from "react";

export function Quantity() {

    const [value, setValue] = useState(1);

    const increase = () => setValue(value + 1);

    const decrease = () => value > 1 && setValue(value - 1);

    return (<>
        <button type="button" onClick={decrease}>-</button>
        <input type="number" value={value} readOnly/>
        <button type="button" onClick={increase}>+</button>
    </>);
}