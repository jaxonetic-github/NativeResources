/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import  ResourceList from '../src/FilterableVideoList/ResourceList.js'
import {initialStoreState} from '../src/redux/state.js';

import { render, fireEvent } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';

const selectableTeachers = initialStoreState.resourcesData.youTubeResources.filter(function hasPayload(arg) {
  return arg.payload ? true : false;
});

//filter teachers by Name
const filteredTeachers = (filterByName)=>{ return filterByName?
    selectableTeachers.filter(function hasPayload(arg) {return arg.title == filterByName;}) : null;}


it('renders correctly', () => {
  const rdr = renderer.create(<ResourceList key='scrollviewList' webResources={selectableTeachers} />);
  const testInstance = rdr.root;
//  console.log(rdr.toJSON(), testInstance);
  console.log(testInstance.findByType(ResourceList).props.webResources.length);
});


test('form displays all teachers', () => {
  const allQuestions = ['q1', 'q2'];
  const mockFn = jest.fn();

  const { getAllByA11yLabel, getByText , queryByText} = render(
    <ResourceList key='scrollviewList' webResources={selectableTeachers} />
  );

selectableTeachers.forEach((resource)=>queryByText(resource.title));
 
});

test('form displays subset of teachers', () => {
  const allQuestions = ['q1', 'q2'];
  const mockFn = jest.fn();

  const {queryByText} = render(
    <ResourceList key='scrollviewList' webResources={filteredTeachers(selectableTeachers[0].title)} />
  );

selectableTeachers.forEach((resource)=>queryByText(resource.title));
 
});
