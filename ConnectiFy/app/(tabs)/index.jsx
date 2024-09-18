import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';
import Button from '@/components/ConnectifyButton';

const Index = () => {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/connectify-logo.png')} style={{ width: 120, height: 120 }} />
        <Text style={styles.text}>ConnectiFy</Text>
      </View>
      <View style={styles.buttonArea}>
        <Link href="/signup" asChild>
          <Button backgroundColor='#A98CE6' textColor='white'>
            Sign Up
          </Button>
        </Link>
      </View>
      <View style={styles.buttonArea}>
        <Link href="/login" asChild>
          <Button backgroundColor='#F0F1F1' textColor='black'>
            Log In
          </Button>
        </Link>
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
    paddingTop: 15,
  },
  logoContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Index;
