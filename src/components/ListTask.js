    // src/components/ListTask.js

    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import Task from './Task';

    function ListTask() {
    const tasks = useSelector(state => state.tasks);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter(task =>
        filter === 'all' ? true : filter === 'done' ? task.isDone : !task.isDone
    );

    return (
        <div className="task-list">
        <div className="filters">
            <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>Toutes</button>
            <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'done' })}>Faites</button>
            <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'notDone' })}>Pas faites</button>
        </div>
        {filteredTasks.map(task => (
            <Task key={task.id} task={task} />
        ))}
        </div>
    );
    }

    export default ListTask;
