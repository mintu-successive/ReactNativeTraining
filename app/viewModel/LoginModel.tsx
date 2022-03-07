import React, {useEffect, useRef, useState} from 'react';
import {COLORS, ValidationTypes} from '../config/Constants';
import {validateEmail, validateUserName} from '../config/Validation';
import LoginScreen from '../view/LoginScreen';
import {constants} from '../config/Constants';

interface InputProp {
  navigation: any;
  switchToSignUp: Function;
  customButtonClick: Function;
}

const LoginModel = (props: InputProp) => {
  const {navigation} = props;
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [emailIconName, setEmailIconName] = useState(
    'checkmark-circle-outline',
  );
  const [emailIconColor, setEmailIconColor] = useState(COLORS.gray);
  const [userNameIconName, setUserNameIconName] = useState(
    'checkmark-circle-outline',
  );
  const [userNameIconColor, setUserNameIconColor] = useState(COLORS.gray);
  const [passwordIconName, setPasswordIconName] = useState('eye');
  const [passwordIconColor, setPasswordIconColor] = useState(COLORS.gray);
  const [submitButtonText, setSubmitButtonText] = useState(
    isSignIn ? 'Sign In' : 'Sign Up',
  );
  const [switchButtonText, setSwitchButtonText] = useState(
    isSignIn ? 'Sign Up' : 'Sign In',
  );
  const [switchText, setSwitchText] = useState(
    isSignIn ? "Don't have an account?" : 'Already have an account?',
  );

  useEffect(() => {
    setEmail('');
    setUserName('');
    setPassword('');
    setIsValidEmail(true);
    setIsValidPassword(true);
    setIsValidUserName(true);
    setSubmitButtonText(isSignIn ? 'Sign In' : 'Sign Up');
    setSwitchButtonText(isSignIn ? 'Sign Up' : 'Sign In');
    setEmailIconName('checkmark-circle-outline');
    setEmailIconColor(COLORS.gray);
  }, [isSignIn]);

  const switchToSignUp = (isSignIn: boolean) => {
    setIsSignIn(!isSignIn);
  };

  const customButtonClick = () => {
    if (isSignIn) {
      login();
    } else {
      signUp();
    }
  };

  const login = async () => {
    let isValidEmail = await validateEmail(email);
    if (isValidEmail) {
      setIsValidEmail(true);
      setEmailIconColor(COLORS.green);
      setEmailIconName(constants.CHECK_ICON);

      if (password.length < 9) {
        setIsValidPassword(false);
      } else {
        setIsValidPassword(true);
        setTimeout(() => {
          navigation.navigate('Home');
        }, 500);
      }
    } else {
      setIsValidEmail(false);
      setEmailIconColor(COLORS.red);
      setEmailIconName(constants.CLOSE_ICON);
      setIsValidPassword(true);
    }
  };

  const signUp = async () => {
    let isValidEmail = await validateEmail(email);
    let isValidUserName = await validateUserName(username);

    if (isValidEmail) {
      setIsValidEmail(true);
      setEmailIconName(constants.CHECK_ICON);
      setEmailIconColor(COLORS.green);

      if (isValidUserName) {
        setIsValidUserName(true);
        setUserNameIconName(constants.CHECK_ICON);
        setUserNameIconColor(COLORS.green);

        if (password.length < 9) {
          setIsValidPassword(false);
        } else {
          setIsValidPassword(true);
          setTimeout(() => {
            switchToSignUp(isSignIn);
          }, 500);
        }
      } else {
        setIsValidUserName(false);
        setUserNameIconName(constants.CLOSE_ICON);
        setUserNameIconColor(COLORS.red);
        setIsValidPassword(true);
      }
    } else {
      setIsValidEmail(false);
      setEmailIconName(constants.CLOSE_ICON);
      setEmailIconColor(COLORS.red);
      setIsValidPassword(true);
      setIsValidUserName(true);
    }
  };

  return (
    <LoginScreen
      navigation={navigation}
      email={email}
      username={username}
      password={password}
      isSignIn={isSignIn}
      isValidEmail={isValidEmail}
      isValidUserName={isValidUserName}
      isValidPassword={isValidPassword}
      emailIconName={emailIconName}
      emailIconColor={emailIconColor}
      userNameIconName={userNameIconName}
      userNameIconColor={userNameIconColor}
      passwordIconName={passwordIconName}
      passwordIconColor={passwordIconColor}
      submitButtonText={submitButtonText}
      switchButtonText={switchButtonText}
      switchText={switchText}
      switchToSignUp={() => switchToSignUp(isSignIn)}
      customButtonClick={() => customButtonClick()}
      onChangeEmailText={(item: string) => setEmail(item)}
      onChangeUserNameText={(item: string) => setUserName(item)}
      onChangePasswordText={(item: string) => setPassword(item)}
    />
  );
};

export default LoginModel;
