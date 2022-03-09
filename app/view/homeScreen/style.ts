import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    homeMapContainer:{
        flex: 0.6,
    },
    searchContainer:{
        flex: 0.4,
        justifyContent: 'flex-end',
    }
})

export default styles