import React from "react";
import { Text } from "react-native";
import { COLORS, SIZES } from "../config/Constants";


const TitleText = ({ text, style }: any) => {
    return (
        <Text style={[style, {
            fontSize: SIZES.h2,
            color: COLORS.black,
            fontWeight: '800',
        }]}>{text}</Text>
    )
}

export default TitleText