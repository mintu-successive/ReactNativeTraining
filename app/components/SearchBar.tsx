import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, icons, images } from '../config/Constants'

const SearchBar = ({ style, value, onChangeText, onFilterPress }: any) => {
    return (
        <View style={[style, styles.container]}>
            <View style={styles.subContainer}>
                <View style={styles.inputTextContainer}>
                    <Image style={styles.searchIcon}
                        source={icons.search} />
                    <TextInput
                        keyboardType="default"
                        onChangeText={(text) => onChangeText(text)}
                        value={value}
                        placeholder="Search Food..." />
                </View>
                <TouchableOpacity onPress={()=> onFilterPress()}>
                    <Image style={styles.searchIcon}
                        source={icons.filter} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    subContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray2,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    inputTextContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        width: 30,
        height: 30
    }
})