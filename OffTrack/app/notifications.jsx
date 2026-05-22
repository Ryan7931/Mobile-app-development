import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Navbar from '../components/Navbar';

const ryanImage = require('../assets/images/ryan.png');

const notifications = [
  {
    id: 1,
    name: 'Ryan Gosling',
    message: 'Just landed in Tokyo and already found the best ramen spot. Life is good.',
  },
  {
    id: 2,
    name: 'Ryan Gosling',
    message: 'Anyone else think airport security is just a slow motion obstacle course?',
  },
  {
    id: 3,
    name: 'Ryan Gosling',
    message: 'Posted a new travel story about Barcelona. The paella was worth every euro.',
  },
  {
    id: 4,
    name: 'Ryan Gosling',
    message: 'Genuinely cannot decide if I love or hate long haul flights. Both. Definitely both.',
  },
  {
    id: 5,
    name: 'Ryan Gosling',
    message: 'Rome in the rain is somehow even more beautiful. Highly recommend getting lost there.',
  },
  {
    id: 6,
    name: 'Ryan Gosling',
    message: 'Just booked my next trip. Hint: it involves dumplings and a very long flight.',
  },
];

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

        <Text style={styles.title}>🔔 Notifications</Text>

        {notifications.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={ryanImage} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name} posted:</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>
        ))}

      </ScrollView>

      <Navbar active="notifications" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    gap: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  message: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },
});