import React from "react";
import EditAccountScreen from "../view/EditAccountScreen";

interface InputProp {
    navigation: any
}

const EditAccountModel = (props: InputProp) => {
    const {navigation} = props
    return (<EditAccountScreen navigation={navigation}/>)
}

export default EditAccountModel