import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Quantity} from "./Quantity";

test("display initial quantity", () => {
    render(<Quantity/>);

    const defaultQuantity = screen.queryByDisplayValue("1");

    expect(defaultQuantity).toBeTruthy();
});

test("increments quantity", () => {
    render(<Quantity/>);

    const incrButton = screen.getByText("+");
    fireEvent.click(incrButton);
    const quantity = screen.queryByDisplayValue("2");

    expect(quantity).toBeTruthy();
});

test("decrements quantity", () => {
    render(<Quantity />);

    const incrButton = screen.getByText("+");
    fireEvent.click(incrButton);
    const decrButton = screen.getByText("-");
    fireEvent.click(decrButton);
    const quantity = screen.queryByDisplayValue("1");

    expect(quantity).toBeInTheDocument();
});

test ("quantity can not be less than 1", () => {
    render(<Quantity/>);

    const decrButton = screen.getByText("-");
    fireEvent.click(decrButton);
    const quantity = screen.queryByDisplayValue("0");

    expect(quantity).not.toBeInTheDocument();
})