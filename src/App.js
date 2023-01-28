import React, { useState } from 'react';
import './App.css';

function App() {

    const [todos, setTodos] = useState([
        {  task: "Minoxidil", completed: false },
        {  task: "Juice + BF", completed: false },
        {  task:  "Nuts + dry fruits", completed: false},
        {  task: "Lunch", completed: false },
        {  task: "Vitamins + finasteride", completed: false},
        {  task:"CrossFit", completed: false},
        {  task: "Fruits", completed: false },
        {  task: "Laser", completed: false},
        {  task: "Shower", completed: false},
        {  task: "spray + minoxidil + brush + vitamins", completed: false},
        {  task: "Visa and EB3", completed: false}
    ]);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setTodos([...todos, { task: newTodo, completed: false }]);
        setNewTodo('');
    };

    const handleChange = event => {
        setNewTodo(event.target.value);
    };

    const handleComplete = task => {
        setTodos(todos.map(todo => {
            if (todo.task === task) {
                return { task, completed: true };
            }
            return todo;
        }));
    };

    const activeTodos = todos.filter(todo => !todo.completed);
    return (
        <div className="todo-app">
            <h1 className="header">My Routine Today</h1>
            <div className="center-form">
                <form onSubmit={handleSubmit}>
                    <input value={newTodo} onChange={handleChange} />
                    <button type="submit"> Add Todo</button>
                </form>
            </div>

            <div className="list-section">
                <ol>
                    {activeTodos.map((todo, index) => (
                        <li key={index}>
                            {todo.task}
                            <button onClick={() => handleComplete(todo.task)}>Complete</button>
                        </li>
                    ))}
                </ol>
            </div>

        </div>
    );
}

export default App;
