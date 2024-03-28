import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';

import LogInScreen from './app/screens/LogInScreen';
import HomeScreen from './app/screens/HomeScreen';
import MediaCard from './app/screens/components/card';

export default function App() {

  return (
    <div style={{backgroundColor: 'red'}}>
      <MediaCard 
        title= 'Informatique'
        image= 'Categories/informatique.jfif' // inside assets
        description={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      />
      <MediaCard 
        title= 'ARCHITECT'
        image= 'Categories/informatique.jfif' // inside assets
        description={'what ever description we want to put here!'}
      />
      <MediaCard 
        title= 'HAIR STYLIST'
        image= 'Categories/informatique.jfif' // inside assets
        description={'i think that the description is gotten from a backend api server with a key!'}
      />
    </div>
  );

}

