import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/delivery-man.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={styles.overlay}>
        <Image
          source={require('./assets/iconcarot.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>to our store</Text>
        <Text style={styles.description}>
          Get your groceries in as fast as one hour
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (navigation && navigation.navigate) {
              navigation.navigate('Login');
            } else {
              console.warn('Navigation prop is not available');
            }
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
  },
  logo: {
    width: 36,
    height: 36,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
