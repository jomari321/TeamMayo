import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './Component/HelloWorld';
import UserName from './Component/UserName';
import Counter from './Component/Counter'; // Fix the import

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld/>
      <UserName/>
      <Counter/> {/* Fix the component name here */}
      <Text>Thank you</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
