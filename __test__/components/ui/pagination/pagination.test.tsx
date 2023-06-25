import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

// Component
import Pagination from "@/components/ui/pagination/pagination.component"

describe("Pagination", () => {
  const onPageChangeHandler = jest.fn()
  const onPrevPageChangeHandler = jest.fn()
  const onNextPageChangeHandler = jest.fn()

  test("Buttons are rendered", () => {
    const { getAllByRole } = render(
      <Pagination
        currentPage={1}
        totalPage={5}
        onPageChange={onPageChangeHandler}
        onPrevPageChange={onPrevPageChangeHandler}
        onNextPageChange={onNextPageChangeHandler}
      />
    )

    const paginationButtons = getAllByRole("button")
    expect(paginationButtons.length).toBe(7)
  })

  test("Previous and Next Buttons are rendered", () => {
    const { getByTestId } = render(
      <Pagination
        currentPage={1}
        totalPage={5}
        onPageChange={onPageChangeHandler}
        onPrevPageChange={onPrevPageChangeHandler}
        onNextPageChange={onNextPageChangeHandler}
      />
    )

    const prevButton = getByTestId("previous-button")
    const nextButton = getByTestId("next-button")

    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  test("calls onPrevChangeHandler when clicked", () => {
    const { getByTestId } = render(
      <Pagination
        currentPage={1}
        totalPage={5}
        onPageChange={onPageChangeHandler}
        onPrevPageChange={onPrevPageChangeHandler}
        onNextPageChange={onNextPageChangeHandler}
      />
    )

    const prevButton = getByTestId("previous-button")

    fireEvent.click(prevButton)
    expect(onPrevPageChangeHandler).toHaveBeenCalledTimes(1)
  })

  test("calls onNextChangeHandler when click", () => {
    const { getByTestId } = render(
      <Pagination
        currentPage={1}
        totalPage={5}
        onPageChange={onPageChangeHandler}
        onPrevPageChange={onPrevPageChangeHandler}
        onNextPageChange={onNextPageChangeHandler}
      />
    )

    const nextButton = getByTestId("next-button")

    fireEvent.click(nextButton)
    expect(onNextPageChangeHandler).toHaveBeenCalledTimes(1)
  })
})
