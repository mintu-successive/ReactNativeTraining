import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config/Constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20
    },
    subContainer:{
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
        marginTop: 10,
        padding: 10
    },
    customInput:{
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginTop: 10
    },
    labelText:{
        ...FONTS.h3,
        color: COLORS.gray2,
        marginTop: 5
    },
    saveButton:{
        marginVertical: 10
    }
})

export default styles