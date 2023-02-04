import React, { useState } from 'react';
import './App.css';
import DisplayList from './components/DisplayList'


function App() {


    const dailyRoutineTodos = [
        { task: "Leet Code", completed: false},
        {  task: "Juice + BF", completed: false },
        {  task: "Run", completed: false },
        { task: "Isha Kriya-1", completed: false},
        {  task:  "Nuts + dry fruits", completed: false},
        {  task:  "Minoxidil", completed: false},
        { task: "Xperi", completed: false},
        {  task: "Lunch", completed: false },
        {  task: "Vitamins + finasteride", completed: false},
        {  task:"CrossFit", completed: false},
        { task:"Isha Kriya-2", completed: false},
        {  task: "Fruits", completed: false },
        {  task: "Laser", completed: false},
        {  task: "Shower", completed: false},
        {  task: "spray + minoxidil + brush + eye-cream", completed: false},
        {  task: "Vitamins", completed: false},
        {  task: "App development", completed: false}
    ];

    const dailyXperiTodos = [
        {  task: "check emails and slack", completed: false },
    ];

    const dailyAppsTodos = [
        {  task: "check for improvement and add fetures", completed: false },
    ];
    return (
    <div>
        <DisplayList todos={dailyRoutineTodos}  header = "My Daily Routine" decade = "23.2.1"/>
        <DisplayList todos={dailyXperiTodos} header = "My Xperi Todo Today" />
        <DisplayList todos={dailyAppsTodos} header = "My Other Apps Today Today" />
    </div>

    );
}

export default App;
