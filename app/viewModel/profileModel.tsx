import React from "react";
import ProfileScreen from "../view/profileScreen/profileScreen";

interface InputProp {
    navigation: any
}

const ProfileModel = (props: InputProp) => {
    const {navigation} = props
    return (<ProfileScreen navigation={navigation}/>)
}

export default ProfileModel