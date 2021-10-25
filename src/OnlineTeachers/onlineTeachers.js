/**
 *
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
*/
import React, {Component} from 'react';
import {Image, SafeAreaView, FlatList,View, TouchableOpacity} from 'react-native';

import {Root, Container, Header, Left, Content,ListItem, ScrollView, NativeBaseProvider, Text, Box} from 'native-base';

import {
  StyleSheet,
  YellowBox,
  NativeEventEmitter,
  Platform,
  AppRegistry,
  NativeModules,
  AsyncStorage,
  StatusBar, Card, CardItem,
} from 'react-native';

import {NATIVEBASEPROVIDER_INSET,commonViewButton, COMMON_DARK_BACKGROUND, NO_PHOTO_AVAILABLE_URI, COMMON_LISTVIEW_ITEM_SEPARATOR} from '../constants.js'

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


/**
 * Display a list of Resources(video info) with details stored in Accordion View
 */
export default function OnlineTeachersList(props) {
      const addKey= props.webResources.map((webResources, index)=>{
        const keyeditems = webResources.payload.items.map((item, index)=>{
          const key=(Math.random(index) * Math.random(3))+'0A';
          item.key= key;

          return item
        })
        webResources.payload.items = keyeditems;
        webResources.key = (Math.random(index) * Math.random(3))+'0A';

        return webResources;});
          //Item sparator view
      const ListViewItemSeparator = () => { return (<View style={styles.listLineSeparator}/>); };
      const accordionHeader =(webResources)=> {
        //console.log('headerdata--->',webResources)
         const header = (<View key={webResources.title} style={styles.listItemStyles}><ListViewItemSeparator/>
            <View style={{backgroundColor:'maroon', color:'white'}}><Text role style={{color:'white'}}>{webResources.title}</Text></View>
             <Text style={{color:'white'}}>{webResources.generalCategory}</Text>
             <Image style={{height:115, width:115}}  source={{ uri:webResources.images[0] }}/>
           <ListViewItemSeparator/></View>);
         
         return header;
      }
      const accordionBody = (webResources)=>{
                const img = webResources.images[0];

                //displays the individual videos under the main; 
                const payloadItems = (webResources.payload && webResources.payload.items ?
                                      webResources.payload.items.map((payloadItems) =><View key={payloadItems.id.videoId} style={styles.innerCardStyles}>
                                      <ListViewItemSeparator/>
            <View><Text style={{color:'white'}}>{payloadItems.snippet.channelTitle}</Text></View>
                                              <View><Text style={{color:'white'}}>{payloadItems.snippet.title}</Text></View>
                                              </View>) :<View key={new Date()}></View>);
                              return payloadItems;
            };
  return (
    <NativeBaseProvider initialWindowMetrics={NATIVEBASEPROVIDER_INSET}>
    <AccordionList styles={{backgroundColor:'pink', height:400, width:200}}
            list={addKey}
            header={accordionHeader}
            body={accordionBody}
            keyExtractor={(item) =>{return item.key;}}
          /></NativeBaseProvider>
  );
}
    _keyExtractor = (item, index) =>{  return item.id.videoId};


const styles = StyleSheet.create({
  headerImageStyles:{
              height: 60,
              width: 75,
              position: "relative",
              alignSelf: "stretch",
              left:0,
            },
   innerCardStyles:{  margin:15, padding: 5, borderRadius: 15, backgroundColor:'darkgrey', color:'white' },

  listItemStyles:{  margin:10, padding: 10, borderRadius: 15, backgroundColor:COMMON_DARK_BACKGROUND, color:'white' },
 listLineSeparator:{  height: 15, margin:13,
          backgroundColor: 'white'},
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:COMMON_DARK_BACKGROUND,
        borderRadius: 3,
    padding:0,
    borderColor:'black',
    alignItems: 'center',
    //height:125
  }
})
