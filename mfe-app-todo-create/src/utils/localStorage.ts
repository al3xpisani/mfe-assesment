export interface Todo {
    id: number;
    description: string;
    completed: boolean;
  }
  
  const TODO_STORAGE_KEY = 'todos';
  
  export const saveTodos = (todos: Todo[]) => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  };
  
  export const loadTodos = (): Todo[] | null => {
    const todos = localStorage.getItem(TODO_STORAGE_KEY);
    return todos ? JSON.parse(todos) : null;
  };
  