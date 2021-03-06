import React, { Component } from "react";
//import PropTypes from 'prop-types';

import {  StyleSheet,ActivityIndicator,View} from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header, Content, Text,NativeBaseProvider } from 'native-base';

import {WEBVIEW_CONNECTION_ERROR, COMMON_ACTIVITY_INDICATOR } from './constants.js';



/** 
 * Display a website on a react-native-webview from a url specified by props.navigation.state.params.url
 * @called from webResourcesList
 */
export default class SimpleWebView extends React.Component {

  constructor(props) {
    super(props);
    console.log('props', this.props);
    this.state = {
      url : this.props.route ? this.props.route.params.url :'https://www.gatech.edu',
      title:this.props.route ? this.props.route.params.title :'Default',
    };
  }
  

/**
 * Renders the webview unless its content is still loading in 
 * which case, it renders an ActivityIndicator component
 */
  render=()=> 
  ( <NativeBaseProvider>
           <WebView testID='webview'
           style={styles.webview} 
           startInLoadingState={true}
           renderLoading={() => COMMON_ACTIVITY_INDICATOR}
           source={{ uri: this.state.url }}
           renderError={(e) => {return (<View style={styles.webViewError}><Text>WEBVIEW_CONNECTION_ERROR</Text></View>)}}
           onLoad={syntheticEvent => { this.setState({ isLoadingWebContent: syntheticEvent.nativeEvent.loading});}}
           onLoadEnd={syntheticEvent => {this.setState({ isLoadingWebContent: syntheticEvent.nativeEvent.loading});}}
           onLoadStart={syntheticEvent => { this.setState({ isLoadingWebContent: syntheticEvent.nativeEvent.loading});}}
           onError={ (e) => {
               //semi-ignoring for now log, TODO::=> set a flag or error in redux state,maybe a toast
               console.log("ERROR::",e);   }}
         />
        
   </NativeBaseProvider>
    )
}

/**
 * Potential properties to override state
 
SimpleWebView.propTypes = { 
  url:PropTypes.string,
  title:PropTypes.string
};
*/
const styles = StyleSheet.create({
  //500 height choice was arbitrary
   webview: { height:500, padding:2, borderRadius:2},
    webViewError: { backgroundColor:"pink", borderWidth:2},
});
