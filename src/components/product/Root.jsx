import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import NewNav from './NewNav';

function Root() {

    return (
        <div>
            <NewNav />
            <div style={{minHeight:'100vh'}}>
            <Outlet />
          </div>
        </div>
    )
}

export default Root;
