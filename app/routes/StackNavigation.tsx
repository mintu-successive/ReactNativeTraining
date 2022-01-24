import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeModel, ProfileModel, OnBoardingModel } from "../viewModel";

type RootStackList = {
    OnBoarding: undefined,
    Home: undefined,
    Profile: undefined
}

const Stack = createStackNavigator<RootStackList>()

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="OnBoarding">
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