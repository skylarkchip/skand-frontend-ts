import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";
import { act } from "react-dom/test-utils";

let container: HTMLDivElement | any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Home Page", () => {
  it("Should render properly", () => {
    act(() => {
      render(<Home />);
    });
  });
});
