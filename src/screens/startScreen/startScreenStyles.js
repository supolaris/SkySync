import { StyleSheet } from "react-native";

export const startScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bbbbbb',
    },
    title: {
        fontSize: 40,
        color: "#000000",
        fontWeight: 600,
    },
    lineView: {
        height: '30%',
        flex: 4
    },
    line: {
        width: 10, 
        height: '40%', 
        borderLeftColor: 'black', 
        borderLeftWidth: 2,
    },
    textView: {
        flex: 2,

    },
    textTouch: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        color: '#000000',
        marginLeft: 8,
        fontWeight: "700",
    },
    icon: {
        marginLeft: 8,
        marginTop: 3,
    },
})