/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { SafeAreaView,StyleSheet, Text, useColorScheme, View, Image, FlatList,Pressable } from 'react-native';
import { Card,Box,NativeBaseProvider, Center,Left, TouchableOpacity} from 'native-base';
import { NATIVEBASEPROVIDER_INSET, ALT_LISTVIEW_ITEM_SEPARATOR, COMMON_LISTVIEW_ITEM_SEPARATOR, COMMON_DARK_BACKGROUND,commonViewButton} from './constants.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {initialStoreState} from './redux/state.js';

/**
 * Display a list of Pressable (Group) records
 */
export default function OnlineGroups({ navigation }) {

const renderItemFunc = ((arg)=>{
     return <Box style={styles.outerBoxStyle}>
                  <Pressable onPress={()=>{ navigation.navigate('GroupWebView',
                  {url: arg.item.url}
                  )}}>
                         <Center>           
                          <Text style={styles.textStyle}>{arg.item.title}</Text>
                           <Image
                            style={styles.imageStyle}
                            source={{ uri:arg.item.imageURI }}/>
                            <Text style={styles.textStyle}>{arg.item.description}</Text>
                         <MaterialCommunityIcons name="arrow-right" color={'red'} size={30} />
                          </Center>        
                      </Pressable>
                      </Box>});

  return (
    <NativeBaseProvider initialWindowMetrics={NATIVEBASEPROVIDER_INSET}>
      <FlatList
        data={initialStoreState.resourcesData.onlineGroups}
        renderItem={renderItemFunc}
        keyExtractor={item => item.title}
      />
    </NativeBaseProvider>
  );
};


const styles = StyleSheet.create({
  textStyle:{color:'gold'},
  outerBoxStyle:{margin:5, backgroundColor:COMMON_DARK_BACKGROUND, borderRadius:20},
  imageStyle: {height:115, width:110},
});