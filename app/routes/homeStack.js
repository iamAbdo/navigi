import { createStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';

import LogInScreen from '../screens/LogInScreen';
import HomeScreen from '../screens/HomeScreen';

const screens = {
    Home: {
        screen: HomeScreen
    },
    LogIn: {
        screen: LogInScreen
    }
}

const HomeStack = createStackNavigator(screens);