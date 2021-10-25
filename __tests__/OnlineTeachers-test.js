/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import  OnlineTeachersList from '../src/OnlineTeachers/onlineTeachers.js';
import  OnlineTeachers from '../src/OnlineTeachers';
import {initialStoreState} from '../src/redux/state.js';
import {Text} from 'native-base';
import { render, fireEvent, waitFor,rerender, cleanup } from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import '@testing-library/jest-native/extend-expect';
import {VIDEO_REFS_DESC_TEXT,categories} from '../src/constants.js';

const selectableTeachers = initialStoreState.resourcesData.youTubeResources.filter(function hasPayload(arg) {
  return arg.payload ? true : false;
});

//filter teachers by Name
const filteredTeachers = (filterByName)=>{ return filterByName?
    selectableTeachers.filter(function hasPayload(arg) {return arg.title == filterByName;}) : null;}


it('displays all the name & category info ', () => {
  const rdr = render(<OnlineTeachersList webResources={selectableTeachers} />);

  //verify all categories(for which info is available) are displayed on component
  categories.forEach((category)=>{expect(rdr.getAllByText(category.title).length).toBeGreaterThan(0)});
  
  //verify all available teacher names are displayed on component
  selectableTeachers.forEach((inst)=>{rdr.getAllByText(inst.title)});

});



test('form displays all teachers and their video details(accordion details)', () => {

  const { getAllByText,getByText} = render(
    <OnlineTeachersList webResources={selectableTeachers} />
  );

selectableTeachers.forEach((resource)=>{
const accordionHeader = getByText(resource.title);
//accordionHeader.tap()
    fireEvent.press(accordionHeader);
  resource.payload.items.forEach((payloadItems)=>{

    expect(getAllByText(payloadItems.snippet.title).length).toBeGreaterThan(0);
    expect(getAllByText(payloadItems.snippet.channelTitle).length).toBeGreaterThan(0);
  });
 
  //const txt = queryByText(resource.title);
 // console.log(resource.title, 'txt', txt);
  });
 //console.log(getAllByText('TV108 - The Black Side').exists())
});


test('form displays subset of teachers', () => {
  const mockFn = jest.fn();
  const subset = filteredTeachers(selectableTeachers[0].title);
  const {queryByText,getByText,getAllByText} = render(
    <OnlineTeachersList webResources={subset} />
  );

//expect only 1 result
subset.forEach((resource)=>{
 expect( getAllByText(resource.title).length).toBe(1);
 expect( getAllByText(resource.generalCategory[0]).length).toBe(1);
});

});

test('form displays subset of teachers', () => {
  const mockFn = jest.fn();
  const component = render(
    <OnlineTeachers  />
  );
component.getByDisplayValue('Filter By Name...');
component.getByDisplayValue('Filter By Category...');
//expect only 1 result



});
