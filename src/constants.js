import React from 'react';

import { Platform, View ,ActivityIndicator,FlatList, Text, TouchableOpacity,Tab,Tabs } from 'react-native';
import {ListItem, Thumbnail, Title, Button, Header,Icon,} from 'native-base';
//import {FaBars, FaArrowCircleRight,FaArrowLeft,FaPlusCircle,FaMinusCircle,FaCalendar,FaMapMarker,FaPhoneSquare, FaSearch,FaGlobe,FaExternalLink,FaHourglass2,FaHome,  FaSearchengin, FaUser,FaRegBuilding,FaEdit,FaThList } from "react-icons/fa";
//import { GiHamburgerMenu } from 'react-icons/gi';

//import {MdSend} from 'react-icons/md'

//import {IoMdMenu} from 'react-icons/io';


export const NO_PHOTO_AVAILABLE_URI =  "https://static.wixstatic.com/media/84428b_aec5877604ff494295b3af5af0b27a67~mv2.png";
export const NATIVEBASEPROVIDER_INSET = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};


/*************  APP TEXTS **************/
export const QUOTE_IMG_URI = {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dr_Ben.jpg/220px-Dr_Ben.jpg'};
export const DRBENQUOTE = '"When I read history, I cannot read it as the conquerer, I must read it as the conquered; therefore, I have to read history as it affects me.  I have to put myself as the centroid figure, and how does that history affect me.Therefore the solution must come up in my perspective not in the conquerers perspective."';
export const DRBENTEXT = 'Dr Ben Jochannen';
export const VIDEO_REFS_DESC_TEXT = 'Our Story... Truth, These videos are priceless,  Buy them, watch them, gift them, watch them again!!!'
export const VIDEO_REFS_TITLE='Videos For Purchase :';
//Needed for react-native-google-signin
export const GOOGLESIGNIN_OPTION_SCOPE = "openid email profile";
export const GOOGLESIGNIN_OPTION_RESPONSE_TYPE = "code";

export const EMPTY_STRING = '';

const CATEGORY_HISTORY = 'History';
const CATEGORY_ECONOMICS = 'Economics';
const CATEGORY_PSYCHOLOGY = 'Psychology';
const CATEGORY_OCCULT = 'Occult';
const CATEGORY_MOVER = 'Mover';
export const categories = [
  {title: CATEGORY_HISTORY, description: ''},
  {title: CATEGORY_ECONOMICS, description: ''},
  {title: CATEGORY_PSYCHOLOGY, description: ''},
 // {title: CATEGORY_OCCULT, description: ''},
 // {title: CATEGORY_MOVER, description: ''},
];
// Importing redux state and corresponding redux constants
export const STATE = require('./redux/state.js');
export const TYPES = require('./redux/types.js');

//*********************  HTML  *********************/
// Icons
export const ICON_ADD_CIRCLE = "add-circle";
export const ICON_REMOVE_CIRCLE = "remove-circle";
export const ICON_IOS_CIRCLE = "ios-add-circle";
export const ICON_ANDROID_CIRCLE = "md-add-circle";


// CSS Constants
export const COMMON_DARK_BACKGROUND = '#243244';
export const INACTIVE_TINT_COLOR = '#9ab';
export const ACTIVE_TINT_COLOR = '#b8bb49';
export const TRANSPARENT_COLOR = 'transparent';

//************ Common Components //
const listItemSeparatorStyle = { height: 2, backgroundColor:COMMON_DARK_BACKGROUND  };
export const COMMON_TEXT_STYLE = {padding:15, color:"white"};
export const COMMON_ACTIVITY_INDICATOR = <View style={{ flex: 1, paddingTop: 20 ,justifyContent: 'space-around'}}><ActivityIndicator /></View>;
export const COMMON_LISTVIEW_ITEM_SEPARATOR = ()=> <View style={listItemSeparatorStyle} />;
export const ALT_LISTVIEW_ITEM_SEPARATOR = ()=> <View style={{flex:1,paddingTop:10, height: 20, backgroundColor:COMMON_DARK_BACKGROUND  }} />;
export const COMMON_ICON_STYLE = {fontSize: 20, color: COMMON_DARK_BACKGROUND};
export const COMMON_ICON_STYLE_MAROON = {fontSize: 20, color: 'maroon'};
export const COMMON_ICON_STYLE_SILVER = {fontSize: 20, color: 'silver'};

 const COMMON_VIEWBUTTON_STYLES ={
 customOuterStyle:{position:"absolute", bottom:0, right:-5},
  buttonText:{color:"gold", paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5},
  buttonOuterShell:{flex:1, borderWidth:2, borderRadius:15, backgroundColor:COMMON_DARK_BACKGROUND},
  buttonTextShell:{ borderWidth:1, borderRadius:10, backgroundColor:"maroon"}
}

/**
 *   Show a common button
 *  @param buttonText: text displayed by the button
 *  @param buttonPressAction: callback to handle the button-press event
 */
export const commonViewButton = (buttonText,buttonPressAction) =>(
 <View  style={COMMON_VIEWBUTTON_STYLES.customOuterStyle}  >
               <View style={COMMON_VIEWBUTTON_STYLES.buttonOuterShell}>
                <TouchableOpacity role onPress={buttonPressAction||null} style={COMMON_VIEWBUTTON_STYLES.buttonTextShell} >
                 <Text style={COMMON_VIEWBUTTON_STYLES.buttonText}>{buttonText}</Text>
                </TouchableOpacity></View></View>)





//**********************  Test ***************************/

//random generator
//export const RANDOM_NUMBER_SEED = 999999;
//export const random = seed => (Math.floor(Math.random() * Math.floor(seed ? seed: RANDOM_NUMBER_SEED)));

/*  
 *  UnComment "export const getRunn..." to be able to 
 *             read the name of a function at runtime
 *
 * getFuncName : a helper function to dynamically determine the running function name
 *                
 * post# 24
 * https://stackoverflow.com/questions/1013239/can-i-get-the-name-of-the-currently-running-function-in-javascript
 */
//export const getRunningFunctionName = () => getRunningFunctionName.caller.name;

/** ************ TEST MOCKS   ************** */





