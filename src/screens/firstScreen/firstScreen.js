import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { firstScreenStyles } from './firstScreenStyles';
import WeatherLottie from '../../components/lottie/weatherLottie/weatherLottie';

export default function FirstScreen() {
  return (
    <View style={firstScreenStyles.container}>
      <WeatherLottie />
      <Pressable style={firstScreenStyles.pressable}>
        <Text style={firstScreenStyles.pressableText}>Get Started</Text>
      </Pressable>
    </View>
  )
}
