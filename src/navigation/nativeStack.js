import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen/homeScreen";
import WeatherDetailsScreen from "../screens/weatherDetailScreen/weatherDetailScreen";
import LoginScreen from "../screens/loginScreen/loginScreen";
import StartUpScreen from "../screens/startUpScreen/startUpScreen";
import RegisterScreen from "../screens/registerScreen/registerScreen";
import StartScreen from "../screens/startScreen/startScreen";
import FirstLoginScreen from "../screens/firstLoginScreen/firstLoginScreen";
import SecondLoginScreen from "../screens/secondLoginScreen/secondLoginScreen";
import SearchScreen from "../screens/searchScreen/searchScreen";

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
                    name="Search"
                    component={SearchScreen}
                />
                <NativeStack.Screen
                    name="FirstLogin"
                    component={FirstLoginScreen}
                />
                
                <NativeStack.Screen
                    name="SecondLogin"
                    component={SecondLoginScreen}
                />
                <NativeStack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <NativeStack.Screen
                    name="Start"
                    component={StartScreen}
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