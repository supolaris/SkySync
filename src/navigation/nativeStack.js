import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen/homeScreen";
import WeatherDetailsScreen from "../screens/weatherDetailScreen/weatherDetailScreen";
import LoginScreen from "../screens/loginScreen/loginScreen";
import StartUpScreen from "../screens/startUpScreen/startUpScreen";
import RegisterScreen from "../screens/registerScreen/registerScreen";

export default function NativeStack() {

    const NativeStack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <NativeStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <NativeStack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <NativeStack.Screen
                    name="StartUp"
                    component={StartUpScreen}
                />
                <NativeStack.Screen
                    name="Register"
                    component={RegisterScreen}
                />
                <NativeStack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                
                <NativeStack.Screen
                    name="Weather"
                    component={WeatherDetailsScreen}
                />
            </NativeStack.Navigator>
        </NavigationContainer>
    )
}