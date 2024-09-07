import { useEffect, useState } from "react";
import Search from "./Search";

const Weather = () => {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);



    async function fetchWeatherData(param) {

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${param}&units=metric&lang=tr&appid={API_KEY}`
            );

            const data = await response.json();

            console.log(data, 'data');
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }

        } catch (e) {
            setLoading(false);
            console.log(e);
        }

    }

    async function handleSearch() {
        fetchWeatherData(search);

    }

    function getCurreDate() {
        return new Date().toLocaleDateString('tr', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }


    useEffect(() => {
        fetchWeatherData('Istanbul');
    }, []);

    function capitalize(str) {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }



    return (

        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {
                loading ? <div>Loading...</div> :
                    <div className="weather">
                        <div>
                            <h2 className="font-bold text-xl">{weatherData?.city?.name}, <span>{weatherData?.city?.country}</span> </h2>
                        </div>
                        <div className="date">
                            <span>{getCurreDate()}</span>
                        </div>

                        <div className="flex justify-center items-center">
                            <img className="img" src={`https://openweathermap.org/img/wn/${weatherData?.list?.[0].weather?.[0].icon}@2x.png`} alt="" />
                            <div className="mt-14 font-bold text-3xl ">{weatherData?.list[0].main?.temp} °C</div> </div>
                        

                        <div className="weather-info mt-16 flex flex-col space-y-5">
                            <p className="description">
                            {weatherData && weatherData.list && weatherData.list[0].weather[0] ? capitalize(weatherData.list[0].weather[0].description) : ''}
                        </p>
                            <div>
                                <p className="wind">Rüzgar Hızı: {weatherData?.list[0].wind?.speed} m/s</p>

                            </div>
                            <div>

                                <p className="humidity">Nem Oranı: {weatherData?.list[0].main?.humidity} *</p>
                            </div>
                        </div>

                    </div>

            }

        </div>

    );




};

export default Weather;