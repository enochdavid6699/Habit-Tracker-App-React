import React, { useState } from 'react';

function AddHabit(props) {
  const [habit, setHabit] = useState('');

  const submit = (e) => {
    e.preventDefault();

    if (!habit) {
      alert('Name cannot be blank');
      return;
    }

    props.addHabit(habit);
    setHabit(''); // Clear the input after adding the habit
  };

  return (
    <div className="add-habit-container">
      <h1>Add a Habit</h1>
      <form onSubmit={submit} className="add-habit-form">
        <label htmlFor="add-habit" className="form-label">
          Habit
        </label>
        <input
          type="text"
          className="form-control"
          id="add-habit"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Add Habit
        </button>
      </form>
    </div>
  );
}

export default AddHabit;
