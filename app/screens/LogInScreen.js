import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

// Constants
const Separator = () => <View style={styles.separator} />;

function LogInScreen(props) {

  const navigation = useNavigation();

    return (
    <LinearGradient
        colors={['#FFF1EB', '#7A9E9F']}
        style={styles.container}>

        <Image style={styles.BigIcon} source={require('../assets/icons/UserIcon.png')} />
        
        <Separator />

        {/* Inputs */}
        <TextInput style={styles.input} placeholder='User Name'/>
        <TextInput style={styles.input} placeholder='Password'/>

        {/* Touchable texts */}
        <View style={styles.row}>
            <Text style={styles.text}>Remember Me </Text>
            <Text style={styles.text}>Forgot Password?</Text>
        </View>

        <Separator />

        <Button title='Log In' onPress={() => navigation.navigate('Home')} />

        <Separator />

        <Text style={styles.text}>You don't have an account ?</Text>
        <Text style={styles.text, {color: '#FFF'}}>SIGN UP</Text>

    </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
    },
    BigIcon: {
        width: 100,
        height: 100,
    },
    input:{
      width: 300,
      height: 40,
      margin: 12,
      borderRadius: 30,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#FFF1EB',
    },
    separator: {
      marginVertical: 10,
    },
    row: {
    //backgroundColor: 'red',
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
  });

export default LogInScreen;