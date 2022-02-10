import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../config/Constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20
    },
    titleText:{
        ...FONTS.h3,
        marginVertical: 10
    },
    itemContainer:{
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemSubContainer:{
        flexDirection: 'row',
    },
    iconContainer:{
        width: SIZES.width*0.2,
        height: SIZES.height*0.1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    icon:{
        width: "75%",
        height: "75%",
        resizeMode: 'contain'
    },
    textContainer:{
        marginStart: 10
    },
    offerTitleText:{
        ...FONTS.h3,
        color: COLORS.black,
        maxWidth: 220
    },
    offerDescText:{
        ...FONTS.body3,
        color: COLORS.gray,
        maxWidth: 200
    },
    offerTimeText:{
        ...FONTS.h4,
        color: COLORS.black
    },
    option:{
        width: 8,
        height: 28,
        resizeMode: 'cover',
        margin: 5
    },
    rightButton:{
        backgroundColor: COLORS.black
    }
})

export default styles