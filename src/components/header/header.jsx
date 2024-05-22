import React from 'react';
import './header.css'
import ButtonMaterial from "../button/buttonMaterial";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    function redirecToDetail (){
        navigate(`/`)
    }

    return (

        <header >
            <ButtonMaterial text='Main' onClick={redirecToDetail}></ButtonMaterial>
        </header>

    );
};

export default Header;
