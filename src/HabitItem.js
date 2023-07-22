import React, { useState } from 'react';
import ModalComponent from './ModalComponent'; // Replace 'ModalComponent' with the name of the component you want to open


function Habits(props) {

    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div className='habit-item' >

            <div className='habit-item-info'>
                <h4>{props.habit.name}</h4>

                <button type="delete-button" onClick={() => props.deleteHabit(props.habit)} >Delete</button>


                <button
                    onClick={handleButtonClick}
                    className='open-component button'>
                        Open Component
                </button>

                
                {showModal && <ModalComponent onClose={handleCloseModal} />}


            </div>

        </div>
    )
}

export default Habits
