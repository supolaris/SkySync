import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LoginLottie from '../../components/lottie/loginLottie/loginLottie';
import { searchScreenStyles } from './searchScreenStyles';
import Icon from "react-native-vector-icons/Ionicons";

export default function SearchScreen({ navigation }) {

    const [city, setCity] = useState("");

    return (
        <View style={searchScreenStyles.container}>
            <LoginLottie />
            <View style={searchScreenStyles.titleView}>
                <Text style={searchScreenStyles.title}>SkySync</Text>
            </View>
            <View style={searchScreenStyles.view2}>
                <Text style={searchScreenStyles.description}>Search The City By Name</Text>
                <View style={searchScreenStyles.searchBox}>
                    <TextInput
                        value={city}
                        onChangeText={(val) => setCity(val)}
                        placeholder="Write City Name"
                        placeholderTextColor="#ffffff"
                        style={searchScreenStyles.textInput}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Weather", { name: city })}
                    >
                        <Icon
                            name="search"
                            size={22}
                            color="#ffffff"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={searchScreenStyles.view3}>
            </View>
        </View>
    )
}

