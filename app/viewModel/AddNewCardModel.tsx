import React from "react";
import AddNewCardScreen from "../view/AddNewCardScreen";
import ProfileScreen from "../view/profileScreen/profileScreen";

interface InputProp {
    navigation: any
}

const AddNewCardModel = (props: InputProp) => {
    const {navigation} = props
    return (<AddNewCardScreen navigation={navigation}/>)
}

export default AddNewCardModel