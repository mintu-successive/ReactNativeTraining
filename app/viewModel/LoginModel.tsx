import React, { useEffect, useState } from "react";
import LoginScreen from '../view/LoginScreen'

interface InputProp {
    navigation: any
}

const LoginModel = (props: InputProp) => {
    const { navigation } = props
    return ( 
        <LoginScreen navigation={navigation}/>
    )
}

export default LoginModel