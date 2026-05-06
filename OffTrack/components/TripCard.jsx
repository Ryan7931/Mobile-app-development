import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import CountryFlag from 'react-native-country-flag';

export default function TripCard({ trip }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/trip/${trip.id}`)}
    >
      <View style={styles.imageContainer}>
        <Image source={trip.image} style={styles.image} />
        <View style={styles.overlay}>
          <CountryFlag isoCode={trip.flag} size={16} />
          <Text style={styles.city}>{trip.city}</Text>
        </View>
      </View>
      <Text style={styles.date}>{trip.date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  overlay: {
    position: "absolute",
    bottom: 32, // sits above the date text
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  date: {
    fontSize: 12,
    color: "#999",
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 8,
  },
});
