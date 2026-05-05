import { View, Text } from 'react-native';
import Navbar from '../components/Navbar';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Profile Screen</Text>
      <Navbar active="profile" />
    </View>
  );
}