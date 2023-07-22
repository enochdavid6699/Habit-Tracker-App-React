import React from 'react'

function Habits(props) {
    return (
        <div className='habit-item' >

            <div className='habit-item-info'>
                <h4>{props.habit.name}</h4>

                <button type="button" >Delete</button>

            </div>

        </div>
    )
}

export default Habits
