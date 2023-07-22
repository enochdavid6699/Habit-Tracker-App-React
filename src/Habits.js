import React from 'react'
import HabitItem from './HabitItem'

function Habits(props) {
  return (
    <div id='habits-container' >
      <h1>My Habits</h1>

      {props.habits.length === 0 ? (
        "No Habits to display"
      ) : (
        // Mapping over the Habits array and rendering HabitItem component for each contact
        props.habits.map((habit) => {
          return (
            <HabitItem habit={habit} />
          )
        })
      )}
    </div>
  )
}

export default Habits
