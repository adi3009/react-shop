import {useState} from "react";

type Props = {
    onChange: (quantity: number) => any
}

export function Quantity({onChange}: Props) {

    const [value, setValue] = useState(1);

    const increase = () => {
        const newQty = value + 1;
        setValue(newQty);
        onChange(newQty);
    }

    const decrease = () => {
        if (value === 1) {
            return;
        }
        const newQty = value - 1;
        setValue(newQty);
        onChange(newQty);
    }

    return (<>
        <button type="button" onClick={decrease}>-</button>
        <input type="number" value={value} readOnly/>
        <button type="button" onClick={increase}>+</button>
    </>);
}