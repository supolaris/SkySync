import { StyleSheet } from "react-native";

export const firstScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    pressable: {
        padding: 20,
        backgroundColor: '#880000',
        borderRadius: 20,
        width: '70%',
    },
    pressableText: {
        textAlign: 'center',
        fontSize: 18,
        color: "#ffffff"
    }
})