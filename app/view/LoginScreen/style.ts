import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../config/Constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    textInputLabel: {
        color: COLORS.gray
    },
    textInput: {
        backgroundColor: COLORS.lightGray1,
        borderRadius: 5,
        width: '100%'
    },
    dotContainer: {
        width: 40,
        height: 20,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 10,
        padding: 5
    },
    dot: {
        backgroundColor: COLORS.gray,
        flex: 1,
        width: 10,
        borderRadius: 20
    },
    forgotPasswordText: {
        color: COLORS.gray,
        fontWeight: '500'
    },
    saveMeText: {
        marginStart: 10,
        color: COLORS.gray,
        fontWeight: '500'
    },
    dontHaveAccountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10
    },
    signUpText: {
        marginStart: 10,
        color: COLORS.primary,
        fontWeight: '800'
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    invalidEmail: {
        position: "absolute",
        color: COLORS.red,
        end: 0
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    facebookButtonContainer: {
        backgroundColor: COLORS.blue,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: '100%'
    },
    facebookButtonText: {
        fontSize: 16,
        fontWeight: '800',
        color: COLORS.white,
        paddingVertical: 15,
        marginStart: 10
    },
    googleButtonContainer: {
        backgroundColor: COLORS.lightGray1,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: '100%',
        marginVertical: 10
    },
    googleButtonText: {
        fontSize: 16,
        fontWeight: '800',
        color: COLORS.black,
        paddingVertical: 15,
        marginStart: 10,
    }
})

export default styles