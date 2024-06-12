import React from 'react';
import CreateApp from '../index';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from 'mfe_app_list/ListApp';

const renderApp = () => render(<CreateApp />);

afterEach(() => {
  cleanup();
});

describe('Todo unit tests', () => {
  it('should create a new todo item', async () => {
    const newTodoItem = {
      id: 1,
      description: 'new test todo item',
      completed: false
    };
    renderApp();
    render(<TodoList todos={[newTodoItem]} setTodos={() => {}} />);
    expect(screen.getByTestId('todo-list-item')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list-item')).toHaveTextContent(
      'new test todo item'
    );
  });
});
