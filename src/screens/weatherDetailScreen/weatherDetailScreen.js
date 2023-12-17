import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { weatherDetailScreenStyle } from './weatherDetailScreenStyles';

export default function WeatherDetailsScreen(props) {
    const [data, setData] = useState("");
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const { name } = props.route.params;
    const MyData = ({ value, title }) =>
        <View>
            <Text style={weatherDetailScreenStyle.data1}>{title}</Text>
            <Text style={weatherDetailScreenStyle.data1}>{value}</Text>
        </View>

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=5568f1b778802f22d2d5ab69ca01aae0')
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

    return (
        <View style={weatherDetailScreenStyle.container}>

            <Text style={weatherDetailScreenStyle.cityName}>{name}</Text>
            {
                data ? (
                    <View>
                        <View>
                            <Text style={weatherDetailScreenStyle.data1}>{data['weather'][0]['description']}</Text>
                        </View>
                        <View>
                            <Text style={weatherDetailScreenStyle.data1}>{(data['main']['temp'] - 273).toFixed(2)}&deg; C</Text>
                        </View>
                    </View>

                ) : null
            }

            <Text>{currentDate}</Text>
            <Text>{currentTime}</Text>

            {
                data ? (
                    <View style={weatherDetailScreenStyle.detailsView}>

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
                                <Text style={weatherDetailScreenStyle.value}>{(data['wind']['speed'])}</Text>
                            </View>
                            <View style={weatherDetailScreenStyle.element1}>
                                <Text style={weatherDetailScreenStyle.valueTitle}>Pressure</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['main']['pressure'])}</Text>
                            </View>
                        </View>

                        <View style={weatherDetailScreenStyle.row1}>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Feels like</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['main']['feels_like'])}</Text>
                            </View>
                            <View style={weatherDetailScreenStyle.element1}>

                                <Text style={weatherDetailScreenStyle.valueTitle}>Visibility</Text>
                                <Text style={weatherDetailScreenStyle.value}>{(data['visibility'])}</Text>
                            </View>
                        </View>

                    </View>
                )
                    : null
            }
        </View>
    )
}

