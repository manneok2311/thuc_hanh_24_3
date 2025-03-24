import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleInput = (value, index) => {
    if (!/^\d$/.test(value)) return; // chỉ nhận số

    const newOtp = [...otp];
    newOtp[index] = value;

    // Tự động chuyển sang ô tiếp theo
    setOtp(newOtp);
    if (index < 3) {
      const nextField = `otp${index + 1}`;
      refs[nextField]?.focus();
    }
  };

  const handleBackspace = (index) => {
    const newOtp = [...otp];
    newOtp[index] = '';
    setOtp(newOtp);
    if (index > 0) {
      const prevField = `otp${index - 1}`;
      refs[prevField]?.focus();
    }
  };

  const refs = {};

  const handleVerify = () => {
    const code = otp.join('');
    if (code.length !== 4) {
      alert('Please enter the 4-digit code');
      return;
    }
    alert(`Verifying code: ${code}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Nút back giả */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Enter your 4-digit code</Text>

      <Text style={styles.label}>Code</Text>

      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (refs[`otp${index}`] = ref)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleInput(value, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && otp[index] === '') {
                handleBackspace(index);
              }
            }}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.resendBtn}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={handleVerify}>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  input: {
    width: 60,
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    textAlign: 'center',
    fontSize: 24,
    color: '#181725',
  },
  resendBtn: {
    position: 'absolute',
    bottom: 70,
    left: 24,
  },

  resendText: {
    color: '#53B175',
    fontSize: 16,
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

export default OTPVerificationScreen;
