import { StyleSheet } from "react-native";

export const firstLoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bbbbbb',

    },
    view1: {
        flex: 3

    },
    titleView: {

    },
    title: {
        fontSize: 20,
        color: '#000000',
        marginTop: -50,
        marginLeft: -15,
        textAlign: 'center',

    },
    view2: {
        flex: 5,
        width: '80%',
        //backgroundColor: '#ffffff',
        backgroundColor: (0, 2, 255, 1.1),
        borderRadius: 3,
        elevation: 8,
        shadowColor: 'black',
        justifyContent: 'space-evenly',
        marginTop: 50,


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
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 40,
        marginTop: 15,

    },
    cLogo: {
        height: 25,
        width: 25,
        padding: 10,
    },
    socialTouch: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#dddddd',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginHorizontal: 5

    },
    touchView: {
        //flex: 2,


    },
    touch: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 40,
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
        flex: 1,
        marginTop: 15

    }
})