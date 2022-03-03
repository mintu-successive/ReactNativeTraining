import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

interface InputProp {
    navigation: any
}

const DestinationSearchScreen = (props: InputProp)=> {
    const {navigation} = props
    return(
        <View style={styles.container}>
            <Text>DestinationSearchScreen</Text>
        </View>
    )
}

export default DestinationSearchScreen