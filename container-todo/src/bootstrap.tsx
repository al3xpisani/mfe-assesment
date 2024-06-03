import React from 'react';
import TodoCreate from "mfe_app_create/CreateApp";
import TodoList from "mfe_app_list/ListApp";
import ReactDOM from "react-dom/client";

const container = document.getElementById('root');

const App = () => (
  <>
    <TodoCreate />
    <TodoList />
  </>
)
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />)
}

export default App
