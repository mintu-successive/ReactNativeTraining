import React, { useEffect, useRef, useState } from "react";
import { Alert, ColorValue } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, ValidationTypes } from "../config/Constants";
import { validateEmail, validateUserName } from "../config/Validation";
import LoginScreen from '../view/LoginScreen'

interface InputProp {
    navigation: any
    data: {
        isSignIn: boolean,
        buttonText: string,
        button2Text: string,
        switchPageDescText: string,
        isValidEmail: boolean,
        isValidUserName: boolean,
        isValidPassword: boolean,
        emailIcon: {
            name: string,
            color: string
        },
        userNameIcon: {
            name: string,
            color: string
        },
        passwordIcon: {
            name: string,
            color: string
        },
    },
    switchToSignUp: Function
    customButtonClick: Function
}

const LoginModel = (props: InputProp) => {
    const { navigation } = props
    const [isSignIn, setIsSignIn] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [data, setData] = useState({
        emailIcon: { name: 'checkmark-circle-outline', color: COLORS.gray },
        userNameIcon: { name: 'checkmark-circle-outline', color: COLORS.gray },
        passwordIcon: { name: 'eye', color: COLORS.gray },
        isSignIn: isSignIn,
        buttonText: isSignIn ? "Sign In" : "Sign Up",
        button2Text: !isSignIn ? "Sign In" : "Sign Up",
        switchPageDescText: isSignIn ? "Don't have an account?" :
            "Already have an account?",
        isValidEmail: true,
        isValidUserName: true,
        isValidPassword: true,
    })

    useEffect(() => {
        setData({
            ...data,
            isSignIn: isSignIn,
            buttonText: isSignIn ? "Sign In" : "Sign Up",
            button2Text: !isSignIn ? "Sign In" : "Sign Up",
            switchPageDescText: isSignIn ? "Don't have an account?" :
                "Already have an account?",
            isValidEmail: true
        })
    }, [isSignIn, email])

    // const emailRef = useRef(TextInput).current

    const switchToSignUp = (isSignIn: boolean) => {
        setIsSignIn(!isSignIn)
        setEmail("")
    }

    const customButtonClick = () => {
        if (isSignIn) {
            login()
        } else {
            signUp()
        }
    }

    const login = async () => {
        let isValidEmail = await validateEmail(email)
        if (!isValidEmail) {
            setData({
                ...data,
                emailIcon: { name: 'close-circle-outline', color: COLORS.red },
                isValidEmail: false
            })
            return
        } else {
            setData({
                ...data,
                emailIcon: { name: 'checkmark-circle-outline', color: COLORS.green },
                isValidEmail: true
            })

            setTimeout(() => {
                if (password.length < 9) {
                    setData({
                        ...data,
                        isValidPassword: false
                    })
                    return
                } else {
                    setData({
                        ...data,
                        isValidPassword: true
                    })
                }

                Alert.alert("SIGNING IN...", `${email + " " + password}`)
            }, 100);
        }
    }

    const signUp = async () => {
        try {
            let isValidEmail = await validateEmail(email)
            let validUserName = await validateUserName(username)


            console.log(isValidEmail, validUserName)
            if (isValidEmail) {
                setData({
                    ...data,
                    emailIcon: { name: 'checkmark-circle-outline', color: "green" },
                    isValidEmail: true
                })
            } else {
                Alert.alert("invalid email")
                setData({
                    ...data,
                    emailIcon: { name: 'close-circle-outline', color: COLORS.red },
                    isValidEmail: false
                })
            }

            if (validUserName && isValidEmail) {
                setData({
                    ...data,
                    userNameIcon: { name: 'checkmark-circle-outline', color: COLORS.green },
                    isValidUserName: true
                })
            } else {
                Alert.alert("invalid username")
                setData({
                    ...data,
                    userNameIcon: { name: 'close-circle-outline', color: COLORS.red },
                    isValidUserName: false
                })
            }


            // if (!isValidEmail) {
            //     setData({
            //         ...data,
            //         emailIcon: { name: 'close-circle-outline', color: COLORS.red },
            //         isValidEmail: false
            //     })
            //     return
            // } else {
            //     setData({
            //         ...data,
            //         emailIcon: { name: 'checkmark-circle-outline', color: COLORS.green },
            //         isValidEmail: true
            //     })

            // setTimeout(() => {

            //     if (!validUserName) {
            //         setData({
            //             ...data,
            //             userNameIcon: { name: 'close-circle-outline', color: COLORS.red },
            //             isValidUserName: false
            //         })
            //         return
            //     } else {
            //         setData({
            //             ...data,
            //             userNameIcon: { name: 'checkmark-circle-outline', color: COLORS.green },
            //             isValidUserName: true
            //         })
            //         setTimeout(() => {
            //             if (password.length < 9) {
            //                 setData({
            //                     ...data,
            //                     isValidPassword: false
            //                 })
            //                 return
            //             } else {
            //                 setData({
            //                     ...data,
            //                     isValidPassword: true
            //                 })
            //             }

            //             switchToSignUp(isSignIn)

            //         }, 200);
            //     }
            // }, 200);
            // }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <LoginScreen navigation={navigation} data={data}
            email={email}
            switchToSignUp={() => switchToSignUp(isSignIn)}
            customButtonClick={() => customButtonClick()}
            onChangeEmailText={(item: string) => setEmail(item)}
            onChangeUserNameText={(item: string) => setUserName(item)}
            onChangePasswordText={(item: string) => setPassword(item)} />
    )
}

export default LoginModel