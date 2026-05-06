import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { trips } from '../../data/trips';
import Navbar from '../../components/Navbar';
import CountryFlag from 'react-native-country-flag';

export default function TripDetailScreen() {
  const { id } = useLocalSearchParams();
  const trip = trips.find((t) => t.id === parseInt(id));

  return (
    <SafeAreaView style={styles.root}>

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <CountryFlag isoCode={trip.flag} size={16} />
          <Text style={styles.city}>{trip.city}</Text>
        </View>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.date}>{trip.date}</Text>

      <Image source={trip.image} style={styles.coverImage} />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {trip.days.map((day) => (
          <View key={day.day} style={styles.dayBlock}>
            <Text style={styles.dayTitle}>Day {day.day}</Text>
            <Text style={styles.dayText}>{day.text}</Text>
          </View>
        ))}
      </ScrollView>

      <Navbar active="home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flag: {
    fontSize: 24,
  },
  city: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  close: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#999',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  dayBlock: {
    marginBottom: 24,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  dayText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
});