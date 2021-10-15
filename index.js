/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ResourceList from './src/FilterableVideoList';
import App from './src/onlineMedia.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ResourceList);
