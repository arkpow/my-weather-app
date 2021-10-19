import React, { useCallback, useState } from 'react';
import classes from './Weather.module.css';
import spinner from '../../spinner.gif';

export const Weather = ({ selectedCity, goBack }) => {
    const [data, setData] = useState(null)

    const reqestWeather = useCallback(
        async (city) => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=f6ee8d40989d48fd8d6e8c6f338ce08c`;
            const response = await fetch(url);
            if (response.status === 404) {
                alert('Город не найден');
                return null;
            }
            console.log(response)
            setData(await response.json())      
        },
        [],
      )

    const currentComponent = () => {
        if (data) {
            return (
                <div className={classes.WeatherCard}>
                    <div>
                        <h1 className={classes.WeatherCard__temp} >{Math.round(data.main.temp)}°</h1>
                        <p className={classes.WeatherCard__feels} >Ощущается как {Math.round(data.main.feels_like)}°</p>
                        <p>Мин: {Math.round(data.main.temp_min)}° Макс: {Math.round(data.main.temp_max)}°</p>
                        <h3>{data.weather[0].description.toUpperCase()}</h3>
                    </div>
                    <div>
                        <p className={classes.WeatherCard__name}>{data.name}</p>
                    </div>
                    <p className={classes.WeatherCard__change} onClick={goBack} >Изменить город</p>         
                </div>
            )
        }
        reqestWeather(selectedCity.city)
        return (
            <>
                <img src={spinner} alt="картинка сломалась" />
                <button className={classes.backbutton} onClick={goBack}>Назад</button> 
            </>
        )
    }

    return (
        <>
            {currentComponent()}
        </>
        
    )
}
