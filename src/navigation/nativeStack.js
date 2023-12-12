import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartUpScreen from "../screens/startup/startupScreen";
import weatherDetails from "../screens/weatherdetails/weatherDetails";
import FirstScreen from "../screens/firstScreen/firstScreen";

export default function NativeStack() {

    const NativeStack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <NativeStack.Navigator>
                <NativeStack.Screen
                    name="FirstScreen"
                    component={FirstScreen}
                />
                <NativeStack.Screen
                    name="StartUp"
                    component={StartUpScreen}
                />
                <NativeStack.Screen
                    name="WeatherDetails"
                    component={weatherDetails}
                />
            </NativeStack.Navigator>
        </NavigationContainer>
    )
}