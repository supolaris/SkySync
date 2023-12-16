import { StyleSheet } from "react-native";

export const startUpScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e3e8e4',
       //justifyContent: 'flex-start'

    },
    pressable: {
        padding: 20,
        backgroundColor: '#748cf1',
        borderRadius: 20,
        width: '70%',
    },
    pressableText: {
        textAlign: 'center',
        fontSize: 18,
        color: "#ffffff"
    },
    view1: {
        flex: 1,

    },
    view2: {
        width: '100%',
        alignItems: 'center'
    

    }
})