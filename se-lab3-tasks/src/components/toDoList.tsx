import React from "react";
import { Todo } from "./App";
import { ToDoListItem } from "./toDoListItem";

interface ToDoListProps {
    initialTodos: Todo[];
}

export const ToDoList: React.FC<ToDoListProps> = (props) => {
    const { initialTodos } = props;

    const [todos, setTodos] = React.useState(initialTodos);

    const handleAdd = () => {
        const promptText = prompt("Enter a new todo item");

        if (!promptText || promptText.trim() === "") {
            return;
        }

        setTodos((prevTodos) => [...prevTodos, {
            id: Math.floor(Math.random() * Date.now()).toString(),
            text: promptText,
            completed: false,
        }]);
    }

    return (
        <div className="flex flex-col items-center space-y-10 p-4 overflow-auto">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleAdd}>
                Add new todo
            </button>
            {todos.map((todo) => (
                <ToDoListItem todo={todo} setTodos={setTodos} />
            ))}
        </div>
    );
}