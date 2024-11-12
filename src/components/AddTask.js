    // src/components/AddTask.js

    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';

    function AddTask() {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (description) {
        dispatch({
            type: 'ADD_TASK',
            payload: { id: Date.now(), description, isDone: false }
        });
        setDescription('');
        }
    };

    return (
        <div className="add-task">
        <input
            type="text"
            placeholder="Nouvelle tâche"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>Ajouter</button>
        </div>
    );
    }

    export default AddTask;
