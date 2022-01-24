import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../config/Constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems:'center'
    },
    logo: {
        position: 'absolute',
        width: 200,
        height: 60,
        alignSelf: 'center',
        marginTop:40
    },
    bannerImage: {
        width: '100%',
        position: 'absolute',
        marginTop: 160,
        alignSelf: 'center'
    },
    title: {
        fontSize: SIZES.h1,
        color: COLORS.black,
        fontWeight: '800',
        alignSelf: 'center',
        position:'absolute',
        bottom: 200
    },
    description: {
        fontSize: SIZES.h3,
        color: COLORS.gray,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 20,
        marginHorizontal: 40,
        textAlign: 'center',
        position:'absolute',
        bottom: 120
    },
    footer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        bottom: 20,
        position: 'absolute',
        width: '100%'
    },
    skipButton: {
        marginStart: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    skipButtonText:{
        fontSize:16,
        fontWeight:'500'
    },
    nextButton : {
        marginEnd: 20,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        alignItems:'center',
        justifyContent:'center'
    },
    nextButtonText:{
        fontSize: 16,
        color: COLORS.white,
        width:'100%',
        paddingVertical:15,
        paddingHorizontal: 80,
    },
    startButton:{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        bottom: 20,
        position:'absolute'
    },
    startButtonText:{
        fontSize: 16,
        color: COLORS.white,
        width:'100%',
        paddingVertical:15,
        paddingHorizontal: 80,
    },
    pagination:{
        position:'absolute'
    },
    dot:{
        height:10,
        borderRadius:1,
        backgroundColor: "#fff",
        marginHorizontal:8
    }
})

export default styles