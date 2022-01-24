import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { COLORS, constants, images } from '../../config/Constants'

interface InputProp {
    navigation: any,
    nextButtonClick: Function,
    startButton: Function,
    index: any
}

const OnBoarding = (props: InputProp) => {
    const { navigation, nextButtonClick, startButton, index } = props
    return (
        <View style={styles.container}>

            <StatusBar translucent backgroundColor={COLORS.primary} {...props} />

            <Image
                source={constants.onboarding_screens[index].backgroundImage}
                style={{ width: '100%' }}
                resizeMode={"stretch"} />

            <Image
                source={images.logo_02}
                style={styles.logo}
                resizeMode={"stretch"} />

            <Image
                source={constants.onboarding_screens[index].bannerImage}
                style={styles.bannerImage}
                resizeMode={"contain"} />

            <Text style={styles.title}>{constants.onboarding_screens[index].title}</Text>

            <Text style={styles.description}>{constants.onboarding_screens[index].description}</Text>

            {/* <View style={{ flexDirection: 'row', height: 64, position: 'absolute', backgroundColor:'red' }}>
                {constants.onboarding_screens.map((_, i) => {
                    return <View style={[styles.dot, { width: 10, height:10 }]} key={i.toString()} />
                })}
            </View> */}

            {index != 2 ?
                <View style={styles.footer}>

                    <TouchableOpacity style={styles.skipButton}
                        onPress={() => startButton()}>
                        <Text style={styles.skipButtonText}>Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextButton}
                        onPress={() => nextButtonClick()}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>

                </View> :
                <View style={styles.startButton}>
                    <TouchableOpacity
                        onPress={() => startButton()}>
                        <Text style={styles.startButtonText}>Let's Get Started</Text>
                    </TouchableOpacity>
                </View>

            }

        </View>
    )
}

export default OnBoarding