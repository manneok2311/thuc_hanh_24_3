import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#53B175" />
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/iconcarot.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>nectar</Text>
      </View>
      <Text style={styles.subtitle}>online groceries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 8,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    letterSpacing: 1,
    fontWeight: '300',
  },
});

export default SplashScreen;
