import React from "react";
import { Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, images, SIZES } from "../config/Constants";

// interface InputProp {
//     style: any,
//     keyboardType: any,
//     onChangeText: (item: any) => void,
//     e
// }

const CustomTextInput = ({ style, keyboardType, onChangeText, email, placeHolder }: any) => {
    // const { style, keyboardType, onChangeText, email } = props
    return (
        <TextInput style={[style, {
            backgroundColor: COLORS.lightGray1,
            borderRadius: 5,
            width: '100%'
        }]}
            keyboardType={keyboardType}
            onChangeText={(text) => onChangeText(text)}
            value={email}
            placeholder={placeHolder} />
    )
}

export default CustomTextInput