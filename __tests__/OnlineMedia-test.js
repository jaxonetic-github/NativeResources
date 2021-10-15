/**
 * @format
 */

import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import React from 'react';
import App from '../App';
import ResourceList from '../src/FilterableVideoList';
import OnlineMedia from '../src/onlineMedia.js';

import {initialStoreState} from '../src/redux/state.js';

import { render, fireEvent } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import '@testing-library/jest-native/extend-expect';


it('OnlineMedia displays titles', () => {
    const {queryByText} = render(<OnlineMedia />);
    initialStoreState.resourcesData.onlineMediaContent.forEach((resource)=>queryByText(resource.title));
    console.log(initialStoreState.resourcesData.onlineMediaContent[0].title);
    ;
});
