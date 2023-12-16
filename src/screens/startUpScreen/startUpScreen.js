import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { startUpScreenStyles } from './startUpScreenStyles';
import WeatherLottie from '../../components/lottie/weatherLottie/weatherLottie';

export default function StartUpScreen({ navigation }) {

  const onGetStartedPress = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={startUpScreenStyles.container}>
        <WeatherLottie />
      <View style={startUpScreenStyles.view2}>
        <Pressable style={startUpScreenStyles.pressable}
          onPress={onGetStartedPress}
        >
          <Text style={startUpScreenStyles.pressableText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  )
}
