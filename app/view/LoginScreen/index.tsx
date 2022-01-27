import React from "react";
import { ScrollView, TextInput, Image, KeyboardAvoidingView, Switch, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { COLORS, constants, images, SIZES } from '../../config/Constants'
import { CustomButton, DescriptionText, TitleText } from "../../components";
import Ionicons from 'react-native-vector-icons/Ionicons'

interface InputProp {
    navigation: any
}

const LoginScreen = (props: InputProp) => {
    const { navigation } = props
    return (
        // <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex:1 }}>
        <View style={styles.container}>

            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                <Image style={styles.logo}
                    source={images.logo_02}
                    resizeMode="contain" />

                <View style={{ flex: 1 }}>

                    <View style={{ backgroundColor: 'blue' }}>
                        <TitleText
                            style={{
                                marginTop: 20,
                                alignSelf: 'center'
                            }}
                            text="Let's Sign You In" />

                        <DescriptionText text="Welcome back, you've been missed"
                            style={{
                                marginTop: 5,
                                alignSelf: 'center'
                            }} />

                        <Text style={[styles.textInputLabel, { marginTop: 30 }]}>Email</Text>

                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.textInput}
                                secureTextEntry
                                keyboardType="email-address" />

                            <Ionicons name="checkmark-circle-outline" size={20} color={COLORS.gray}
                                style={{ position: 'absolute', end: 10 }} />
                        </View>

                        <Text style={[styles.textInputLabel, { marginTop: 10 }]}>Password</Text>


                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.textInput}
                                secureTextEntry />

                            <Ionicons name="eye" size={20} color={COLORS.gray}
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

                        <CustomButton text="Sign In"
                            click={() => { }}
                            style={{
                                marginTop: 20
                            }} />

                        <TouchableOpacity>
                            <View style={styles.dontHaveAccountContainer}>
                                <DescriptionText text="Don't have an account?"
                                    style={{ alignSelf: 'center' }} />
                                <Text style={styles.signUpText}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'green' }}>
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

            {/* </ScrollView> */}

        </View>
        </ScrollView>
        // </KeyboardAvoidingView>
    )
}

export default LoginScreen