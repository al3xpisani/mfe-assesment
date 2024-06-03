
import React from 'react';
import TodoCreate from "./Todo-create/Todo";
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');

const CreateApp = () => (
    <TodoCreate />
)

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<CreateApp />)
}

export default CreateApp
