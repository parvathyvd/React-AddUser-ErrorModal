import React from 'react';
import './UserList.scss';

const UserList = (props) => {
    console.log(props.list)
    return (
        <div className='user-list'>
            <ul className='list-unstyled'>
                <li>{props.list.name} {props.list.age} years old</li>
            </ul>
            <p></p>
        </div>
    );
};

export default UserList;