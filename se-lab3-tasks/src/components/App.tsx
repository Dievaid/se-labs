import { ToDoList } from "./toDoList";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

// TODO: Create a ToDoList.tsx component in components folder

function App() {
  const todosInitial: Todo[] = [
    { id: "1", text: "Learn React", completed: false },
    { id: "2", text: "Build a todo app", completed: true },
    { id: "3", text: "Deploy to production", completed: false },
  ];

  return (
    <div className="flex justify-center font-mono flex-col items-center space-y-10 p-6">
      <h1 className="text-3xl">Todo List App</h1>
      <ToDoList initialTodos={todosInitial} />
    </div>
  );
}

export default App;
