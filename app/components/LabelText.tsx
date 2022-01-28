import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../config/Constants";

const LabelText = ({ style, isError, text, errorMessage }: any) => {
    return (
        <View style={[style, {
            flexDirection: 'row',
            alignItems: 'center',
        }]}>
            <Text style={{ color: COLORS.gray }}>{text}</Text>
            {!isError &&
                <Text style={{
                    position: "absolute",
                    color: COLORS.red,
                    end: 0
                }}>{errorMessage}</Text>
            }
        </View>
    )
}

export default LabelText