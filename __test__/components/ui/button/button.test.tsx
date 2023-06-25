import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

// Component
import Button from "@/components/ui/button/button.component"

describe("Button", () => {
  test("renders correctly", () => {
    const { getByText } = render(<Button>Click Me</Button>)
    const buttonEl = getByText("Click Me")

    expect(buttonEl).toBeInTheDocument()
    expect(buttonEl).toHaveClass("bg-custom-pink")
    expect(buttonEl).toHaveTextContent("Click Me")
  })

  test("calls onClickHandler when clicked", () => {
    const onClickTestHandler = jest.fn()
    const { getByText } = render(
      <Button onClick={onClickTestHandler}>Click Me</Button>
    )

    const buttonEl = getByText("Click Me")

    fireEvent.click(buttonEl)
    expect(onClickTestHandler).toHaveBeenCalledTimes(1)
  })
})
