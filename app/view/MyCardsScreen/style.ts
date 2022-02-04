import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config/Constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        paddingHorizontal:20
    },
    myCardsFlatList:{
        marginTop:10
    },
    allCardsFlatList:{
        marginVertical:10,
    },
    allCardsHeader:{
        ...FONTS.h3,
        color: COLORS.black,
        marginBottom:5
    },
    myCardsContainer:{
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: COLORS.lightGray1,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        justifyContent:'space-between'
    },
    selectedContainer:{
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: COLORS.primary,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        justifyContent:'space-between'
    },
    subContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    nameText:{
        ...FONTS.h3,
        color: COLORS.black,
        marginStart:10
    },
    selectionBox:{
        width:20,
        height:20,
        resizeMode:'contain'
    },
    itemIconContainer:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5,
        borderColor: COLORS.lightGray2,
        borderWidth: 1
    },
    itemIcon:{
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})

export default styles