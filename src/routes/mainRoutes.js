import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import Currency from "../pages/currency/currency";
import Wither from "../pages/wither/wither";
import GameOfThrone from "../pages/gameOfThrones/gameOfThrone";
import DetailPage from "../pages/detailPage/detailPage";


const MainRoutes = () => {
    return (
        <Routes>
            <Route  path={'/'} element={<MainPage />}/>
            <Route  path={'/currency'} element={<Currency />}/>
            <Route  path={'/wither'} element={<Wither />}/>
            <Route  path={'/got'} element={<GameOfThrone />}/>
            <Route path={'/:id'} element={<DetailPage />} />
        </Routes>
    );
};

export default MainRoutes;