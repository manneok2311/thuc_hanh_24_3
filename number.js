import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    if (phoneNumber.length < 9) {
      alert('Please enter a valid phone number');
    } else {
      alert('Continue to verification');
      // Bạn có thể xử lý tiếp tại đây
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Nút back chỉ là hiển thị */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your mobile number</Text>

      {/* Label */}
      <Text style={styles.label}>Mobile Number</Text>

      {/* Input dãy số điện thoại */}
      <View style={styles.inputRow}>
        <Image
          source={require('./assets/icon_co_quoc_gia.png')} // Thay bằng cờ bạn cần
          style={styles.flag}
        />
        <Text style={styles.code}>+84</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Enter number"
          placeholderTextColor="#999"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Nút Next */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Ionicons name="arrow-forward" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#181725',
    marginTop: 40,
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  flag: {
    width: 28,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  code: {
    fontSize: 16,
    marginRight: 8,
    color: '#181725',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#181725',
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default PhoneInputScreen;
