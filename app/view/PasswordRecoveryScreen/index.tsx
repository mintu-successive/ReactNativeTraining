import React from "react";
import { View } from "react-native";
import { CustomButton, CustomTextInput, DescriptionText, HeaderLogo, LabelText, TitleText } from "../../components";
import styles from "./style";
import { constants } from "../../config/Constants";

interface InputProp {
    navigation: any,
    email: string,
    isValidEmail: boolean,
    emailIcon: string,
    emailIconColor: string,
    onChangeEmailText: (text: string) => void
    onSendEmailPress: () => void
}

const PasswordRecoveryScreen = (props: InputProp) => {
    const {
        navigation,
        email,
        isValidEmail,
        emailIcon,
        emailIconColor,
        onChangeEmailText,
        onSendEmailPress
    } = props
    return (
        <View style={styles.container}>
            <HeaderLogo />

            <TitleText style={{
                marginTop: 50,
                alignSelf: 'center'
            }}
                text="Password Recovery" />

            <DescriptionText
                style={{
                    alignSelf: 'center',
                    alignContent: 'center',
                    marginHorizontal: 40,
                    marginTop: 10
                }}
                text="Please enter your email address to recover your password" />

            <LabelText
                style={{
                    marginTop: 50,
                    marginHorizontal: 20
                }}
                text={"Email"}
                errorMessage={"Invalid Email"}
                isError={isValidEmail} />

            <CustomTextInput
                style={{
                    marginHorizontal: 20,
                    marginTop: 10
                }}
                value={email}
                iconName={emailIcon}
                iconColor={emailIconColor}
                isError={isValidEmail}
                onChangeText={(text: string) => onChangeEmailText(text)}
            />

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <CustomButton style={{
                    marginBottom: 10,
                    marginHorizontal: 20
                }}
                    onPress={() => onSendEmailPress()}
                    text="Send Email" />
            </View>
        </View>
    )
}

export default PasswordRecoveryScreen