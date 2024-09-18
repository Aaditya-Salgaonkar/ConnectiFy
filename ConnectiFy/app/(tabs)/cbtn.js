// components/ConnectifyButton.jsx
import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ConnectifyButton = forwardRef(({ backgroundColor, textColor, onPress, children }, ref) => (
  <TouchableOpacity
    ref={ref}
    onPress={onPress}
    style={[styles.button, { backgroundColor }]}
  >
    <Text style={[styles.text, { color: textColor }]}>{children}</Text>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ConnectifyButton;
