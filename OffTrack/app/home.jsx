import { View, Text } from 'react-native';
import Navbar from '../components/Navbar';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home Screen</Text>
      <Navbar active="home" />
    </View>
  );
}