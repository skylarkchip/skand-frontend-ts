import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import "@testing-library/jest-dom/extend-expect"

// Redux
import { Provider } from "react-redux"
import todoReducer from "@/redux/todo"
import { configureStore } from "@reduxjs/toolkit"

// Component
import TodosListItem from "@/components/ui/todos/todos-list-item.component"

describe("TodosListItem", () => {
  const todo = {
    id: 1,
    content: "Sample todo",
    status: "TODO",
  }

  const updateTodoMock = jest.fn()
  const deleteTodoMock = jest.fn()
  const refetchMock = jest.fn()

  const renderComponent = () => {
    const store = configureStore({
      reducer: {
        todo: todoReducer,
      },
    })

    return render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Provider store={store}>
          <TodosListItem todo={todo} />
        </Provider>
      </MockedProvider>
    )
  }

  beforeEach(() => {
    updateTodoMock.mockClear()
    deleteTodoMock.mockClear()
    refetchMock.mockClear()
  })

  it("renders the todo item correctly", () => {
    const { getByText } = renderComponent()

    const todoContent = getByText("Sample todo")
    const editButton = getByText("Edit")
    const doneButton = getByText("Done")

    expect(todoContent).toBeInTheDocument()
    expect(editButton).toBeInTheDocument()
    expect(doneButton).toBeInTheDocument()
  })

  it("calls the onEditHandler when Edit button is clicked", () => {
    const { getByText } = renderComponent()

    const editButton = getByText("Edit")
    fireEvent.click(editButton)

    expect(updateTodoMock).not.toHaveBeenCalled()
    expect(deleteTodoMock).not.toHaveBeenCalled()
    expect(refetchMock).not.toHaveBeenCalled()
  })
})
