import React, {useState} from 'react';
import {
  ScrollView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Switch,
  Text,
  TouchableOpacity,
  View,
  ColorValue,
} from 'react-native';
import styles from './style';
import {COLORS, constants, images, SIZES} from '../../config/Constants';
import {
  CustomButton,
  CustomTextInput,
  DescriptionText,
  HeaderLogo,
  TitleText,
} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface InputProp {
  navigation: any;
  switchToSignUp: Function;
  customButtonClick: Function;
  email: string;
  password: string;
  username: string;
  isSignIn: boolean;
  isValidEmail: boolean;
  isValidUserName: boolean;
  isValidPassword: boolean;
  emailIconName: string;
  emailIconColor: string;
  userNameIconName: string;
  userNameIconColor: string;
  passwordIconName: string;
  passwordIconColor: string;
  submitButtonText: string;
  switchButtonText: string;
  switchText: string;
  onChangeEmailText: (item: string) => void;
  onChangeUserNameText: (item: string) => void;
  onChangePasswordText: (item: string) => void;
}

const LoginScreen = (props: InputProp) => {
  const {
    navigation,
    switchToSignUp,
    customButtonClick,
    onChangeEmailText,
    onChangePasswordText,
    onChangeUserNameText,
    email,
    password,
    username,
    isSignIn,
    isValidEmail,
    isValidUserName,
    isValidPassword,
    emailIconName,
    emailIconColor,
    userNameIconName,
    userNameIconColor,
    passwordIconName,
    passwordIconColor,
    submitButtonText,
    switchButtonText,
    switchText,
  } = props;
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <HeaderLogo style={{}} />

        <View>
          <View>
            <TitleText
              style={{
                marginTop: 10,
                alignSelf: 'center',
              }}
              text={isSignIn?"Let's Sign You In": "Getting Started"}
            />

            <DescriptionText
              text={isSignIn?"Welcome back, you've been missed":"Create an account to continue!"}
              style={{
                marginTop: 5,
                alignSelf: 'center',
              }}
            />

            <View style={styles.labelContainer}>
              <Text style={styles.textInputLabel}>Email</Text>
              {!isValidEmail && (
                <Text style={styles.invalidEmail}>Invalid Email</Text>
              )}
            </View>

            <CustomTextInput
              style={{marginTop: 10}}
              keyboardType={'default'}
              value={email}
              onChangeText={(text: string) => onChangeEmailText(text)}
              iconName={emailIconName}
              iconColor={emailIconColor}
            />

            {!isSignIn && (
              <View>
                <View style={styles.labelContainer}>
                  <Text style={styles.textInputLabel}>Username</Text>
                  {!isValidUserName && (
                    <Text style={styles.invalidEmail}>Invalid Username</Text>
                  )}
                </View>

                <CustomTextInput
                  style={{marginTop: 10}}
                  keyboardType={'default'}
                  value={username}
                  onChangeText={(text: string) => onChangeUserNameText(text)}
                  iconName={userNameIconName}
                  iconColor={userNameIconColor}
                />
              </View>
            )}

            <View style={styles.labelContainer}>
              <Text style={[styles.textInputLabel, {marginTop: 10}]}>
                Password
              </Text>
              {!isValidPassword && (
                <Text style={styles.invalidEmail}>
                  Password must be 9 characters
                </Text>
              )}
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                secureTextEntry
                value={password}
                onChangeText={item => onChangePasswordText(item)}
              />

              <Ionicons
                name={passwordIconName}
                size={20}
                color={passwordIconColor}
                style={{position: 'absolute', end: 10}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                paddingVertical: 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
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

            <CustomButton
              text={submitButtonText}
              click={() => customButtonClick()}
              style={{
                marginTop: 10,
              }}
            />

            <TouchableOpacity onPress={() => switchToSignUp()}>
              <View style={styles.dontHaveAccountContainer}>
                <DescriptionText
                  text={switchText}
                  style={{alignSelf: 'center'}}
                />
                <Text style={styles.signUpText}>{switchButtonText}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={styles.facebookButtonContainer}
            onPress={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="logo-facebook"
                size={20}
                color={COLORS.white}
                style={{paddingVertical: 15}}
              />
              <Text style={styles.facebookButtonText}>
                Continue With Facebook
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.googleButtonContainer}
            onPress={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="logo-google"
                size={20}
                color={COLORS.red}
                style={{paddingVertical: 15}}
              />
              <Text style={styles.googleButtonText}>Continue With Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
