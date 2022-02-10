import React from "react";
import NotificationTabScreen from "../view/NotificaionTabScreen";
import ProfileScreen from "../view/profileScreen/profileScreen";

interface InputProp {
    navigation: any
}

const NotificationTabModel = (props: InputProp) => {
    const {navigation} = props
    return (<NotificationTabScreen navigation={navigation}/>)
}

export default NotificationTabModel