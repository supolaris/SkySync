import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { firstLoginScreenStyles } from './firstLoginScreenStyles';
import LoginLottie from '../../components/lottie/loginLottie/loginLottie';
import UserLottie from '../../components/lottie/userLottie/userLottie';
import google from "../../../assets/Google.png";
import apple from "../../../assets/Apple.png";
import { startScreenStyles } from '../startScreen/startScreenStyles';

export default function FirstLoginScreen({ navigation }) {

    const [email, setEmail] = useState('');

    const onNextPressed = () => {
        navigation.navigate("SecondLogin")
    }

    return (
        <View style={firstLoginScreenStyles.container}>
            <LoginLottie />
            <View style={firstLoginScreenStyles.titleView}>
                <Text style={firstLoginScreenStyles.title}>SkySync</Text>
            </View>
            <View style={firstLoginScreenStyles.view2}>
                <View style={firstLoginScreenStyles.userView}>
                    <UserLottie />
                </View>
                <View style={firstLoginScreenStyles.textInputView}>
                    <TextInput
                        style={firstLoginScreenStyles.textInput}
                        placeholder='Enter your Email'
                        placeholderTextColor="black"
                        onChangeText={value => setEmail(value)}
                    >
                    </TextInput>
                    <View style={firstLoginScreenStyles.socialLoginView}>
                        <TouchableOpacity style={firstLoginScreenStyles.socialTouch}
                        >
                            <Image
                                style={firstLoginScreenStyles.cLogo}
                                source={google}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={firstLoginScreenStyles.socialTouch}>
                            <Image
                                style={firstLoginScreenStyles.cLogo}
                                source={apple}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={firstLoginScreenStyles.touchView}>
                        <TouchableOpacity style={firstLoginScreenStyles.touch}
                            onPress={onNextPressed}
                        >
                            <Text style={firstLoginScreenStyles.touchText}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={firstLoginScreenStyles.view3}>
                <TouchableOpacity style={firstLoginScreenStyles.textTouch}

                >
                    <Text style={firstLoginScreenStyles.text}>Sign Up</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

