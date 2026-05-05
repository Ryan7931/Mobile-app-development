import { SafeAreaView, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import Navbar from '../components/Navbar';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.root}>

      <View style={styles.content}>
        <Text>Search Screen</Text>
      </View>

      <Navbar active="search" />
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