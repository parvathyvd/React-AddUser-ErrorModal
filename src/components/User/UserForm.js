import React from 'react';
import { useState } from 'react';
import './UserForm.scss'
import UserList from './UserList';
import Alert from '../UI/Alert';

const UserForm = (props) => {
    const [name, setName] = useState('');
    const  [age, setAge] = useState('');
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState('')
    const onSubmitHandler = (e) => {
        e.preventDefault();
         if(+age <0 && name!==''){
            setAlert(true);
            setMessage('Please enter positive value for age')
            setName('');
            setAge('');
            }
           else if(name === '' && age ===''){
            setAlert(true);
            setMessage('Please enter both fields')
            setName('');
            setAge('');
           }
       else{
        let input = {
            name: name,
            age : age
        }
        setAlert(false);
        setMessage('Added sudcesfully')
        setName('');
        setAge('');
        props.onAdd(input);

       }
    }

    const onCloseHandler = () => {
        setAlert(false);
    }

    return (
        <div className='userform'>
            <form className='form-controls' onSubmit={onSubmitHandler}>
                <div className=''>
                    <label htmlFor='name'>User Name</label>
                    <input type='text' id='name' onChange={(e)=> setName(e.target.value)} value={name}/>
                </div>
                <div>
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' onChange={(e)=> setAge(e.target.value)} value={age}/>
                </div>
                <button className='btn btn-add'>Add User</button>
            </form>
            
            {alert ? <Alert message={message} alert={alert} onClose = {onCloseHandler}/>  : ''}
        </div>
    );
};

export default UserForm;