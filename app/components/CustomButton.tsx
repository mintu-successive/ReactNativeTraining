import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../config/Constants";

const CustomButton = ({ text, style, onPress }: any) => {
    return (
        <TouchableOpacity style={[style, {
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center'
        }]}
            onPress={() => onPress()}>
            <Text style={{
                fontSize: 16,
                fontWeight: '800',
                color: COLORS.white,
                paddingVertical: 15,
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton