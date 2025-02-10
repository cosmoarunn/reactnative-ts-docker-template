import Constants from 'expo-constants';
import { AppRegistry } from 'react-native';
import App from './src/App';
//import { name as appName } from '../app.json';  

// Access the name:
const appName = Constants.manifest?.name || 'YourAppName'; // Provide a default value

// Access other properties:
const appVersion = Constants.manifest?.version;
const appSlug = Constants.manifest?.slug;
// and so on...

AppRegistry.registerComponent(appName, () => App);