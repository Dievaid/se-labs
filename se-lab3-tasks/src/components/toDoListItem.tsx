import React from "react";
import { Todo } from "./App";

interface ToDoListItemProps {
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const ToDoListItem: React.FC<ToDoListItemProps> = (props) => {
    const { id, text, completed } = props.todo;

    const { setTodos } = props;

    const color = completed ? "bg-green-200" : "";

    const [isEditState, setIsEditState] = React.useState(false);
    
    const textRef = React.useRef<HTMLTextAreaElement>(null);
    const [textState, setTextState] = React.useState(text);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-[400px]">
            <div className={`px-6 py-4 ${color} space-y-4`}>
                {!isEditState && <div className="font-bold text-xl mb-2">{textState}</div>}
                {isEditState && <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none row-span-3" ref={textRef}>{textState}</textarea>}
                <div className="flex flex-col items-center space-y-4">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => {
                        setTodos((prevTodos) => {
                            return prevTodos.map((todo) => {
                                if (todo.id === id) {
                                    return {
                                        ...todo,
                                        completed: !todo.completed,
                                    };
                                }
                                return todo;
                            });
                        });
                    }}>{completed ? "Mark as complete" : "Mark as not done"}</button>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={() => {
                            setIsEditState((prev) => !prev);
                            setTextState(textRef.current?.value || text);
                        }}>
                        {isEditState ? "Save" : "Edit"}
                    </button>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={() => {
                            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
                        }}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}