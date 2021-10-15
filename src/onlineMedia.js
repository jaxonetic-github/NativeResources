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
import {initialStoreState} from './redux/state.js';
//import RNPickerSelect from 'react-native-picker-select';

//import {COMMON_LISTVIEW_ITEM_SEPARATOR} from './constants.js';
//       <YouTubeList tubelist={initialStoreState.resourcesData.youTubeResources}/>

export default function OnlineMedia() {

const renderItemFunc = ((arg)=>{
                  return <View style={{justifyContent:"space-around"}}>
                          <Text>{arg.item.title}</Text>
                          <Text>{arg.item.url}</Text>
                          <Image
                            style={{height:135, width:200}}
                            source={{ uri:arg.item.imageURI }}/>
                      </View>});

  return (
    <SafeAreaView >
      <View>
      <Text>Media Channels</Text>
      </View>
      <FlatList
        data={initialStoreState.resourcesData.onlineMediaContent}
        renderItem={renderItemFunc}
        keyExtractor={item => item.title}
      />

    </SafeAreaView>
  );
};
 //          <ResourceList key='scrollviewList' webResources={selectedTeacher.data} />initialStoreState.resourcesData.onlineMediaContent


const styles = StyleSheet.create({
  listLineSeparator:{  height: 15, margin:13,
          backgroundColor: 'maroon'},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});