import { StyleSheet } from "react-native";

export const firstLoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bbbbbb',

    },
    view1: {
        flex: 2

    },
    titleView: {

    },
    title: {
        fontSize: 20,
        color: '#000000',
        marginTop: -90,
        marginLeft: -15,
        textAlign: 'center',

    },
    view2: {
        flex: 5,
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 8,
        shadowColor: 'black',
        //justifyContent: 'space-evenly',


    },
    userView: {
        alignItems: 'center',

    },
    emailImage: {
        height: 50,
        width: 50,
        resizeMode: 'contain'

    },
    textInputView: {
        alignItems: 'center'

    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        width: '70%',
        color: 'black',
        textAlign: 'center'
        

    },
    socialLoginView: {

    },
    touchView: {
        //flex: 2,


    },
    touch: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    touchText: {
        fontSize: 12,
        color: '#ffffff',
        textAlign: 'center'
    },
    view3: {
        flex: 1

    }
})