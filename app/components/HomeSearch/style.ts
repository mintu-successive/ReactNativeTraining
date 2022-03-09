import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
    },
    inputBox:{
        backgroundColor: '#e7e7e7',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
        padding: 10       
    },
    inputText:{
        fontSize: 20,
        fontWeight: '600',
        color: '#535353'
    },
    timeContainer:{
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center'
    },
    previousDestinationBox:{
        flexDirection: 'row',
        padding:20,
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb'
    },
    iconsContaiiner:{
        backgroundColor: '#b3b3b3',
        padding:10,
        borderRadius: 25
    },
    destinationText:{
        marginStart: 10,
        fontWeight: '600',
        fontSize: 16
    }
})

export default styles