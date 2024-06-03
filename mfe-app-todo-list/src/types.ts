export interface TodoIitem {
    id: number;
    description: string;
    completed: boolean;
  }
export default interface TodoListProps {
    todos: TodoIitem[];
    setTodos: React.Dispatch<React.SetStateAction<TodoIitem[]>>;
  }