/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,StyleSheet, Text, useColorScheme, View,
} from 'react-native';

import ResourceList from './ResourceList.js';
//import YouTubeList from './src/youtubeList.js';
import {initialStoreState} from '../redux/state.js';
import RNPickerSelect from 'react-native-picker-select';

//       <YouTubeList tubelist={initialStoreState.resourcesData.youTubeResources}/>
export default function App() {

const selectableTeachers = initialStoreState.resourcesData.youTubeResources.filter(function hasPayload(arg) {
  return arg.payload ? true : false;
});

// create the picker items to choose by Name
const pickerTeachers = selectableTeachers.map((rsrc)=>{
  return {'label':rsrc.title, 'value':rsrc.title, 'key':rsrc.title}
});

// create the picker items to choose by Category
const pickerCategories = selectableTeachers.map((rsrc)=>{ return {'label':rsrc.generalCategory[0], 'value':rsrc.generalCategory[0], 'key':rsrc.generalCategory[0]};});

//filter teachers by Name
const filteredTeachers = (filterByName)=>{ return filterByName?
    selectableTeachers.filter(function hasPayload(arg) {return arg.title == filterByName;}) : null;}

//filter teachers by Category
const filterCategory = (filterByCategory)=> selectableTeachers.filter(function hasPayload(arg) {return arg.generalCategory[0] == filterByCategory;});

//const filterByTeacher  = (byName)=>
const [selectedTeacher, setSelectedTeacher] = useState({'name':'all', 'subject':'all', 'data':selectableTeachers});

//placeholder Styles for Name and Category Pickers
const namePlaceholder = {
      label: 'Filter By Name...',
      value: null,
      color: '#000000',
      fontSize: 24,
      fontWeight: 'bold',
    };
const categoryPlaceholder = {
      label: 'Filter By Category...',
      value: null,
      color: '#9EA7A4',
      fontSize: 24,
      fontWeight: 'bold',
    };

  return (
    <SafeAreaView >
      <View style={{padding:10, top:10}}><Text style={{fontWeight: 'bold', fontSize:30, alignItems:'center'}}>Filters</Text></View>
      <View style={{ flexDirection: 'row' , justifyContent:"space-around"}}>
       <RNPickerSelect 
            style={pickerSelectStyles} 
            placeholder = {namePlaceholder}
            value ={selectedTeacher.name}
            onValueChange={(value) => setSelectedTeacher({'name':value , 'subject':null, 'data':value?filteredTeachers(value):selectableTeachers})}
            items={pickerTeachers}
        />
        <RNPickerSelect
            style={pickerSelectStyles} 
            placeholder = {categoryPlaceholder}
            value ={selectedTeacher.subject}
            onValueChange={(value) => setSelectedTeacher({'name':null, 'subject':value, 'data':value?filterCategory(value):selectableTeachers})}
            items={pickerCategories}
        />
        </View>
            <View style={{height:650, flexDirection: 'row' }}>
          <ResourceList key='scrollviewList' webResources={selectedTeacher.data} />
      </View>
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});