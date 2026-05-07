import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';

const bannerImage = require('../assets/images/banner.png');
const profileImage = require('../assets/images/profile.png');

const favorites = [
  require('../assets/images/barcelona.png'),
  require('../assets/images/newyork.png'),
  require('../assets/images/tokyo.png'),
  require('../assets/images/rome.png'),
  require('../assets/images/chongqing.png'),
];

export default function ProfileScreen() {
  const [bio, setBio] = useState(
    'Jason is a travel enthusiast with a deep passion for planes and aviation. Whether he\'s exploring new destinations or watching aircraft take off, he\'s always captivated by the thrill of the journey.'
  );
  const [editing, setEditing] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.scroll}>

        <View style={styles.bannerContainer}>
          <Image source={bannerImage} style={styles.banner} />
          <Image source={profileImage} style={styles.avatar} />
        </View>

        <View style={styles.content}>

          <View style={styles.nameRow}>
            <Text style={styles.name}>Ryan Kalisvaart</Text>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => setEditing(!editing)}
            >
              <Ionicons name="pencil-outline" size={18} color="#000" />
            </TouchableOpacity>
          </View>

          <Text style={styles.pronouns}>he/him</Text>

          {editing ? (
            <TextInput
              style={styles.bioInput}
              value={bio}
              onChangeText={setBio}
              multiline
              textAlignVertical="top"
              autoFocus
            />
          ) : (
            <View style={styles.bioBox}>
              <Text style={styles.bio}>{bio}</Text>
            </View>
          )}

          <Text style={styles.favoritesTitle}>❤️ My favorites</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.favoritesRow}
          >
            {favorites.map((img, index) => (
              <Image key={index} source={img} style={styles.favoriteImage} />
            ))}
          </ScrollView>

        </View>
      </ScrollView>

      <Navbar active="profile" />
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
  bannerContainer: {
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  avatar: {
    position: 'absolute',
    bottom: -40,
    left: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 32,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  editIcon: {
    padding: 4,
  },
  pronouns: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
    marginBottom: 12,
  },
  bioBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 24,
  },
  bio: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  bioInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    marginBottom: 24,
    minHeight: 120,
    textAlignVertical: 'top',
  },
  favoritesTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  favoritesRow: {
    gap: 10,
    paddingBottom: 8,
  },
  favoriteImage: {
    width: 110,
    height: 110,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});