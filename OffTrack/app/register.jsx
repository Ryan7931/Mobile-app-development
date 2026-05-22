import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { colors, globalStyles } from '../styles/global';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const bgImage = require('../assets/images/Background-RegisterScreen.png');
const { height } = Dimensions.get('window');

export default function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Fout', 'Wachtwoorden komen niet overeen');
      return;
    }

    await AsyncStorage.setItem('user', JSON.stringify({ username, password }));
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={bgImage} style={styles.image} resizeMode="cover">

        <View style={styles.logoRow}>
          <Text style={styles.logoText}>⊙ OffTrack</Text>
        </View>

        <View style={styles.bottom}>
          <TextInput
            style={globalStyles.inputBase}
            placeholder="Username"
            placeholderTextColor="#555"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={globalStyles.inputBase}
            placeholder="Password"
            placeholderTextColor="#555"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TextInput
            style={globalStyles.inputBase}
            placeholder="Confirm Password"
            placeholderTextColor="#555"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity
            style={[globalStyles.buttonBase, styles.createBtn]}
            onPress={handleRegister}
          >
            <Text style={globalStyles.buttonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>

          <Text style={globalStyles.footerText}>
            Already have an account? <Text style={globalStyles.footerLink}>Sign in.</Text>
          </Text>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: '100%',
    height: height,
    justifyContent: 'space-between',
  },
  logoRow: {
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: colors.black,
    fontSize: 28,
    fontWeight: '700',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  createBtn: {
    backgroundColor: colors.black,
    marginTop: 4,
  },
});