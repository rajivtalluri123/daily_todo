import React, {useState} from "react";
import '../App.css';

const DisplayList = (props) => {
    const [todos, setTodos] = useState(props.todos);
    const header = useState(props.header)
    const handleComplete = task => {
        setTodos(todos.map(todo => {
            if (todo.task === task) {
                return { task, completed: true };
            }
            return todo;
        }));
    };
    const activeTodos = todos.filter(todo => !todo.completed);


    //for submit button
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setTodos([...todos, { task: newTodo, completed: false }]);
        setNewTodo('');
    };

    const handleChange = event => {
        setNewTodo(event.target.value);
    };

    return (
        <div className="todo-app">
            <h1 className="header">{header}</h1>
            <div className="center-form">
                <form onSubmit={handleSubmit}>
                    <input value={newTodo} onChange={handleChange} />
                    <button type="submit"> Add Todo</button>
                </form>
            </div>
        <div className="list-section">
            <ol>
                {/*list only completed false in list*/}
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

export default DisplayList