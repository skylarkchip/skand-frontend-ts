import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Component
import InputField from "@/components/ui/input/input-field.component";

describe("InputField", () => {
  test("renders without issues", () => {
    const { getByRole } = render(
      <InputField
        inputType="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        onChange={() => {}}
        value=""
      />
    );

    const inputEl = getByRole("textbox");
    expect(inputEl).toBeInTheDocument();
  });

  test("displays error style when hasError is true", () => {
    const { getByRole } = render(
      <InputField
        inputType="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        onChange={() => {}}
        hasError={true}
        value=""
      />
    );

    const inputEl = getByRole("textbox");
    expect(inputEl).toBeInTheDocument();
  });

  test("displays error icon when hasError is true", () => {
    const { getByTestId } = render(
      <InputField
        inputType="email"
        name="email"
        id="email"
        placeholder="Enter your E-mail address"
        onChange={() => {}}
        hasError={true}
        value="test"
      />
    );

    const inputEl = getByTestId("error-icon");
    expect(inputEl).toBeInTheDocument();
  });

  test("displays success icon when hasError is false", () => {
    const { getByTestId } = render(
      <InputField
        inputType="email"
        name="email"
        id="email"
        placeholder="Enter your E-mail address"
        onChange={() => {}}
        onBlur={() => {}}
        value="test@example.com"
        hasError={false}
      />
    );

    const inputEl = getByTestId("success-icon");
    expect(inputEl).toBeInTheDocument();
  });
});
