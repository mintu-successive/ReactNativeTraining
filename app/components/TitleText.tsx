import React from "react";
import { Text } from "react-native";
import { COLORS, SIZES } from "../config/Constants";

interface InputProp {
    text: string
    style: any
}

const TitleText = (props: InputProp) => {
    const { text, style } = props
    return (
        <Text style={[style, {
            fontSize: SIZES.h2,
            color: COLORS.black,
            fontWeight: '800',
        }]}>{text}</Text>
    )
}

export default TitleText