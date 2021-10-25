/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import { SafeAreaView,StyleSheet, Text, useColorScheme, View, Image,
 FlatList, TouchableOpacity, Pressable } from 'react-native';
import {initialStoreState} from './redux/state.js';
import { Card, CardItem,Center,Box, Thumbnail,Button, Icon,Right,Subtitle,NativeBaseProvider,Left, Title, } from 'native-base';

import { QUOTE_IMG_URI, NATIVEBASEPROVIDER_INSET, VIDEO_REFS_TITLE,VIDEO_REFS_DESC_TEXT, DRBENQUOTE,DRBENTEXT, COMMON_DARK_BACKGROUND,commonViewButton} from './constants.js';


/**
 *  @Desc Displays a Quote and Image
 */
export const quoteCard = ()=>(<Box style={{margin:10, borderWidth:2, borderRadius:5}}><Center>
  <Text>{DRBENQUOTE}</Text>
  <Pressable  style={styles.touchable}  >
    <Image style={{width:220 ,height:220}} source={QUOTE_IMG_URI} />
    <Text>{DRBENTEXT}</Text>
</Pressable> 
  </Center></Box>)


/**
 * Component to show list of videos users can buy
 * @param promotion:  
 */
export const videoReferences = ()=>(
<View style={{justifyContent:"space-around"}}>
                          <View><Text>{VIDEO_REFS_TITLE}</Text></View>
  <Box>
  <Text>{VIDEO_REFS_DESC_TEXT}</Text>
  </Box>
  <FlatList horizontal style={styles.listStyles}
    data={initialStoreState.videoMediaPromotions} 
    renderItem={(item)=>{
        return(<Box><View style={styles.videoRefsOuterStyle}>
                 <View style={styles.videoRefsInnerView}>
               <Text>{item.item.subTitle}</Text>
               {commonViewButton(item.item.title)}
                </View></View></Box>)}
    }/>
  </View>)


export default function Home() {

  return (<NativeBaseProvider initialWindowMetrics={NATIVEBASEPROVIDER_INSET}>
    <View>
      {quoteCard()}
      <View style={styles.listLineSeparator} />
        {videoReferences()}
      </View>
    </NativeBaseProvider>
  );
};


const styles = StyleSheet.create({
listStyles:{ backgroundColor:COMMON_DARK_BACKGROUND, height:150},
  videoRefsOuterStyle:{flex:1, borderRadius:15, marginLeft:5, marginRight:5},
  videoRefsInnerView:{flex:1,height:'75%', padding:5, borderRadius:5, backgroundColor:'pink'},
  videoRefsThumbnail:{borderRadius:15},
    videoRefsStyle:{flex:1, paddingTop:30, paddingBottom:15, height: 120, backgroundColor:COMMON_DARK_BACKGROUND },
  listLineSeparator:{  height: 15, margin:13,
          backgroundColor: COMMON_DARK_BACKGROUND}
});