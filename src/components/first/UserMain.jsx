import React from 'react'
import AddUser from './AddUser';
import UserList from './UserList';
import UserCount from './UserCount';
import './UserMain.css';

function UserMain() {
    return (
        <div className='box'>
            <AddUser/>
            <UserList />
            <UserCount />
        </div>
    )
}

export default UserMain;
