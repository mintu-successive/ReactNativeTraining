import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeModel, ProfileModel, OnBoardingModel } from "../viewModel";
import LoginModel from "../viewModel/LoginModel";
import PasswordRecoveryModel from "../viewModel/PasswordRecoveryModel";
import OtpModel from "../viewModel/OtpModel";

type RootStackList = {
    OnBoarding: undefined,
    Home: undefined,
    Profile: undefined,
    Login: undefined,
    PasswordRecovery: undefined,
    Otp: undefined
}

const Stack = createStackNavigator<RootStackList>()

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Otp">
                <Stack.Screen name="Otp" component={OtpModel}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryModel}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="Login" component={LoginModel}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="OnBoarding" component={OnBoardingModel}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="Home" component={HomeModel}
                    options={{
                        headerLeft: () => null,
                    }} />
                <Stack.Screen name="Profile" component={ProfileModel} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator