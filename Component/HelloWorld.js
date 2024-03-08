import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/AMD_Software_Adrenalin_Edition_Logo.png' }} // Use uri property for remote URLs
        style={styles.image}
      />
      <Text>Hello World🎉</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 120,
    marginBottom: 20,
  },
});

export default YourApp;
