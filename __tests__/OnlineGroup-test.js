/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import React from 'react';
import App, {GroupsStack} from '../App';
import OnlineGroup from '../src/onlineGroups.js';

import {initialStoreState} from '../src/redux/state.js';

import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Note: test renderer must be required after react-native.
import '@testing-library/jest-native/extend-expect';


it('OnlineGroups displays titles', () => {
    const {getByText} = render(<OnlineGroup />);
    initialStoreState.resourcesData.onlineGroups.forEach((resource)=>{getByText(resource.title); getByText(resource.description);});
    //console.log(initialStoreState.resourcesData.onlineMediaContent[0].title);
    ;
});


test('clicking on a group Boc opens a webview component', () => {

  const {getByTestId, getByText} = render(<NavigationContainer><GroupsStack/></NavigationContainer>);
  //get a title to test
  const groupTitle = initialStoreState.resourcesData.onlineGroups[0].title;
  const accordionHeader = getByText(groupTitle);
 //press on a group
    fireEvent.press(accordionHeader);
   getByTestId('webview');
});