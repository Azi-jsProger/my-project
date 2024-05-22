import React, {useState} from 'react';
import videoInfinity from '../../assets/176434-855480487.mp4';
import './mainPage.css'
import ButtonMaterial from "../../components/button/buttonMaterial";
import {useNavigate} from "react-router-dom";
import Header from "../../components/header/header";

const MainPage = () => {

    const navigate = useNavigate()

    function redirecToCurrency (){
        navigate(`/currency`)
    }

    function redirecToWither ()  {
        navigate(`/wither`)
    }

    function redicToGOT () {
        navigate(`/got`)
    }

    return (
        <div className="main">

            <Header/>
            <video src={videoInfinity} autoPlay muted loop className="bg-video" />
            <div className="content">
                <ButtonMaterial text='wither' onClick={redirecToWither}/>
                <ButtonMaterial text='game of throne' onClick={redicToGOT} />
                <ButtonMaterial text='currency' onClick={redirecToCurrency} />
            </div>
        </div>
    );
};

export default MainPage;
