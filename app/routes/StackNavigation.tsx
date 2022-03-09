import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  DestinationSearchViewModel,
  HomeModel,
  ProfileModel,
  SearchResultsViewModel,
} from '../viewModel';

type RootStackList = {
  Home: Function;
  Profile: Function;
  DestinationSearch: Function;
  SearchResults: Function;
};

const Stack = createStackNavigator<RootStackList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SearchResults"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeModel} />
        <Stack.Screen name="Profile" component={ProfileModel} />
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearchViewModel}
        />
        <Stack.Screen name="SearchResults" component={SearchResultsViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
