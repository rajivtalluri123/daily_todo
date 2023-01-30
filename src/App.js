import React, { useState } from 'react';
import './App.css';
import DisplayList from './components/DisplayList'


function App() {

    const dailyRoutineTodos = [
        {  task: "Minoxidil", completed: false },
        {  task: "Juice + BF", completed: false },
        {  task:  "Nuts + dry fruits", completed: false},
        {  task:  "Run", completed: false},
        {  task: "Lunch", completed: false },
        {  task: "Vitamins + finasteride", completed: false},
        {  task:"CrossFit", completed: false},
        {  task: "Fruits", completed: false },
        {  task: "Laser", completed: false},
        {  task: "Shower", completed: false},
        {  task: "spray + minoxidil + brush + vitamins", completed: false},
        {  task: "Visa and EB3", completed: false}
    ];

    const dailyXperiTodos = [
        {  task: "check emails and slack", completed: false },
    ];

    const dailyAppsTodos = [
        {  task: "check for improvement and add fetures", completed: false },
    ];

    return (
    <div>
        <DisplayList todos={dailyRoutineTodos}  header = "My Daily Routine"/>
        <DisplayList todos={dailyXperiTodos} header = "My Xperi Routine Today" />
        <DisplayList todos={dailyAppsTodos} header = "My Other Apps Routine Today" />
    </div>

    );
}

export default App;
