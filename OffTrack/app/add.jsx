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
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import Navbar from '../components/Navbar';
import { globalStyles, colors } from '../styles/global';

export default function AddScreen() {
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(null);
  const [duration, setDuration] = useState('');
  const [diaryEntry, setDiaryEntry] = useState('');
  const [error, setError] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!country || !image || !duration || !diaryEntry) {
      setError('All fields are required.');
      return;
    }
    setError('');
    console.log({ country, image, duration, diaryEntry });
  };

  return (
    <SafeAreaView style={styles.root}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>📚 New diary entry</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

        {/* Country picker */}
        <Text style={styles.label}>Location of vacation</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={country}
            onValueChange={(value) => setCountry(value)}
            style={styles.picker}
          >
            <Picker.Item label="Select a country..." value="" />
            <Picker.Item label="Spain" value="ES" />
            <Picker.Item label="USA" value="US" />
            <Picker.Item label="Japan" value="JP" />
            <Picker.Item label="Italy" value="IT" />
            <Picker.Item label="China" value="CN" />
          </Picker>
        </View>

        {/* Banner image */}
        <Text style={styles.label}>Banner image</Text>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.bannerImage} />
          ) : (
            <Text style={styles.plusIcon}>+</Text>
          )}
        </TouchableOpacity>

        {/* Duration */}
        <Text style={styles.label}>Duration</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. maart 2024 - april 2024"
          placeholderTextColor="#aaa"
          value={duration}
          onChangeText={setDuration}
        />

        {/* Diary entry */}
        <Text style={styles.label}>Diary entry</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write about your trip..."
          placeholderTextColor="#aaa"
          value={diaryEntry}
          onChangeText={setDiaryEntry}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />

        {/* Error */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

      </ScrollView>

      {/* Submit button */}
      <View style={styles.submitContainer}>
        <TouchableOpacity
          style={[globalStyles.buttonBase, styles.submitBtn]}
          onPress={handleSubmit}
        >
          <Text style={globalStyles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>

      <Navbar active="add" />
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
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  close: {
    fontSize: 18,
    fontWeight: '600',
    padding: 8,
    color: '#000',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
    marginTop: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#000',
  },
  imagePicker: {
    width: '100%',
    height: 160,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#fafafa',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  plusIcon: {
    fontSize: 48,
    color: '#aaa',
    lineHeight: 56,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
  },
  textArea: {
    height: 140,
    paddingTop: 12,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 12,
  },
  submitContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  submitBtn: {
    backgroundColor: colors.black,
    marginBottom: 0,
  },
});