import React from "react";
import ChangePasswordScreen from "../view/ChangePasswordScreen";

interface InputProp {
    navigation: any
}

const ChangePasswordModel = (props: InputProp) => {
    const {navigation} = props
    return (<ChangePasswordScreen navigation={navigation}/>)
}

export default ChangePasswordModel