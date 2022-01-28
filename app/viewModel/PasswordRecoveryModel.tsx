import React, { useEffect, useState } from "react";
import PasswordRecoveryScreen from "../view/PasswordRecoveryScreen";
import { COLORS, constants } from '../config/Constants'
import { validateEmail } from "../config/Validation";
import { Alert } from "react-native";

interface InputProp {
    navigation: any
}

const PasswordRecoveryModel = (props: InputProp) => {
    const { navigation } = props
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [emailIcon, setEmailIcon] = useState('')
    const [emailIconColor, setEmailIconColor] = useState('')

    useEffect(() => {
        setEmailIcon(constants.CHECK_ICON)
        setEmailIconColor(COLORS.gray)
    }, [])

    const sendEmail =async () => {
        let isEmailValidated = await validateEmail(email)
        if(isEmailValidated){
            setIsValidEmail(true)
            setEmailIcon(constants.CHECK_ICON)
            setEmailIconColor(COLORS.green)

            setTimeout(() => {
                Alert.alert('Email Sent!!!')
            }, 500);
        }else{
            setIsValidEmail(false)
            setEmailIcon(constants.CLOSE_ICON)
            setEmailIconColor(COLORS.red)
        }
    }

    return (
        <PasswordRecoveryScreen
            navigation={navigation}
            email={email}
            isValidEmail={isValidEmail}
            emailIcon={emailIcon}
            emailIconColor={emailIconColor}
            onChangeEmailText={(text:string)=> setEmail(text)}
            onSendEmailPress={()=>sendEmail()}
        />
    )
}

export default PasswordRecoveryModel