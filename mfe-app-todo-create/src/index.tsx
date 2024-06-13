
import React from 'react';
import TodoCreate from './TodoCreate/TodoCreate';

const CreateApp = () => (
  <>
    <h4 id="app-title" data-testid="app-title" className="app-title">
      My Todo List
    </h4>
    <TodoCreate />
  </>
);

export default CreateApp
