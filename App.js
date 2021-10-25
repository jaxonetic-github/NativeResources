/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import { SafeAreaView,StyleSheet, Text, useColorScheme, View, Image, FlatList } from 'react-native';
import Home from './src/home.js'
import OnlineTeachers from './src/OnlineTeachers/';
import OnlineMedia from './src/onlineMedia.js';
import OnlineGroups from './src/onlineGroups.js';
import {initialStoreState} from './src/redux/state.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleWebView from './src/simpleWebView.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*
import {COMMON_LISTVIEW_ITEM_SEPARATOR} from './src/constants.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
*/
//       <YouTubeList tubelist={initialStoreState.resourcesData.youTubeResources}/>

const Stack = createNativeStackNavigator();

/**
 * Group the OnlineGroups Component with a WebView on the same Stack
 */
export function GroupsStack() {
  return (
    <Stack.Navigator initialRouteName="GroupsComp">
        <Stack.Screen name="GroupsComp" component={OnlineGroups} />
        <Stack.Screen name="GroupWebView" component={SimpleWebView} />
      </Stack.Navigator>
  );
}

/**
 * Group the MediaGroups Component with a WebView on the same Stack
 */
export function MediaStack() {
  return (
    <Stack.Navigator initialRouteName="MediaComp">
        <Stack.Screen name="MediaComp" component={OnlineMedia} />
        <Stack.Screen name="MediaWebView" component={SimpleWebView} />
      </Stack.Navigator>
  );
}

/**
 * Group the TeacherGroups Component with a WebView on the same Stack
 */
export function TeacherStack() {
  return (
    <Stack.Navigator initialRouteName="TeacherComp">
        <Stack.Screen name="TeacherComp" component={OnlineTeachers} />
        <Stack.Screen name="TeacherWebView" component={SimpleWebView} />
      </Stack.Navigator>
  );
}
export function LibraryTabs()

{
  const Tab = createBottomTabNavigator();

return(<Tab.Navigator initialRouteName="Home">
   <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Teachers" component={TeacherStack}
      options={{
         headerShown:false,
          tabBarLabel: 'Teachers',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="school" color={color} size={size} />
          )}}
           />
      <Tab.Screen name="Media" component={MediaStack}  options={{
          headerShown:false,
          tabBarLabel: 'Media',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="play-network" color={color} size={size} />
          )}}
          />
      <Tab.Screen name="Groups" component={GroupsStack} 
       options={{
          headerShown:false,
          tabBarLabel: 'Groups',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          )}}
          />
    </Tab.Navigator>);
}
export default function App() {

return (<NavigationContainer>
 <LibraryTabs/>
</NavigationContainer>);
/*
const AppContainer = createAppContainer(TabNavigator);
  return ( <OnlineTeachers key='scrollviewList' webResources={initialStoreState.resourcesData.onlineMediaContent} />);
*/
};
 //          <OnlineTeachers key='scrollviewList' webResources={selectedTeacher.data} />initialStoreState.resourcesData.onlineMediaContent


const styles = StyleSheet.create({
  listLineSeparator:{  height: 15, margin:13,
    backgroundColor: 'maroon'},
    sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});