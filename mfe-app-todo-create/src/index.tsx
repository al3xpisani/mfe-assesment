
import React from 'react';
import TodoCreate from './TodoCreate/TodoCreate';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');

const CreateApp = () => (
  <>
    <h4 id="app-title" data-testid="app-title" className="app-title">
      My Todo List
    </h4>
    <TodoCreate />
  </>
);

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<CreateApp />)
}

export default CreateApp
