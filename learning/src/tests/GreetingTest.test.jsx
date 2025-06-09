import React from "react";
import { render, screen } from "@testing-library/react";
import GreetingTest from "../components/for-tests/GreetingTest";
import {describe, it, expect} from "vitest";
import "@testing-library/jest-dom/vitest";

describe("GreetingTest Component", () => {
   it("renders a default greeting when no name is provided", () => {
    render(<GreetingTest />);
    //Try change what is written in the GreetingTest component
    // to see if the test fails
    const defaultGreetingElement = screen.getByText("Hello, World!");
    expect(defaultGreetingElement).toBeInTheDocument();
  });
  
  it("renders the greeting message with the provided name", () => {
    const name = "Test";

    render(<GreetingTest name={name} />);
    const greetingElement = screen.getByText(`Hello, ${name}!`);
    expect(greetingElement).toBeInTheDocument();
  });

 
});
