import React from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet, Text, StatusBar } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.Headerline}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity>
                    <Image
                    source={require('../assets/icons/SearchIcon.png')}
                    style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>
            <Image
            source={require('../assets/icons/UserIcon.png')}
            style={styles.profileImage}
            />
        </View>
        <View style={styles.Headerline}>
            <TouchableOpacity
            style={styles.pageButton}
            onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.pageButtonText}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.pageButton}
            onPress={() => navigation.navigate('Categorie')}>
                <Text style={styles.pageButtonText}>Categorie</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.pageButton}
            onPress={() => navigation.navigate('Favorite')}>
                <Text style={styles.pageButtonText}>Favorie</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.pageButton}
            onPress={() => navigation.navigate('Parameters')}>
                <Text style={styles.pageButtonText}>Parametres</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7A9E9F',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Headerline: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 8,
  },
  pageButton: {
    paddingHorizontal: 8,
  },
  pageButtonText: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 16,
  },
});

export default Header;
