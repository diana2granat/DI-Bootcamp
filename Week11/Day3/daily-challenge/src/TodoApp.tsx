// "TodoApp.tsx"
import React, { useState } from 'react';
import List from './List';
import { Todo } from './types';

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const addTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: `Task ${todos.length + 1}`,
    };
    setTodos([...todos, newTodo]);
  };

  const handleEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditId(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add Todo</button>
      <List
        items={todos}
        renderItem={(todo) => (
          <div key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(todo.id)}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              </>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default TodoApp;
