import { ImageBackground, Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { colors, globalStyles } from '../styles/global';
import { router } from 'expo-router';

const bgImage = require('../assets/images/Background-WelcomeScreen.png');
const { height } = Dimensions.get('window');

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={bgImage} style={[styles.image, { height: height }]} resizeMode="cover">

        <View style={styles.logoRow}>
          <Text style={styles.logoText}>⊙ OffTrack</Text>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.headline}>Explore a{'\n'}new world{'\n'}with us</Text>

          <TouchableOpacity style={[globalStyles.buttonBase, styles.registerBtn]} onPress={() => router.push('/register')}>
            <Text style={globalStyles.buttonText}>REGISTER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[globalStyles.buttonBase, styles.loginBtn]} onPress={() => router.push('/login')}>
            <Text style={globalStyles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
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
    paddingBottom: 40,
  },
  headline: {
    color: colors.white,
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 44,
    marginBottom: 32,
  },
  registerBtn: {
    backgroundColor: colors.black,
  },
  loginBtn: {
    backgroundColor: colors.buttonLogin,
    borderWidth: 1,
    borderColor: '#333',
  },
});