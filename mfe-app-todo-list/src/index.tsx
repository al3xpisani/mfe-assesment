import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from "./Todo-list/TodoList";
import TodoListProps from "./types"

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container as HTMLElement);

const App:React.FC<TodoListProps> = ({ todos, setTodos }) => (
    <TodoList todos={todos} setTodos={setTodos}/>
)
root.render(<App todos={[]} setTodos={() => {}} />)

export default App
