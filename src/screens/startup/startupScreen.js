import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { startUpSyles } from "./startupScreenStyles";
import Icon from "react-native-vector-icons/Ionicons";


export default function StartUpScreen(props) {

    const [city, setCity] = useState("");

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
                    <Text style={startUpSyles.description}>Search The City By Name</Text>
                    <View style={startUpSyles.searchBox}>
                        <TextInput
                            value={city}
                            onChangeText={(val) => setCity(val)}
                            placeholder="Write City Name"
                            placeholderTextColor="#ffffff"
                            style={startUpSyles.textInput}
                        >
                        </TextInput>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("WeatherDetails", {name: city})}
                        >
                            <Icon
                                name="search"
                                size={22}
                                color="#ffffff"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}