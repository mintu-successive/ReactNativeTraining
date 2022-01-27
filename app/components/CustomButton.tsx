import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../config/Constants";

interface InputProp {
    text: string
    style: any,
    click: Function
}

const CustomButton = (props: InputProp) => {
    const { text, style, click } = props
    return (
        <TouchableOpacity style={[style, {
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center'
        }]}
            onPress={() => click}>
            <Text style={{
                fontSize: 16,
                fontWeight:'800',
                color: COLORS.white,
                paddingVertical: 15,
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton