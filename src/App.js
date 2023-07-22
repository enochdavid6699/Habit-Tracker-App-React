import './App.css';
import AddHabit from './AddHabit';
import Habits from './Habits';
import { useState } from 'react';

function App() {
  const [habits, setHabits] = useState([]);

  function addHabit(habit) {
    const myHabit = {
      name: habit,
      id: Date.now(),
      
    };

    // Add the new habit to the top of the array using unshift
    const updatedHabits = [myHabit, ...habits];
    setHabits(updatedHabits);
  }

  function deleteHabit(habit) {
    setHabits(habits.filter((e)=>{
      return e!==habit;
    }));
    
    console.log('Deleted:', habit);
  }

  return (
    <div className="App">
      <AddHabit addHabit={addHabit} />
      <Habits habits={habits} deleteHabit={deleteHabit} />
    </div>
  );
}

export default App;
