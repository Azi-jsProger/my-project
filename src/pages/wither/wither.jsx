import React, {useEffect, useState} from 'react';
import Form from "../../components/form/form";
import Card from "../../components/card/card";
import './wither.css'
import axios from "axios";
import Loading from "../../components/loading/loading";
import Header from "../../components/header/header";
import {showError, showSucsess} from "../../utils/alert/alert";

const Wither = () => {

    const APIKEY = 'e00d19ad612641c6a75110738241603'
    const [witherData, setWitherData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const styles = {
        display: 'flex' ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        height:'58vh' ,
        width:'115vh',
        padding: '35px 28px'
    }

    const getWither = async function (city) {
        setIsLoading(true)

        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`)
            setWitherData(response.data)
            showSucsess('Успешно', 'Загружены информации');
        } catch (e) {
            if (e?.response?.status === 400) {
                // alert('There is no such city')
                setError('There is no such city')
            } else if (e?.response?.status === 401) {
                setError('Вы не авторизованы')
            } else if (e?.response?.status === 402) {
                setError('Зарезервировано')
            } else if (e?.response?.status === 403) {
                setError('Нет прав на просмотр')
            } else if (e?.response?.status === 404) {
                setError('Связь с сервером установлена, но данных по заданному запросу на сервере нет')
            } else {
                setError('server is temporarily unavailable')
            }
            showError('Ошибка запроса', 'Повторите попытку позже');
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        getWither('Bishkek')
    }, []);

    return (

        <div>
            <Header/>
            <div className='container'>

                <Form
                    getWither={getWither}
                    setError={setError}
                />
                {isLoading ?
                    <Loading
                        styles={styles}
                    />
                    :
                    <Card
                        witherData={witherData}
                    />


                }
                <div className="e-div">
                    {error && <h1 className='error-h1'>{error}</h1>}
                </div>
            </div>
        </div>

    );
};

export default Wither;