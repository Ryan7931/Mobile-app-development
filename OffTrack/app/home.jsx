import { SafeAreaView, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import Navbar from "../components/Navbar";
import { FlatList } from "react-native";
import { trips } from "../data/trips";
import TripCard from "../components/TripCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.title}>✈️ My Trips</Text>
        <FlatList
          data={trips}
          renderItem={({ item }) => <TripCard trip={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      </View>

      <Navbar active="home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  content: {
    flex: 1,
  },
});
