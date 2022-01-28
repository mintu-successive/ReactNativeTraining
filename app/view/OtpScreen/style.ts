import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../config/Constants";

const width = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal:20
    },
    codeInputTextContainer: {
        flexDirection: 'row',
        marginTop: 50,
        alignSelf: 'center'
    },
    textInput: {
        width: width / 4 - 40,
        height: 60,
        backgroundColor: COLORS.gray2,
        marginHorizontal: 10,
        textAlign:'center',
        borderRadius:10
    },
    codeNotReceivedContainer:{
        marginTop:10,
        alignSelf:'center'
    },
    notReceivedText:{
        fontSize: 16,
        fontWeight:'800',
        color: COLORS.gray
    },
    resendText:{
        fontSize: 16,
        fontWeight:'800',
        color: COLORS.primary,
        marginStart:5
    }
})

export default styles