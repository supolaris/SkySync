import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LogoLottie from '../../components/lottie/logoLottie/logoLottie';
import { startScreenStyles } from './startScreenStyles';
import LineLottie from '../../components/lottie/lineLottie/lineLottie';
import Arrow from "react-native-vector-icons/AntDesign";

export default function StartScreen({navigation}) {

    const onTouchPress = () => {
        navigation.navigate('Login');
    }

    return (
        <View
            style={startScreenStyles.container}
        >
            <LogoLottie />
                
            {/* <View>
        <Text style={startScreenStyles.title}>SkySync</Text>
      </View> */}
            <View style={startScreenStyles.lineView}>
                <View style={startScreenStyles.line} />

            </View>

            <View style={startScreenStyles.textView}>
                <TouchableOpacity style={startScreenStyles.textTouch}
                onPress={onTouchPress}
                >
                    <Text style={startScreenStyles.text}>Start SkySync</Text>
                    <Arrow
                            style={startScreenStyles.icon}
                            name="arrowright" size={25} color="#000000" />
                </TouchableOpacity>

            </View>

        </View>
    )
}

