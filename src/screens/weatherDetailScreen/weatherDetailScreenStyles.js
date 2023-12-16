import { StyleSheet } from "react-native";
import { deviceHeight } from "../../components/dimensions";

export const weatherDetailScreenStyle = StyleSheet.create({

    detailsView: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        deviceHeight: deviceHeight - 100


    },
    detailsInnerView: {
        width: '100%'

    },
    cityName: {
        fontSize: 40,
        color: '#ffffff',
        textTransform: 'uppercase'
    },
    data1: {
        fontSize: 22,
        color: '#ffffff'
    }
    
})