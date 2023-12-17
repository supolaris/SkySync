import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { weatherDetailScreenStyle } from './weatherDetailScreenStyles';
import { currentWeatherApi } from '../../components/currentWeatherApi/currentWeatherApi';
import WeatherLottie from '../../components/lottie/weatherLottie/weatherLottie';

export default function WeatherDetailsScreen(props) {

    const [data, setData] = useState("");
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [dayName, setDayName] = useState('');

    const { name } = props.route.params;
    const MyData = ({ value, title }) => {
     date = new Date(value * 1000);

     const hours = date.getHours();
     const minutes = date.getMinutes();
     const seconds = date.getSeconds();
    }

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=' + currentWeatherApi)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            setCurrentDate(date);
            setCurrentTime(time);
        };
        const intervalId = setInterval(updateDateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const getCurrentDayName = () => {
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDate = new Date();
            const dayIndex = currentDate.getDay();
            const currentDayName = daysOfWeek[dayIndex];
            setDayName(currentDayName);
        };

        getCurrentDayName();
    }, []);

    return (
        <View style={weatherDetailScreenStyle.container}>


            {
                data ? (
                    <View>
                        <View style={weatherDetailScreenStyle.cityView}>
                            <Text style={weatherDetailScreenStyle.cityName}>{name}, {(data['sys']['country'])} </Text>
                            <Text style={weatherDetailScreenStyle.data1}>{data['weather'][0]['description']}</Text>
                            <Text style={weatherDetailScreenStyle.temperature}>{(data['main']['temp'] - 273).toFixed(0)}&deg; C</Text>
                            <WeatherLottie />
                        </View>
                    </View>

                ) : null
            }

            {/* <Text>{currentDate}</Text> */}
            <View style={weatherDetailScreenStyle.dayDateView}>
                <Text style={weatherDetailScreenStyle.day}>{dayName}</Text>
                <Text style={weatherDetailScreenStyle.date}>{currentTime}</Text>
            </View>
            {
                data ? (
                    <ScrollView style={weatherDetailScreenStyle.detailsView}>

                        <View style={weatherDetailScreenStyle.row1}>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Sunrise</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['sys']['sunrise'])}</Text>
                            </View>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Sunset</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['sys']['sunset'])}</Text>
                            </View>
                        </View>

                        <View style={weatherDetailScreenStyle.row1}>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Wind speed</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['wind']['speed']).toFixed(0)} km/hr</Text>
                            </View>
                            <View style={weatherDetailScreenStyle.element1}>
                                <Text style={weatherDetailScreenStyle.valueTitle}>Pressure</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['main']['pressure'])} Pha</Text>
                            </View>
                        </View>

                        <View style={weatherDetailScreenStyle.row1}>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Feels like</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['main']['feels_like'] - 273).toFixed(0)}&deg; C</Text>
                            </View>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Visibility</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['visibility'] / 1000)} km</Text>
                            </View>
                        </View>

                        <View style={weatherDetailScreenStyle.row1}>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Humidity</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['main']['humidity'])} %</Text>
                            </View>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Sea level</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['main']['sea_level'])} amsl</Text>
                            </View>
                        </View>

                        <View style={weatherDetailScreenStyle.row1}>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Max</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['main']['temp_max'] - 273).toFixed(0)}&deg; C</Text>
                            </View>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Min</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['main']['temp_min'] - 273).toFixed(0)}&deg; C</Text>
                            </View>
                        </View>

                    </ScrollView>
                )
                    : null
            }
        </View>
    )
}

