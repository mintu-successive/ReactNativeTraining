import React from "react";
import DeliveryStatusScreen from "../view/DeliveryStatusScreen";

interface InputProp {
    navigation: any
}

const DeliveryStatusModel = (props: InputProp) => {
    const {navigation} = props
    return (<DeliveryStatusScreen navigation={navigation}/>)
}

export default DeliveryStatusModel