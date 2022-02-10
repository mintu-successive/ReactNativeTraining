import { StyleSheet } from "react-native";
import { COLORS } from "../../config/Constants";

const styles = StyleSheet.create({
    container:{
      width: 60,
      backgroundColor: COLORS.primary,
      borderRadius: 50,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center' 
    },
    notSelectedContainer:{
        width: 60,
        backgroundColor: COLORS.lightGray2,
        borderRadius: 50,
        borderColor: COLORS.gray,
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center' 
      },
    subContainer:{
        flex:1,
    },
    dot:{
        width: 15,
        height: 15,
        backgroundColor: COLORS.white,
        borderRadius: 50,
        alignSelf: 'flex-end'
    },
    notSelectedDot:{
        width: 15,
        height: 15,
        backgroundColor: COLORS.gray,
        borderRadius: 50,
        alignSelf: 'flex-start'
    },
})

export default styles