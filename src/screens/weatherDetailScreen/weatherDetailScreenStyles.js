import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../components/dimensions";

export const weatherDetailScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#999999'
    },
    cityName: {
        fontSize: 40,
        color: '#ffffff',
        textTransform: 'uppercase'
    },
    data1: {
        fontSize: 22,
        color: '#ffffff'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingVertical: 10
    },
    element1: {

    },
    element2: {

    },
    valueTitle: {
        fontSize: 20,
        color: 'white',


    },
    value: {
        fontSize: 20,
        color: 'white',

    }

})