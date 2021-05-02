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
    <div class="bg-purple-600 bg-opacity-75	">
      <h1 class="font-semibold text-3xl  " >TODOs</h1>
      <div>
        {todos.map((todo, i) => {
          return <Todo todo={todo} index={i} remove={removeTodo} key={i} />
        })}

        < TodoForm addTodo={addTodo} />

      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

