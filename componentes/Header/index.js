import logo from '../../assets/logo.png'
import Button from '../Dropdown'
import ButtonUser from '../DropUser'
import './header.css'

import Context from '../../context'
import React, { useContext, useEffect, useState } from "react";


export default function Header(){
    const [user, setUser] = useContext(Context);
    
    return(
        <header>
            <div className='header-user'>
                <div>
                <ButtonUser nome={user}/>
                
                </div>
            </div>
            <img src={logo}/>
            <nav>
                <ul className='header-links-box'> 
                    <li className='header-links'>
                        Início
                    </li>
                    <li className='header-links'>
                        Fale Conosco
                    </li>
                    <li>
                        <Button/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}