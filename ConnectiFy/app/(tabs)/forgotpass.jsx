import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, Alert } from "react-native";
import Button from '@/components/ConnectifyButton';
import CfyTextInput from '@/components/ConnectifyTextInput';
import { Link } from 'expo-router';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
    } else {
      Alert.alert('Success', 'A password reset link has been sent to your email.');
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/connectify-logo.png')} style={{ width: 120, height: 120 }} />
      </View>
      <View>
        <Text style={styles.text}>Enter your email address to reset your password</Text>
        <CfyTextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <View style={styles.buttonArea}>
          <Button backgroundColor='#A98CE6' textColor='white' onPress={handleForgotPassword} style={{color: '#A98CE6', fontWeight: 'bold'}}>
            Send Reset Link
          </Button>
          <View><Text></Text></View>
        </View>
        <View style={styles.buttonArea}>
          <Link href='/login' style={{color: '#A98CE6', fontWeight: 'bold'}}>
            Back to Login
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonArea: {
    paddingTop: 10,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  }
});

export default ForgotPassword;
