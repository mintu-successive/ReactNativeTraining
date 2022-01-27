import React, { useState } from "react";
import { ScrollView, TextInput, Image, KeyboardAvoidingView, Switch, Text, TouchableOpacity, View, ColorValue } from "react-native";
import styles from "./style";
import { COLORS, constants, images, SIZES } from '../../config/Constants'
import { CustomButton, CustomTextInput, DescriptionText, HeaderLogo, TitleText } from "../../components";
import Ionicons from 'react-native-vector-icons/Ionicons'

interface InputProp {
    navigation: any,
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
    switchToSignUp: Function,
    customButtonClick: Function,
    onChangeEmailText: (item: string) => void,
    onChangeUserNameText: (item: string) => void,
    onChangePasswordText: (item: string) => void,
    email: string
}

const LoginScreen = (props: InputProp) => {
    const { navigation, data, switchToSignUp, customButtonClick,
        onChangeEmailText, onChangePasswordText, onChangeUserNameText, email } = props
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>

                <HeaderLogo style={{}} />

                <View style={{}}>

                    <View style={{}}>
                        <TitleText
                            style={{
                                marginTop: 10,
                                alignSelf: 'center'
                            }}
                            text="Let's Sign You In" />

                        <DescriptionText text="Welcome back, you've been missed"
                            style={{
                                marginTop: 5,
                                alignSelf: 'center'
                            }} />

                        <View style={styles.labelContainer}>
                            <Text style={styles.textInputLabel}>Email</Text>
                            {!data.isValidEmail &&
                                <Text style={styles.invalidEmail}>Invalid Email</Text>
                            }
                        </View>

                        <View style={styles.textInputContainer}>
                            <CustomTextInput style={{}}
                                keyboardType={"default"}
                                email={email}
                                placeHolder={"Enter email ID"}
                                onChangeText={(item) => onChangeEmailText(item)} />

                            <Ionicons name={data.emailIcon.name} size={20} color={data.emailIcon.color}
                                style={{ position: 'absolute', end: 10 }} />
                        </View>

                        {!data.isSignIn &&
                            <View>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.textInputLabel}>Username</Text>
                                    {!data.isValidUserName &&
                                        <Text style={styles.invalidEmail}>Invalid Username</Text>
                                    }
                                </View>

                                <View style={styles.textInputContainer}>
                                    <CustomTextInput style={{}}
                                        keyboardType={"default"}
                                        onChangeText={(item) => onChangeUserNameText(item)} />

                                    <Ionicons name={data.userNameIcon.name} size={20} color={data.userNameIcon.color}
                                        style={{ position: 'absolute', end: 10 }} />
                                </View>
                            </View>
                        }

                        <View style={styles.labelContainer}>
                            <Text style={[styles.textInputLabel, { marginTop: 10 }]}>Password</Text>
                            {!data.isValidPassword &&
                                <Text style={styles.invalidEmail}>Password must be 9 characters</Text>
                            }
                        </View>

                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.textInput}
                                secureTextEntry
                                onChangeText={(item) => onChangePasswordText(item)} />

                            <Ionicons name={data.passwordIcon.name} size={20} color={data.passwordIcon.color}
                                style={{ position: 'absolute', end: 10 }} />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                            paddingVertical: 2
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity>
                                    <View style={styles.dotContainer}>
                                        <View style={styles.dot}></View>
                                    </View>
                                </TouchableOpacity>

                                <Text style={styles.saveMeText}>Save Me</Text>

                            </View>
                            <TouchableOpacity>
                                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                        <CustomButton text={data.buttonText}
                            click={() => customButtonClick()}
                            style={{
                                marginTop: 10
                            }} />

                        <TouchableOpacity onPress={() => switchToSignUp()}>
                            <View style={styles.dontHaveAccountContainer}>
                                <DescriptionText text={data.switchPageDescText}
                                    style={{ alignSelf: 'center' }} />
                                <Text style={styles.signUpText}>{data.button2Text}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.facebookButtonContainer}
                        onPress={() => { }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="logo-facebook" size={20} color={COLORS.white}
                                style={{ paddingVertical: 15, }} />
                            <Text style={styles.facebookButtonText}>Continue With Facebook</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.googleButtonContainer}
                        onPress={() => { }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="logo-google" size={20} color={COLORS.red}
                                style={{ paddingVertical: 15, }} />
                            <Text style={styles.googleButtonText}>Continue With Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default LoginScreen