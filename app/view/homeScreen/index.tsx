import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Header, SearchBar } from "../../components";
import { COLORS } from "../../config/Constants";
import styles from "./style";

interface InputProp {
    navigation: any,
}

const HomeScreen = (props: InputProp) => {
    const { navigation } = props
    return (
        <View style={styles.container}>
            {/* <StatusBar translucent backgroundColor={COLORS.primary} {...props} /> */}

            <Header title="HOME" />

            <SearchBar />
        </View>
    )
}

export default HomeScreen