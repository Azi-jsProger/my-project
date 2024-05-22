import React from 'react';
import './card.css'
import imgTemp from '../../assets/temp-c.png'
import imgLoc from '../../assets/img-loc.png'

const Card = (props) => {

    const {
        witherData,
    } = props

    return (
        <div className='card'>

            <div className="info-row">

                <div className="loc-data info-column">
                    <div className="name info-row">
                        <h1 className='name-h1 color-text'>{witherData?.location?.name} </h1>
                        <img src={imgLoc} alt=""/>
                    </div>
                    <h1 className='data-h1 color-text'>{witherData?.current?.last_updated}</h1>
                </div>

                <div className='temp'>

                    <img
                        className='img-temp'
                        src={imgTemp}
                        alt=""
                    />
                    <h1 className='color-text'>{witherData?.current?.temp_c}°C</h1>
                    <img className='img-wither' src={witherData?.current?.condition?.icon} alt=""/>

                </div>

            </div>

            <div className="detailed-information">
                <div className="Humidity">
                    <h1 className='color-text'>humidity</h1>
                    <h2 className='color-text'>{witherData?.current?.humidity}%</h2>
                </div>

                <div className="Visiblity">
                    <h1 className='color-text'>visiblity</h1>
                    <h2 className='color-text'>{witherData?.current?.vis_km}km</h2>
                </div>

                <div className="Air-Pressure">
                    <h1 className='color-text'>air pressure</h1>
                    <h2 className='color-text'>{witherData?.current?.pressure_mb}hPa</h2>
                </div>

                <div className="wind">
                    <h1 className='color-text'>wind</h1>
                    <h2 className='color-text'>{witherData?.current?.wind_mph}mph</h2>
                </div>
            </div>


        </div>
    );
};

export default Card;