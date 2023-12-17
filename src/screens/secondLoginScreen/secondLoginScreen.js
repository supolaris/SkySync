import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LoginLottie from '../../components/lottie/loginLottie/loginLottie';
import UserLottie from '../../components/lottie/userLottie/userLottie';
import google from "../../../assets/Google.png";
import apple from "../../../assets/Apple.png";
import { secondLoginScreenStyles } from './secondLoginScreenStyles';

export default function SecondLoginScreen({navigation}) {

    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        navigation.navigate("Search");
    }

    return (
        <View style={secondLoginScreenStyles.container}>
            <LoginLottie />
            <View style={secondLoginScreenStyles.titleView}>
                <Text style={secondLoginScreenStyles.title}>SkySync</Text>
            </View>
            <View style={secondLoginScreenStyles.view2}>
                <View style={secondLoginScreenStyles.userView}>
                    <UserLottie />
                </View>
                <View style={secondLoginScreenStyles.textInputView}>
                    <TextInput
                        style={secondLoginScreenStyles.textInput}
                        placeholder='Enter your password'
                        placeholderTextColor="black"
                        onChangeText={value => setEmail(value)}
                    >
                    </TextInput>
                    <View style={secondLoginScreenStyles.forgotView}>
                        <TouchableOpacity style={secondLoginScreenStyles.forgotTouch}>
                            <Text style={secondLoginScreenStyles.forgotText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={secondLoginScreenStyles.touchView}>
                        <TouchableOpacity style={secondLoginScreenStyles.touch}
                        onPress={onSignInPressed}
                        >
                            <Text style={secondLoginScreenStyles.touchText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={secondLoginScreenStyles.view3}>
                <TouchableOpacity style={secondLoginScreenStyles.textTouch}

                >
                    <Text style={secondLoginScreenStyles.text}>Sign Up</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

