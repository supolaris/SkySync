import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { MY_API } from '../../components/api';

export default function WeatherDetails(props) {
    const { name } = props.route.params;

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${MY_API}')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, []);

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

