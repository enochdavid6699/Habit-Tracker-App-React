import React from 'react'
import HabitItem from './HabitItem'

function Habits(props) {
  return (
    <div id='habits-container' >
      <h3>My Habits</h3>

      {props.habits.length === 0 ? (
        "No Habits to display"
      ) : (
        // Mapping over the Habits array and rendering HabitItem component for each contact
        props.habits.map((habit) => {
          return (
            <HabitItem habit={habit} deleteHabit={props.deleteHabit} />
          )
        })
      )}
    </div>
  )
}

export default Habits
