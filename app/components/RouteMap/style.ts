import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: 300,
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapView:{
        width: '100%',
        height: '100%',
    },
    marker:{
        width: 70,
        height: 70,
        resizeMode: 'contain'
    }
})

export default styles