import React from "react";
import dynamic from "next/dynamic";

// Components
const TodosListItem = dynamic(() => import("./todos-list-item.component"));

function TodosList({ todos }: any) {
  return (
    <div className="w-full flex flex-col gap-y-8 todo-list">
      {todos.length > 0 ? (
        todos.map((todo: any) => <TodosListItem key={todo.id} todo={todo} />)
      ) : (
        <div className="flex flex-col gap-y-4">
          <p className="text-center text-custom-gray text-base">
            You have no todo now.
          </p>
          <p className="text-center text-custom-gray text-base">
            Did you just get everything done?
          </p>
        </div>
      )}
    </div>
  );
}

export default TodosList;
