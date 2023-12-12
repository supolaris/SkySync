import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { WeatherLottieSyles } from './weatherLottieStyles';

export default function WeatherLottie () {
  return (
    <LottieView 
    style={WeatherLottieSyles.lottie}
    source={require('../../../../assets/weather.json')}
    loop
    autoPlay
    />
  )
}

