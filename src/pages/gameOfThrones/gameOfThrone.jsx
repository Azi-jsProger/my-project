import React, { useEffect, useState } from 'react';
import { axiosInstance } from "../../utils/api/Api-gameOfThrones";
import './gamePrestol.css';
import { useNavigate } from "react-router-dom";
import IsLoading from "../../components/loading/loading";
import Header from "../../components/header/header";
import {showError, showSucsess} from "../../utils/alert/alert";

const GameOfThrone = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(null)


    const getCharacter = async () => {
        setIsLoading(false);
        try {
            const response = await axiosInstance.get('api/v2/Characters');
            setCharacters(response.data);
            showSucsess('Успешно', 'Загружены персонажы');
            setError(null)
        } catch (e) {
            if (e?.response?.status === 400) {
                setError('Неправильный запрос')
            } else if (e?.response?.status === 404) {
                setError('Вы не авторизованы')
            } else if (e?.response?.status === 500) {
                setError('Internal Server Error');
            } else {
                setError('Not information');
            }
            showError('Ошибка запроса', 'Повторите попытку позже');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCharacter();
    }, []);

    return (
        <div className='container-info'>

            <Header/>

            {isLoading ?
                <div className='loading'>
                    <IsLoading/>
                </div>
                :

                <div className='character'>

                    <h1 className='list'>Character List</h1>

                    <div className='character-list-wrap'>

                        <div className="hard-info">
                            <h1>Id</h1>
                            <h1>Name</h1>
                            <h1>Image</h1>
                        </div>

                        {characters.map((item, idx) => (
                            <div
                                key={idx}
                                className='character-list'
                                onClick={() => navigate(`/${item.id}`)}
                            >
                                <div>{item.id}</div>
                                <div>{item.fullName}</div>

                                <div className='photo'>
                                    <img
                                        src={item.imageUrl}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            }

            <div className="e-game">
                {error && <h1 className='error-h1'>{error}</h1>}
            </div>

        </div>
    );
};

export default GameOfThrone;

