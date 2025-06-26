import './App.css'
import { useState } from 'react'
import { useTodolist } from './hooks/useTodolist.ts'

function App() {
  const { addTodo, todolist, toggleCompleted } = useTodolist()

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  return (
    <main>
      <h1>Simple Todolist</h1>
      {todolist.map((todo) => {
        const { id, title, url, isCompleted } = todo
        return (
          <div className="todo-item" key={id}>
            <input type="checkbox" checked={isCompleted} onChange={() => toggleCompleted(id)} />
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </div>
        )
      })}
      <form onSubmit={(event) => {
        event.preventDefault();
        addTodo(title, url);
      }}>
        <label>
          <div>Title</div>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label>
          <div>URL</div>
          <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
        </label>
        <input type="submit" value="Add TODO" />
      </form>
    </main>
  )
}

export default App
