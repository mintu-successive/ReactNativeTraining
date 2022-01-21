import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

interface InputProp {
    navigation: any
}

const HomeScreen = (props: InputProp)=> {
    const {navigation} = props
    return(
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={()=> {navigation.navigate("Profile")}}>
                <Text>Go to ProfileScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen