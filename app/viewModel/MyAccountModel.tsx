import React from "react";
import MyAccountScreen from "../view/MyAccount";

interface InputProp {
    navigation: any
}

const MyAccountModel = (props: InputProp) => {
    const {navigation} = props
    return (<MyAccountScreen navigation={navigation}/>)
}

export default MyAccountModel