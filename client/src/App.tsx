// client/src/App.tsx (or App.js/App.jsx if not using TypeScript)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import ProfileScreen from './components/ProfileScreen'; // Import ProfileScreen
import SettingsScreen from './components/SettingsScreen'; // Import SettingsScreen
import { Provider } from 'react-redux';
import store from './store/store';
import AuthScreen from './components/AuthScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={AuthScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          {/*<Stack.Screen name="Profile" component={ProfileScreen} />  Add ProfileScreen */}
          {/*<Stack.Screen name="Settings" component={SettingsScreen} />  Add SettingsScreen */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;