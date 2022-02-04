import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../config/Constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        paddingHorizontal:20
    },
    successContainer:{
        flex:0.8,
        alignItems:'center',
        justifyContent:'center'
    },
    successImage:{
        width: SIZES.width*0.4,
        height: SIZES.height* 0.3,
        resizeMode: 'contain'
    },
    congratsText:{
        ...FONTS.h1,
        color: COLORS.black,
    },
    messageText:{
        ...FONTS.body3,
        color: COLORS.gray,
    },
    customButtonContainer:{
        flex:0.2,
        justifyContent:'flex-end',
    },
    customButton:{
        marginBottom:10
    }
})

export default styles