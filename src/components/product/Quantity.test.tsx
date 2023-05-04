import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Quantity} from "./Quantity";

let handleQuantityChange: (quantity: number) => any;

beforeEach(() => {
    handleQuantityChange = jest.fn();
});

test("display initial quantity", () => {
    render(<Quantity onChange={handleQuantityChange}/>);

    const defaultQuantity = screen.queryByDisplayValue("1");

    expect(defaultQuantity).toBeTruthy();
});

test("increments quantity", () => {
    render(<Quantity onChange={handleQuantityChange}/>);

    const incrButton = screen.getByText("+");
    fireEvent.click(incrButton);
    const quantity = screen.queryByDisplayValue("2");

    expect(quantity).toBeTruthy();
});

test("decrements quantity", () => {
    render(<Quantity onChange={handleQuantityChange}/>);

    const incrButton = screen.getByText("+");
    fireEvent.click(incrButton);
    const decrButton = screen.getByText("-");
    fireEvent.click(decrButton);
    const quantity = screen.queryByDisplayValue("1");

    expect(quantity).toBeInTheDocument();
});

test ("quantity can not be less than 1", () => {
    render(<Quantity onChange={handleQuantityChange}/>);

    const decrButton = screen.getByText("-");
    fireEvent.click(decrButton);
    const quantity = screen.queryByDisplayValue("0");

    expect(quantity).not.toBeInTheDocument();
});

test ("calls passed event handler function", () => {
   render(<Quantity onChange={handleQuantityChange}/>);
   const incrButton = screen.getByText("+");
   const decrButton = screen.getByText("-");

   fireEvent.click(incrButton);
   fireEvent.click(decrButton);

   expect(handleQuantityChange).toHaveBeenCalledTimes(2);
});