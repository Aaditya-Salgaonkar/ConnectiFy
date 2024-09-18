import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create a new post here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default PostScreen;
