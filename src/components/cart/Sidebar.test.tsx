import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Sidebar} from "./Sidebar";
import {
    addProductToTestCartState,
    emptyTestCartState,
    renderWithProvider,
    testState
} from "test-util/testProvider";
import {calculateCartTotal} from "./totalCalculator";

beforeEach(() => {
    addProductToTestCartState();
    addProductToTestCartState();
});

afterEach(() => {
    emptyTestCartState();
});

test("display title", () => {
    render(<Sidebar/>);

    const title = screen.queryByRole("heading", {level: 2});

    expect(title).toHaveTextContent("Cart");
});

test("display items", () => {

    renderWithProvider(<Sidebar/>);

    const item1 = screen.queryByText(testState.items[0].name);

    expect(item1).toBeInTheDocument();
});

test("display total", () => {
    renderWithProvider(<Sidebar/>);

    const totalElement = screen.getByTestId("total");
    let total = calculateCartTotal(testState.items);

    expect(totalElement).toHaveTextContent(`Total - £${total}`);
});

test("remove item from cart", () => {
   renderWithProvider(<Sidebar/>);

   const removeButtons = screen.getAllByText("Remove");
   fireEvent.click(removeButtons[0]);
   const item1 = screen.queryByText(testState.items[0].name);

   expect(item1).not.toBeInTheDocument();
});

test("empty cart", () => {
   renderWithProvider(<Sidebar/>);

   const emptyButton = screen.getByText("Empty cart");
   fireEvent.click(emptyButton);
   const totalElem = screen.getByTestId("total");

   expect(totalElem).toHaveTextContent(`Total - £0`);
});