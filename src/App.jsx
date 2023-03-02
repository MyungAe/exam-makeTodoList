import React, { useState } from 'react';
import 'App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const submitEventHandler = event => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
  };

  return (
    <>
      <form className="todo-form">
        <input
          type="text"
          value={todo}
          onChange={event => {
            setTodo(event.target.value);
          }}
        />
        <input
          type="submit"
          onClick={submitEventHandler}
          value="추가하기"
        />
      </form>
      <h1 className="title">Todo List</h1>
      <section className="card-list">
        {todoList.map((element, index) => {
          return (
            <article
              key={index}
              className="card"
            >
              {element}
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;
