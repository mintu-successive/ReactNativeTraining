import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config/Constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20
    },
    subContainer:{
        backgroundColor: COLORS.lightGray2,
        borderRadius: 20,
        padding: 10,
        marginTop: 20
    },
    labelText:{
        ...FONTS.body3,
        color: COLORS.gray,
        marginVertical: 5
    },
    buttonContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginVertical: 10
    }
})

export default styles