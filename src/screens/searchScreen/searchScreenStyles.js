import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../components/dimensions";

export const searchScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#999999',
    },
    title: {
        fontSize: 20,
        color: '#000000',
        marginTop: -40,
        marginLeft: -15,
        textAlign: 'center',
    },
    view2: {
        //flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 50,
    },
    description: {
        fontSize: 22,
        fontWeight: '500'
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#bbbbbb',
        borderTopWidth: 2,
        borderTopColor: '#bbbbbb',
        width: '70%',
        color: 'black',
        textAlign: 'center',
        marginTop: 40,
    },
    textInput: {
        paddingHorizontal: 10,
        color: "#ffffff"
    },
    view3: {
        flex: 1,
        marginTop: 15
    }
})