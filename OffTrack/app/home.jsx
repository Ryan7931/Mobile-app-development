import { SafeAreaView, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import Navbar from '../components/Navbar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.root}>

      <View style={styles.content}>
        <Text>Home Screen</Text>
      </View>

      <Navbar active="home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});

