import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config/Constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: 8
    },
    closeIcon:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor : COLORS.white
    },
    profileContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    profileIcon:{
        width: 50,
        height: 50,
        borderRadius: 15 
    },
    profileNameText:{
        ...FONTS.h4,
        color: COLORS.white,
        fontWeight: 'bold'
    },
    profileDescText:{
        ...FONTS.body4,
        color: COLORS.white,
    },
    textContainer:{
        marginStart: 10
    },
    drawerBottomSection:{
        padding:10,
        flex: 1,
        justifyContent: 'flex-end'
    },
    footerText:{
        ...FONTS.body4,
        color: COLORS.white
    },
    itemContainer:{
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    itemImage:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: COLORS.white
    }, 
    itemText:{
        ...FONTS.h3,
        color: COLORS.white,
        marginStart: 10
    }
})

export default styles