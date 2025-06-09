import React from "react";
import { render, screen } from "@testing-library/react";
import {describe, it, expect} from "vitest";
import "@testing-library/jest-dom/vitest";
import CounterTest from "../components/for-tests/CounterTest";
import userEvent from "@testing-library/user-event";

describe("CounterTest Component", () => {

  it("Test the count when a button is clicked", async () => {

    render(<CounterTest />);
    const buttonIncrement= screen.getByRole("button", {name: /Increment/i} );
    const buttonDecrement = screen.getByRole("button", {name: /Decrement/i});
    const buttonReset = screen.getByRole("button", {name: /Reset/i});

    
    const counterValue = screen.getByTestId ("counter-value");
    expect(counterValue.textContent).toEqual("0");

    await userEvent.click(buttonIncrement); 
    expect(counterValue.textContent).toEqual("1");

    await userEvent.click(buttonIncrement);
    expect(counterValue.textContent).toEqual("2");  

    await userEvent.click(buttonDecrement);
    expect(counterValue.textContent).toEqual("1");

    await userEvent.click(buttonIncrement);
    expect(counterValue.textContent).toEqual("2");  

    await userEvent.click(buttonReset);
    expect(counterValue.textContent).toEqual("0");

  });

});
