import React, { useEffect, useState } from "react";
import OnBoardingScreen from '../view/OnBoarding';
import {AsyncConstants, constants} from '../config/Constants'
import AsyncStorage from "@react-native-async-storage/async-storage";


interface InputProp {
    navigation: any,
    nextButtonClick: Function,
    startButton: Function,
    index : any
}

const OnBoardingModel = (props: InputProp) => {
    const { navigation, nextButtonClick, startButton, index } = props
    const [onBoardIndex, setOnBoardIndex] = useState(0)

    const onNextButtonClick = () => {
        if ( onBoardIndex < constants.onboarding_screens.length -1) {
            setOnBoardIndex(onBoardIndex+1)
        }
    }

    const goToHomeScreen = () => {
        navigation.replace("Login")
        AsyncStorage.setItem(AsyncConstants.isFirstLaunch,"false")
    }

    return (<OnBoardingScreen navigation={navigation} nextButtonClick={onNextButtonClick}
        index={onBoardIndex} startButton={() => goToHomeScreen()}  />)
}

export default OnBoardingModel