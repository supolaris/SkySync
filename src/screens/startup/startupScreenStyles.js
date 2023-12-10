import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../components/dimensions";

export const startUpSyles = StyleSheet.create({
    constainer: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#BBAB8C'
    },
    aboveIcon: {
        position: 'absolute',

    },
    icon: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth - 20

    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 50

    },
    textView: {
        marginTop: 100,
        paddingHorizontal: 30,


    },
    title: {
        fontSize: 40,
        //textAlign: 'center'
    },
    description: {
        fontSize: 22,
        //textAlign: 'center',
        fontWeight: 'bold'
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#ffffff"

    },
    textInput: {
        paddingHorizontal: 10,
        color: "#ffffff"
    }
})