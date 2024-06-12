import React from 'react';
import CreateApp from '../index';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const renderApp = () => render(<CreateApp />);

afterEach(() => {
  cleanup();
});

describe('Todo unit tests', () => {
  it('should have the app title content', () => {
    const { getByTestId } = renderApp();
    expect(getByTestId('app-title')).toHaveTextContent('My Todo List');
  });
  it('should create a new item and list it in the mocked mfe TodoList', async () => {
    jest.mock('mfe_app_list/ListApp', () => {
      return ({ todos }: { todos: any[] }) => (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} data-testid="todo">
              {todo.description}
            </li>
          ))}
        </ul>
      );
    });
    renderApp();
    const inputElement = screen.getByTestId('input-todo');
    const buttonElement = screen.getByTestId('create-todo-button');
    fireEvent.change(inputElement, { target: { value: 'New Todo for tests' } });
    fireEvent.click(buttonElement);

    const todoElement = await screen.findByText('New Todo for tests');
    expect(todoElement).toBeInTheDocument();
  });
});
