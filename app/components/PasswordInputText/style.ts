import { StyleSheet } from "react-native";
import { COLORS } from "../../config/Constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.white,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15
    },
    inputText:{
        backgroundColor: COLORS.white,
        flex: 0.9
    },
    buttonContainer:{
        flex: 0.1,
        alignItems: 'center',
        paddingStart: 5
    },
    icon:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: COLORS.gray
    }
})

export default styles