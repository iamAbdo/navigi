import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';

import LogInScreen from './app/screens/LogInScreen';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {

  return (
    <HomeScreen style={{backgroundColor: 'red'}} />
    
  );

}

