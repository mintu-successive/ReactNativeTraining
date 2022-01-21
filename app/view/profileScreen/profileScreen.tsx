import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

interface InputProp {
    navigation: any
}

const ProfileScreen = (props: InputProp)=> {
    const {navigation} = props
    return(
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <TouchableOpacity onPress={()=> {navigation.navigate("Home")}}>
                <Text>Go to HomeScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen