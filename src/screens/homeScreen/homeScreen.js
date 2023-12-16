import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { homeScreenSyles } from "./homeScreenStyles";
import Icon from "react-native-vector-icons/Ionicons";
import auth from '@react-native-firebase/auth';

export default function HomeScreen({ props, navigation }) {

    const [city, setCity] = useState("");

    const signOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'))
            .then(() => navigation.navigate("StartUp"))
    }

    return (
        <View style={homeScreenSyles.constainer}>

            <View style={homeScreenSyles.aboveIcon}>
                <View style={homeScreenSyles.icon}>
                    <Icon
                        name="menu"
                        size={45}
                        color="white"
                    />
                    <Image
                        source={require('../../../assets/profile.png')}
                        style={homeScreenSyles.profileImage}
                    />
                </View>
                <View style={homeScreenSyles.textView}>
                    <Text style={homeScreenSyles.title}>SkySync Weather</Text>
                    <Button
                        title="sign out"
                        onPress={signOut}
                    />
                    <Text style={homeScreenSyles.description}>Search The City By Name</Text>
                    <View style={homeScreenSyles.searchBox}>
                        <TextInput
                            value={city}
                            onChangeText={(val) => setCity(val)}
                            placeholder="Write City Name"
                            placeholderTextColor="#ffffff"
                            style={homeScreenSyles.textInput}
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
            </View>
        </View>
    )
}