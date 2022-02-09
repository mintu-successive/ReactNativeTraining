import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../config/Constants";

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white
    },
    flatListContainer:{
        backgroundColor: COLORS.lightGray2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        flex: 1
    },
    itemContainer:{
        justifyContent: 'center'
    },
    itemIcon:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
        tintColor: COLORS.primary
    },
    nameText:{
        ...FONTS.body2,
        color: COLORS.black,
        marginStart: 20
    },
    divider:{
        borderWidth: 0.7,
        borderColor: COLORS.gray3,
        marginVertical: 20,
        width: '100%'
    },
    subItemContainer:{
        flexDirection: 'row',
    }
})

export default styles