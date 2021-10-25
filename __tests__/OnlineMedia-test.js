/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import React from 'react';
import App from '../App';
import OnlineMedia from '../src/onlineMedia.js';

import {initialStoreState} from '../src/redux/state.js';

import { render, fireEvent } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import '@testing-library/jest-native/extend-expect';


it('OnlineMedia displays Media titles', () => {
    const { getByText } = render(<OnlineMedia />);
   
    //cycle through expected titles and ensure they ar displayed
    initialStoreState.resourcesData.onlineMediaContent.forEach((resource)=>getByText(resource.title));
});
