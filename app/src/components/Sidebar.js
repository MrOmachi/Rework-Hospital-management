
import React, { useState,useEffect } from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import "../css/sidebar.css";
import Menu from './Menu';

const Sidebar = function(){
    const [page, setPage] = useState("/accounts");

    function open(p){
        setPage(p);
    }
    useEffect(() => {
        setPage(window.location.pathname);
        }, []);
    
    return(
        <>
        <SidebarMenu className='col-md-12 d-none d-md-block sidebar' activeKey={page} >
          <Menu open={open} page={page}/>
        </SidebarMenu>
        </>
    )
}

export default Sidebar;