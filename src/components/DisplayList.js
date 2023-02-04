import React, {useState, useEffect} from "react";
import '../App.css';

const DisplayList = (props) => {
    //count to track how time I did leet code in last 10 days
    const [leetCodeCount, setLeetCodeCount] = useState(() => {
        const initialCount = localStorage.getItem('leetCodeCount') || 0;
        return parseInt(initialCount, 10);
    });
    useEffect(() => {
        localStorage.setItem('leetCodeCount', leetCodeCount);
    }, [leetCodeCount]);

    //count to track how time I did run in last 10 days
    const [runCount, setRunCount] = useState(() => {
        const initialCount = localStorage.getItem('runCount') || 0;
        return parseInt(initialCount, 10);
    });
    useEffect(() => {
        localStorage.setItem('runCount', runCount);
    }, [runCount]);

    //count to track how xperi sessions I did run in last 10 days
    const [xperiCount, setXperiCount] = useState(() => {
        const initialCount = localStorage.getItem('xperiCount') || 0;
        return parseInt(initialCount, 10);
    });
    useEffect(() => {
        localStorage.setItem('xperiCount', xperiCount);
    }, [xperiCount]);

    //count to track how App dev sessions I did run in last 10 days
    const [appDevCount, setAppDevCount] = useState(() => {
        const initialCount = localStorage.getItem('appDevCount') || 0;
        return parseInt(initialCount, 10);
    });
    useEffect(() => {
        localStorage.setItem('appDevCount', appDevCount);
    }, [appDevCount]);


    const [todos, setTodos] = useState(props.todos);
    const header = useState(props.header)
    const handleComplete = (event, task) => {
        setTodos(todos.map(todo => {
            if (todo.task === task) {
                if(task == 'Leet Code')
                    setLeetCodeCount(leetCodeCount +1);
                if(task == 'Run')
                    setRunCount(runCount +1);
                if(task == 'Xperi') {
                    console.log(event.target.innerHTML);
                    if (event.target.innerHTML == 'Complete 1') {
                        setXperiCount(xperiCount + 1);
                    }
                    if (event.target.innerHTML == 'Complete 2') {
                        setXperiCount(xperiCount + 2);
                    }
                    if (event.target.innerHTML == 'Complete 3') {
                        setXperiCount(xperiCount + 3);
                    }
                }
                if(task == 'App development') {
                    if(event.target.innerHTML == 'Complete 1') {
                        setAppDevCount(appDevCount +1);
                    }
                    if(event.target.innerHTML == 'Complete 2') {
                        setAppDevCount(appDevCount +2);
                    }
                    if(event.target.innerHTML == 'Complete 3') {
                        setAppDevCount(appDevCount +3);
                    }
                }
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
                        {/*code to display no of pomodoro sessions done in that day for work*/}
                        {todo.task == 'Xperi' || todo.task == 'App development' ? <div> <button onClick={(event) => handleComplete(event, todo.task)}>Complete 1</button>
                            <button onClick={(event) => handleComplete(event, todo.task)}>Complete 2</button>
                            <button onClick={(event) => handleComplete(event, todo.task)}>Complete 3</button> </div> : (<button onClick={(event) => handleComplete(event, todo.task)}>Complete</button>)
                        }

                        {/*code to display counts*/}
                        {todo.task == 'Leet Code' ?  <p> U have done LeetCoding or SystemDesigning <span style={{ color: 'red', fontWeight: 'bolder' }}>  {leetCodeCount} </span> times in this {props.decade} </p>
                            : todo.task == 'Run' ? <p> U have done Runing <span style={{ color: 'red', fontWeight: 'bolder' }}> {runCount} </span> times in this {props.decade} </p>
                                :todo.task == 'Xperi'? <p> U have done <span style={{ color: 'red', fontWeight: 'bolder' }}> {xperiCount} </span> sessions in this {props.decade}</p>
                                    :todo.task == 'App development'? <p> U have done <span style={{ color: 'red', fontWeight: 'bolder' }}>{appDevCount}</span> sessions in this {props.decade}</p>:"" }

                    </li>
                ))}
            </ol>
        </div>
        </div>
    );
}

export default DisplayList