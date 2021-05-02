import React from 'react';
import ReactDOM from 'react-dom';
import { TodoForm } from './Form';
import './index.css';
import { Todo } from './Todo'

function App() {
  // eslint-disable-next-line
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }
  ])

  const addTodo = value => {
    const newTodos = [...todos, { text: value, isCompleted: false }]
    setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">

        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">TODOs</h1>
        <div>
          {todos.map((todo, i) => {
            return <Todo todo={todo} index={i} remove={removeTodo} key={i} />
          })}

          < TodoForm addTodo={addTodo} />

        </div>
      </div>
    </main>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

