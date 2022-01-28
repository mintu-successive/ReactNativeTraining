import React from "react";
import { Image, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, images, SIZES } from "../config/Constants";
import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomTextInput = ({
    style,
    keyboardType,
    onChangeText,
    value,
    placeHolder,
    iconName,
    iconColor
}: any) => {
    return (
        <View style={[style,{
            flexDirection: 'row',
            alignItems: 'center',
        }]}>
            <TextInput style={{
                backgroundColor: COLORS.lightGray1,
                borderRadius: 5,
                width:'100%'
            }}
                keyboardType={keyboardType}
                onChangeText={(text) => onChangeText(text)}
                value={value}
                placeholder={placeHolder} />

            <Ionicons name={iconName} size={20} color={iconColor}
                style={{ position: 'absolute', end: 10 }} />
        </View>
    )
}

export default CustomTextInput