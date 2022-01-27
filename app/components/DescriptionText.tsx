import React from "react";
import { Text } from "react-native";
import { COLORS, SIZES } from "../config/Constants";

interface InputProp {
    text: string
    style: any
}

const DescriptionText = (props: InputProp) => {
    const { text, style } = props
    return (
        <Text style={[style, {
            fontSize: SIZES.h3,
            color: COLORS.gray,
            fontWeight: '500',
        }]}>{text}</Text>
    )
}

export default DescriptionText