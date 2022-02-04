import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginModel from '../viewModel/LoginModel';
import PasswordRecoveryModel from '../viewModel/PasswordRecoveryModel';
import OtpModel from '../viewModel/OtpModel';
import FoodDetailModel from '../viewModel/FoodDetailModel';
import MyCardsModel from '../viewModel/MyCardsModel';
import {
  AddNewCardModel,
  CheckoutModel,
  HomeModel,
  MyCartModel,
  OnBoardingModel,
  PaymentSuccessModel,
  ProfileModel,
} from '../viewModel';

type RootStackList = {
  OnBoarding: Function;
  Home: Function;
  Profile: Function;
  Login: Function;
  PasswordRecovery: Function;
  Otp: Function;
  FoodDetail: Function;
  MyCart: Function;
  MyCards: Function;
  AddNewCard: Function;
  Checkout: Function;
  PaymentSuccess: Function;
};

const Stack = createStackNavigator<RootStackList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessModel} />
        <Stack.Screen name="Checkout" component={CheckoutModel} />
        <Stack.Screen name="AddNewCard" component={AddNewCardModel} />
        <Stack.Screen name="MyCart" component={MyCartModel} />
        <Stack.Screen name="MyCards" component={MyCardsModel} />
        <Stack.Screen name="FoodDetail" component={FoodDetailModel} />
        <Stack.Screen name="Otp" component={OtpModel} />
        <Stack.Screen
          name="PasswordRecovery"
          component={PasswordRecoveryModel}
        />
        <Stack.Screen name="Login" component={LoginModel} />
        <Stack.Screen name="OnBoarding" component={OnBoardingModel} />
        <Stack.Screen
          name="Home"
          component={HomeModel}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen name="Profile" component={ProfileModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
