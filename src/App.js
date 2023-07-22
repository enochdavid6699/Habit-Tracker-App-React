import './App.css';
import AddHabit from './AddHabit';
import Habits from './Habits';
import { useState } from 'react';

function App() {
  const [habits, setHabits] = useState([]);

  function addHabit(habit) {
    const myHabit = {
      name: habit,
    };

    // Add the new habit to the top of the array using unshift
    const updatedHabits = [myHabit, ...habits];
    setHabits(updatedHabits);
  }

  function deleteHabit() {
    //TODO
  }

  return (
    <div className="App">
      <AddHabit addHabit={addHabit} />
      <Habits habits={habits} />
    </div>
  );
}

export default App;
