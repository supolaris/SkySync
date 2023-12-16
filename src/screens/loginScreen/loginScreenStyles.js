import React from "react";
import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    }, 
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        height: 300,
        width: 300,
        
    },
    text: {
        fontSize: 28,
        fontWeight: '600',
        color: '#1f1f2e',
        marginBottom: 20,
    },
    icon_textinput: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 25,
        
    },
    icon: {
        marginRight: 5,

    },
    input: {
        flex: 1,
        paddingVertical: 0,
        fontSize: 18,
        
    },
    forgotTouch: {

    },
    forgotText: {
        fontSize: 16,
        color: '#748cf1',
        fontWeight: '700',

    },
    buttonTouch: {
        padding: 20,
        backgroundColor: '#748cf1',
        borderRadius: 10,
        marginBottom: 20,

    },
    text2: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff'
    },

    cLogo: {
        height: 25,
        width: 25,
        padding: 10,
    },
    text3: {
        fontSize: 18,
        fontWeight: '500',
        color: '#1f1f2e',
        

    },
    innerText: {
        color: '#748cf1',
        fontWeight: '700',
        fontSize: 18,
        paddingLeft: 5,
    }
})