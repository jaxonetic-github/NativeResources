/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import { SafeAreaView,StyleSheet, Text, useColorScheme, View, Image, FlatList,Pressable } from 'react-native';
import { Card,Box,NativeBaseProvider, Center} from 'native-base';
import { NATIVEBASEPROVIDER_INSET, ALT_LISTVIEW_ITEM_SEPARATOR, COMMON_LISTVIEW_ITEM_SEPARATOR, COMMON_DARK_BACKGROUND,commonViewButton} from './constants.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {initialStoreState} from './redux/state.js';

/**
 * 
 *//**
 * Display a list of Pressable (Media) records
 */
export default function OnlineMedia({ navigation }) {

  const renderItemFunc = ((arg)=>{
                  return <Box style={styles.outerBoxStyle}>
                           <Pressable  onPress={()=>{ navigation.navigate('GroupWebView',
                  {url: arg.item.url})}}>
                          <Center>
                          <Text style={styles.textStyle}>{arg.item.title}</Text>
                          <Image
                            style={{height:115, width:110}}
                            source={{ uri:arg.item.imageURI }}/>
                            <MaterialCommunityIcons name="arrow-right" color={'red'} size={30} />
                            </Center>
                             </Pressable>
                      </Box>});
  return (<NativeBaseProvider initialWindowMetrics={NATIVEBASEPROVIDER_INSET}>
      <FlatList
      testID='mediaList'
        data={initialStoreState.resourcesData.onlineMediaContent}
        renderItem={renderItemFunc}
        keyExtractor={item => item.title}
      />
    </NativeBaseProvider>);
};



const styles = StyleSheet.create({
  textStyle:{color:'gold'},
  outerBoxStyle:{margin:5, backgroundColor:COMMON_DARK_BACKGROUND, borderRadius:20},
  imageStyle: {height:115, width:110},
});