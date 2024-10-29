import WeatherData from '../WeatherData/WeatherData';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './WeatherForecast.css';

const WeatherForecast = (props) => {
    const { day, img, imgAlt, conditions, time } = props
    return (
            <div className='weather'>
                <WeatherData
                    day={day} />
                <WeatherIcon
                    img={img}
                    imgAlt={imgAlt} />
                <WeatherData
                    conditions={conditions}
                    time={time} />
            </div>
    )
}

export default WeatherForecast