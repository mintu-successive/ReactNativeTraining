import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config/Constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20
    },
    itemContainer:{
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        justifyContent: 'space-between'
    },
    itemSubContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemIcon:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: COLORS.primary
    },
    textContainer:{
        marginStart: 10
    },
    titleText:{
        ...FONTS.h3,
        color: COLORS.black,
    }
})

export default styles