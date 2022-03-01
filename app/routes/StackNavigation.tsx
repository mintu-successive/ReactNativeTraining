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
  ChangePasswordModel,
  CheckoutModel,
  DeliveryStatusModel,
  EditAccountModel,
  HomeModel,
  MyAccountModel,
  MyCartModel,
  MyCouponModel,
  MyOrdersModel,
  NotificationModel,
  NotificationTabModel,
  OnBoardingModel,
  PaymentSuccessModel,
  ProfileModel,
  ReviewModel,
  SettingsModel,
} from '../viewModel';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './Drawer';

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
  DeliveryStatus: Function;
  MyOrders: Function;
  MyCoupon: Function;
  Review: Function;
  MyAccount: Function;
  EditAccount: Function;
  Settings: Function;
  ChangePassword: Function;
  Notification: Function;
  NotificationTab: Function;
  Main: Function;
  Drawer: Function;
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
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="NotificationTab" component={NotificationTabModel} />
        <Stack.Screen name="Notification" component={NotificationModel} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordModel} />
        <Stack.Screen name="Settings" component={SettingsModel} />
        <Stack.Screen name="EditAccount" component={EditAccountModel} />
        <Stack.Screen name="MyAccount" component={MyAccountModel} />
        <Stack.Screen name="Review" component={ReviewModel} />
        <Stack.Screen name="MyCoupon" component={MyCouponModel} />
        <Stack.Screen name="MyOrders" component={MyOrdersModel} />
        <Stack.Screen name="DeliveryStatus" component={DeliveryStatusModel} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessModel} />
        <Stack.Screen name="Checkout" component={CheckoutModel} />
        <Stack.Screen name="AddNewCard" component={AddNewCardModel} />
        <Stack.Screen name="MyCart" component={MyCartModel} />
        <Stack.Screen name="MyCards" component={MyCardsModel} />
        <Stack.Screen name="FoodDetail" component={FoodDetailModel} />
        <Stack.Screen name="Otp" component={OtpModel} />
        <Stack.Screen name="Login" component={LoginModel} />
        <Stack.Screen name="OnBoarding" component={OnBoardingModel} />
        <Stack.Screen name="Profile" component={ProfileModel} />
        <Stack.Screen
          name="PasswordRecovery"
          component={PasswordRecoveryModel}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
