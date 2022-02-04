import React from "react";
import CheckoutScreen from "../view/CheckoutScreen";

interface InputProp {
    navigation: any
}

const CheckoutModel = (props: InputProp) => {
    const {navigation} = props
    return (<CheckoutScreen navigation={navigation}/>)
}

export default CheckoutModel