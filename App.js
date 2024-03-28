import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Unused imports are comment for now
// import LogInScreen from './app/screens/LogInScreen';
// import HomeScreen from './app/screens/HomeScreen';
import MediaCard from './app/screens/components/card';

export default function App() {
  return (
    <View style={styles.pageContainer}>
      <ScrollView>
      {/* Categories Container */}
      <View style={styles.container}>
        <SectionHeader title="Categories" />
        <ScrollView horizontal contentContainerStyle={{gap: 10,paddingHorizontal: 5,}}> 
            <MediaCard 
              title='Informatique'
              image='Categories/informatique.jfif' // inside assets
              description={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
            />
            <MediaCard 
              title='ARCHITECT'
              image='Categories/informatique.jfif' // inside assets
              description={'what ever description we want to put here!'}
            />
            <MediaCard 
              title='HAIR STYLIST'
              image='Categories/informatique.jfif' // inside assets
              description={'i think that the description is gotten from a backend api server with a key!'}
            />
        </ScrollView>
      </View>

      {/* Crafts Container */}
      <View style={styles.container}>
        <SectionHeader title="Crafts" />
        <ScrollView horizontal contentContainerStyle={{gap: 10,paddingHorizontal: 5,}}> 
            <MediaCard 
              title='Informatique'
              image='Categories/informatique.jfif' // inside assets
              description={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
            />
            <MediaCard 
              title='ARCHITECT'
              image='Categories/informatique.jfif' // inside assets
              description={'what ever description we want to put here!'}
            />
            <MediaCard 
              title='HAIR STYLIST'
              image='Categories/informatique.jfif' // inside assets
              description={'i think that the description is gotten from a backend api server with a key!'}
            />
        </ScrollView>
      </View>

      {/* Categories Container */}
      <View style={styles.container}>
        <SectionHeader title="Categories" />
        <ScrollView horizontal contentContainerStyle={{gap: 10,paddingHorizontal: 5,}}> 
            <MediaCard 
              title='Informatique'
              image='Categories/informatique.jfif' // inside assets
              description={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
            />
            <MediaCard 
              title='ARCHITECT'
              image='Categories/informatique.jfif' // inside assets
              description={'what ever description we want to put here!'}
            />
            <MediaCard 
              title='HAIR STYLIST'
              image='Categories/informatique.jfif' // inside assets
              description={'i think that the description is gotten from a backend api server with a key!'}
            />
        </ScrollView>
      </View>

      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#B8D8D8',
    flex: 1,
    alignItems: 'center', // Adjust this as needed for horizontal alignment
  },
  container: {
    marginTop: 30,
  },
  sectionHeader: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 5,
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
