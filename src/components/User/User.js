import React from 'react';
import { useState } from 'react';
import './User.css'
import UserForm from './UserForm';
import UserList from './UserList';

const User = (props) => {
    const [list, setList] = useState([]);

     const onAddHAndler = (ip) => {
            setList([...list, {...ip, id: Math.random().toString()} ])

            console.log('list is', list);
     }

    return (
        <div className='user'>
                <h3>Add Your Info</h3>
                <UserForm onAdd={(ip)=>onAddHAndler(ip)}/>  
                {list.map((lis)=>{
                    return <UserList list={lis} key={lis.name}/> 
                })}
        </div>
    );
};

export default User;