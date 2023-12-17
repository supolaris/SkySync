import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../components/dimensions";

export const weatherDetailScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#999999',
        //alignItems: 'center',
    },
    cityView: {
        //flex: 2,
        //flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,

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
    temperature: {
        fontSize: 50,

    },
    dayDateView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingBottom: 10

    },
    day: {
        fontSize: 25,
        color: 'white',

    },
    date: {
        fontSize: 25,
        color: 'white',

    },
    detailsView: {
        flex: 4,
        marginTop: 50

    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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