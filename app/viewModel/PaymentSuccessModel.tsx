import React from "react";
import PaymentSuccessScreen from "../view/PaymentSuccessScreen";
import ProfileScreen from "../view/profileScreen/profileScreen";

interface InputProp {
    navigation: any
}

const PaymentSuccessModel = (props: InputProp) => {
    const {navigation} = props
    return (<PaymentSuccessScreen navigation={navigation}/>)
}

export default PaymentSuccessModel