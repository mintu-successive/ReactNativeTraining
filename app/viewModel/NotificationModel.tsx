import React from "react";
import NotificationScreen from "../view/NotificationScreen";
import ProfileScreen from "../view/profileScreen/profileScreen";

interface InputProp {
    navigation: any
}

const NotificationModel = (props: InputProp) => {
    const {navigation} = props
    return (<NotificationScreen navigation={navigation}/>)
}

export default NotificationModel