import React from "react";
import SettingsScreen from "../view/SettingsScreen";

interface InputProp {
    navigation: any
}

const SettingsModel = (props: InputProp) => {
    const {navigation} = props
    return (<SettingsScreen navigation={navigation}/>)
}

export default SettingsModel