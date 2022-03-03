import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  DestinationSearchViewModel,
  HomeModel,
  ProfileModel,
} from '../viewModel';

type RootStackList = {
  Home: Function;
  Profile: Function;
  DestinationSearch: Function;
};

const Stack = createStackNavigator<RootStackList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DestinationSearch"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeModel} />
        <Stack.Screen name="Profile" component={ProfileModel} />
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearchViewModel}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
