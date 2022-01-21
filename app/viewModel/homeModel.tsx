import React from "react";
import HomeScreen from "../view/homeScreen/homeScreen";

interface InputProp {
    navigation: any
}

const HomeModel = (props: InputProp) => {
    const {navigation} = props
    return (<HomeScreen navigation={navigation} />)
}

export default HomeModel