import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MY_API } from '../../components/api';
import { startUpSyles } from '../startup/startupScreenStyles';
import Icon from "react-native-vector-icons/Ionicons";
import { weatherDetailsStyle } from './weatherDetailsStyles';

export default function WeatherDetails(props) {
    const [data, setData] = useState("");
    const { name } = props.route.params;
    const MyData = ({value, title}) => <View>
        <Text style={weatherDetailsStyle.data1}>{title}</Text>
        <Text style={weatherDetailsStyle.data1}>{value}</Text>
    </View>
    

    useEffect(() => {

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=5568f1b778802f22d2d5ab69ca01aae0')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, []);

    return (
        <View style={startUpSyles.constainer}>
            <View style={startUpSyles.aboveIcon}>
                <View style={startUpSyles.icon}>
                    <Icon
                        name="menu"
                        size={45}
                        color="white"
                    />
                    <Image
                        source={require('../../../assets/profile.png')}
                        style={startUpSyles.profileImage}
                    />
                </View>
                <View style={startUpSyles.textView}>
                    <Text style={startUpSyles.title}>SkySync Weather</Text>
                </View>
                {
                    data ? (
                        <View style={weatherDetailsStyle.detailsView}>
                            
                            <View style={weatherDetailsStyle.detailsInnerView}>
                                <Text style={weatherDetailsStyle.cityName}>{name}</Text>
                                <Text style={weatherDetailsStyle.data1}>{data['weather'][0]['main']}</Text>
                            </View>
                            
                            <Text style={weatherDetailsStyle.data1}>{(data['main']['temp'] - 273).toFixed(2)}&deg; C</Text>
                            <View style={{flexDirection: 'row'}}>
                                <MyData value={data['wind']['speed']} title='Wind'/>
                                <MyData value={data['main']['pressure']} title='Pressure'/>
                                <MyData value={data['main']['humidity']} title='Humidity'/>
                                <MyData value={data['visibility']} title='Visibility'/>
                            </View>

                        </View>
                    )
                        : null
                }
            </View>
        </View>
    )
}

