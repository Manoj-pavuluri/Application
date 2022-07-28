import React from 'react';
import Content from '../content/content';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="Sidebarmain">
            <div className='SideBarChild SideBarBg'>
                <div className='SideBarwidth'>
                <i class="fa fa-home HomeIcon text-secondary" aria-hidden="true"></i>Home
                </div>
                <div >
                    DashBoard
                </div>
            </div>
            <Content />

        </div>
    )
}

export default SideBar;