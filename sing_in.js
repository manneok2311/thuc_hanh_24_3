import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Image
        source={require('./assets/grocery-top.png')} // ảnh trên cùng có túi và rau củ
        style={styles.topImage}
        resizeMode="contain"
      />
      <Text style={styles.title}>Get your groceries</Text>
      <Text style={styles.title}>with nectar</Text>

      <View style={styles.phoneInputContainer}>
        <Image
          source={require('./assets/icon_co_quoc_gia.png')} // icon cờ quốc gia
          style={styles.flag}
        />
        <Text style={styles.code}>+84</Text>
        <TextInput
          placeholder="Enter your number"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      <Text style={styles.orText}>Or connect with social media</Text>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4A66AC' }]}>
        <Text style={styles.facebookText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'flex-start',
  },
  topImage: {
    width: '100%',
    height: 250,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181725',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    paddingVertical: 12,
    marginTop: 32,
  },
  flag: {
    width: 24,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
  },
  code: {
    fontSize: 16,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 24,
    color: '#828282',
  },
  socialButton: {
    backgroundColor: '#5383EC',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  googleText: {
    color: '#fff',
    fontWeight: '500',
  },
  facebookText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default LoginScreen;
