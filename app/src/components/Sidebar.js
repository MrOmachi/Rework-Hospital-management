
import React, { useState,useEffect } from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { NavDropdown } from 'react-bootstrap';
import appicon from "../images/icon.png";
import {MdCreditCard,MdInbox,MdTimelapse,MdOutlineViewList,MdOutlineNorthEast,MdOutlineCompareArrows,MdSettings, MdPerson, MdOutlineSettings, MdListAlt, MdOutlinePerson, MdOutlineInbox, MdCompareArrows} from "react-icons/md";

import "../css/sidebar.css";

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
            <SidebarMenu.Header>
                <SidebarMenu.Brand>
                <img 
                alt="logo"
                src={appicon} style={{width:"auto",maxWidth:150,margin:"auto",height:"auto"}}/>
                </SidebarMenu.Brand>
            </SidebarMenu.Header>


            <SidebarMenu.Body>

            <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link href="/" onClick={(e)=>open("/")}>
                <SidebarMenu.Nav.Icon>
                    <MdTimelapse/>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                    Home
                </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>



            <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link href="/accounts" onClick={(e)=>open("/accounts")}>
                <SidebarMenu.Nav.Icon>
                    <MdOutlineInbox/>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                    Accounts
                </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>




            <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link href="/transactions" onClick={(e)=>open("/transactions")}>
                <SidebarMenu.Nav.Icon>
                    <MdCompareArrows/>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                    Transactions
                </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>



            {/* <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link href="/payments" onClick={(e)=>open("/payments")}>
                <SidebarMenu.Nav.Icon>
                    <MdOutlineNorthEast/>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                    Payments
                </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav> */}



            <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link href="/payments" onClick={(e)=>open("/payments")}>
                    <SidebarMenu.Nav.Icon>
                        <MdOutlineNorthEast/>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>
                            Payments
                    </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
                <SidebarMenu.Sub>
                    <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/recipients" onClick={(e)=>open("/recipients")}>
                        <SidebarMenu.Nav.Icon>
                        <MdOutlinePerson/>
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>
                            Recipients
                        </SidebarMenu.Nav.Title>
                    </SidebarMenu.Nav.Link>
                    </SidebarMenu.Nav>
                </SidebarMenu.Sub>
            </SidebarMenu.Nav>




            <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link href="/invoices" onClick={(e)=>open("/invoices")}>
                <SidebarMenu.Nav.Icon>
                    <MdListAlt/>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                    Invoices
                </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>




            <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link  href="/cards" onClick={(e)=>open("/cards")}>
                <SidebarMenu.Nav.Icon>
                    <MdCreditCard/>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                    Cards
                </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>



            </SidebarMenu.Body>
            <SidebarMenu.Footer>
                
                <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link  href="/settings" onClick={(e)=>open("/settings")}>
                    <SidebarMenu.Nav.Icon>
                        <MdOutlineSettings/>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>
                        Profile Settings
                    </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>


            </SidebarMenu.Footer>
        </SidebarMenu>
        </>
    )
}

export default Sidebar;