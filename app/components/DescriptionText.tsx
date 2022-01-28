import React from "react";
import { Text } from "react-native";
import { COLORS, SIZES } from "../config/Constants";

const DescriptionText = ({ text, style }: any) => {
    return (
        <Text style={[style, {
            fontSize: SIZES.h3,
            color: COLORS.gray,
            fontWeight: '500',
            textAlign:'center'
        }]}>{text}</Text>
    )
}

export default DescriptionText