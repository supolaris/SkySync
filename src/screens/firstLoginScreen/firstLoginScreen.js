import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { firstLoginScreenStyles } from './firstLoginScreenStyles';
import LogoLottie from '../../components/lottie/logoLottie/logoLottie';

export default function FirstLoginScreen() {

    const [email, setEmail] = useState('');

    return (
        <View style={firstLoginScreenStyles.container}>
            <LogoLottie />
            <View style={firstLoginScreenStyles.titleView}>
                <Text style={firstLoginScreenStyles.title}>SkySync</Text>
            </View>


            <View style={firstLoginScreenStyles.view2}>
                <View style={firstLoginScreenStyles.userView}>
                    <Image
                        style={firstLoginScreenStyles.emailImage}
                        source={require('../../../assets/email.png')}

                    />
                    <Text>Email</Text>

                </View>
                <View style={firstLoginScreenStyles.textInputView}>
                    <TextInput
                        style={firstLoginScreenStyles.textInput}
                        placeholder='Enter your Email'
                        placeholderTextColor="#000000"
                        onChangeText={value => setEmail(value)}
                    >

                    </TextInput>
                    <View style={firstLoginScreenStyles.socialLoginView}>

                    </View>


                    <View style={firstLoginScreenStyles.touchView}>
                        <TouchableOpacity style={firstLoginScreenStyles.touch}>
                            <Text style={firstLoginScreenStyles.touchText}>NEXT</Text>
                        </TouchableOpacity>
                    </View>

                    
                </View>

            </View>

            <View style={firstLoginScreenStyles.view1}>

            </View>
        </View>
    )
}

