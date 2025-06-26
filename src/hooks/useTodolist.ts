import { useCallback, useState } from 'react'

interface UseTodolistState {
  todolist: TodoItem[];
  addTodo: (title: string, url: string) => void;
  toggleCompleted: (id: string) => void;
}

export const useTodolist = (): UseTodolistState => {
  const [todolist, setTodolist] = useState<TodoItem[]>([
    {
      id: crypto.randomUUID(),
      title: 'Sample Todo',
      url: 'https://example.com',
      isCompleted: false,
    },
  ])

  const addTodo = useCallback((title: string, url: string): void => {
   setTodolist((prev) => ([
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        url,
        isCompleted: false,
      },
    ]));
  }, [setTodolist]);

  const toggleCompleted = useCallback((id: string): void => {
    setTodolist((prevTodolist) =>
      prevTodolist.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    )
  }, [setTodolist])

  return {
    addTodo,
    todolist,
    toggleCompleted,
  }
}
