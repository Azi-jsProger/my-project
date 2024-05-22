import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {axiosInstance} from '../../utils/api/Api-gameOfThrones';
import './style.css'
import IsLoading from '../../components/loading/loading';
import Header from "../../components/header/header";
import {showError, showSucsess} from "../../utils/alert/alert";
import ButtonMaterial from "../../components/button/buttonMaterial";

const DetailPage = () => {

    const {id} = useParams();
    const  navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [character, setCharacter] = useState({});
    const [error , setError] = useState(null);

    function rediceToBack () {
        navigate(`/got`)
    }

    const getCharacter = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.get(`api/v2/Characters/${id}`);
            setCharacter(response.data);
            showSucsess('Успешно', 'Загружены персонажы');
        } catch (e) {
            if (e?.response?.status === 400) {
                setError('вы запросе ошибка!');
            } else if (e?.response?.status === 404) {
                setError('сервер не найден!');
            } else if (e?.response?.status === 500) {
                setError('внутренняя ошибка сервера!');
            } else {
                setError('интернет отключен!');
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
        <div className='container-got'>

            <Header />

            {isLoading ?
                <div className='loading'>
                    <IsLoading />
                </div>
                :
                <div className='info-character'>

                    <div className='h1-but'>
                        <h1>Character Detail</h1>

                        <ButtonMaterial text='Назад' onClick={rediceToBack}/>
                    </div>


                    <div className='detail-info'>

                    <div className='name-img'>
                            <h2>{character.fullName}</h2>

                            <div className='big-photo'>
                                <img className='photo' src={character.imageUrl} alt=""/>
                            </div>
                        </div>

                        <div className='details'>

                            <div className="left">
                                <h2>ID:</h2>
                                <h2>First Name:</h2>
                                <h2>Last Name:</h2>
                                <h2>Full Name:</h2>
                                <h2>Title:</h2>
                                <h2>Family:</h2>
                                <h2>Image:</h2>
                                <h2>Image URL:</h2>
                            </div>

                            <div className="right">
                                <h2>{character.id}</h2>
                                <h2> {character.firstName}</h2>
                                <h2> {character.lastName}</h2>
                                <h2> {character.fullName}</h2>
                                <h2> {character.title}</h2>
                                <h2> {character.family}</h2>
                                <h2> {character.image}</h2>
                                <h2> {character.imageUrl}</h2>
                            </div>

                        </div>


                        <div className='div-error'>
                            {error && <h2 className='error'>{error}</h2>}
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default DetailPage;
