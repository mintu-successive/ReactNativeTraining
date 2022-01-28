import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import OtpScreen from "../view/OtpScreen";

interface InputProp {
    navigation: any
}

const OtpModel = (props: InputProp) => {
    const { navigation } = props
    const [code1, setCode1] = useState("")
    const [code2, setCode2] = useState("")
    const [code3, setCode3] = useState("")
    const [code4, setCode4] = useState("")

    useEffect(() => {
    }, [])

    const onContinuePress = () => {
        let code = ""
        let result = code.concat(code1,code2,code3,code4)
        console.log(result)
        if(result == "1234"){
            Alert.alert("OTP Verified!!!")
        }else{
            Alert.alert("OTP Verification Failed!!!")
        }
    }

    return (
        <OtpScreen
            code1={code1}
            code2={code2}
            code3={code3}
            code4={code4}
            onCode1Change={(code:string)=>setCode1(code)}
            onCode2Change={(code:string)=>setCode2(code)}
            onCode3Change={(code:string)=>setCode3(code)}
            onCode4Change={(code:string)=>setCode4(code)}
            onContinuePress={()=>onContinuePress()}
            navigation={navigation} />
    )
}

export default OtpModel