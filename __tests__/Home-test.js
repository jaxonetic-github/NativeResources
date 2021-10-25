/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import  Home, {drbenText, drbenQuote} from '../src/home.js'
import {initialStoreState} from '../src/redux/state.js';
import { NativeBaseProvider } from 'native-base';

import { render, fireEvent, waitFor } from '@testing-library/react-native';


import { VIDEO_REFS_TITLE, VIDEO_REFS_DESC_TEXT, DRBENQUOTE,DRBENTEXT } from '../src/constants.js';


test('form displays quote card',  () => {

   const {getByText}  = render(<Home/>);
 
 getByText(DRBENQUOTE);
 getByText(DRBENTEXT);

});

test('form displays videoReferences', () => {

  const { getByText} = render(<Home/>);
    //initialStoreState.videoMediaPromotions.forEach((resource)=>{getByText(resource.title); getByText(resource.subTitle);});

  getByText(VIDEO_REFS_TITLE);
  getByText(VIDEO_REFS_DESC_TEXT);
});
