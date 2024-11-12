    // src/components/Task.js

    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';

    function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const toggleTaskStatus = () => {
        dispatch({ type: 'TOGGLE_TASK', payload: task.id });
    };

    const saveEdit = () => {
        dispatch({
        type: 'EDIT_TASK',
        payload: { id: task.id, description: newDescription }
        });
        setIsEditing(false);
    };

    return (
        <div className={`task ${task.isDone ? 'done' : ''}`}>
        {isEditing ? (
            <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            />
        ) : (
            <span>{task.description}</span>
        )}
        <button onClick={toggleTaskStatus}>
            {task.isDone ? 'Pas fait' : 'Fait'}
        </button>
        {isEditing ? (
            <button onClick={saveEdit}>Enregistrer</button>
        ) : (
            <button onClick={() => setIsEditing(true)}>Modifier</button>
        )}
        </div>
    );
    }

    export default Task;
