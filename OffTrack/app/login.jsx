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

const bgImage = require('../assets/images/Background-LoginScreen.png');
const { height } = Dimensions.get('window');

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('All fields are required.');
      return;
    }

    const data = await AsyncStorage.getItem('user');

    if (!data) {
      Alert.alert('Fout', 'Geen account gevonden. Registreer eerst.');
      return;
    }

    const user = JSON.parse(data);

    if (user.username === username && user.password === password) {
      router.push('/home');
    } else {
      Alert.alert('Fout', 'Onjuiste gebruikersnaam of wachtwoord');
    }
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

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity
            style={[globalStyles.buttonBase, styles.loginBtn]}
            onPress={handleLogin}
          >
            <Text style={globalStyles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={globalStyles.footerText}>
            Don't have an account? <Text style={globalStyles.footerLink}>Sign up</Text>
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
  loginBtn: {
    backgroundColor: colors.black,
    marginTop: 4,
  },
});