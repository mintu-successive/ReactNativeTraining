import React from "react";
import { Image } from "react-native";
import { images, SIZES } from "../config/Constants";

interface InputProp {
    style: any,
}

const HeaderLogo = (props: InputProp) => {
    const { style } = props
    return (
        <Image style={[style, {
            width: SIZES.width,
            height: '10%',
            marginTop: 5,
            alignSelf: 'center'
        }]}
            source={images.logo_02}
            resizeMode="contain" />
    )
}

export default HeaderLogo