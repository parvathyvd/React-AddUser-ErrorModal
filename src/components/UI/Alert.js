import React from 'react';
import './Alert.scss';

const Alert = (props) => {

    const onClcikHandler = () => {
        props.onClose()
    }
   
    return (
        <div className="backdrop" onClick={onClcikHandler}>
                <div className='alert'>
                <div className="alert-child">
                <p className='message'>{props.message}</p>
                <button className='btn' onClick={onClcikHandler}>Close</button>
                </div>
             </div>
        </div>
       
    );
};

export default Alert;