import { ImageBackground, Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { colors, globalStyles } from '../styles/global';
import { router } from 'expo-router';

const bgImage = require('../assets/images/Background-LoginScreen.png');
const { height } = Dimensions.get('window');

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={bgImage} style={[styles.image, { height: height }]} resizeMode="cover">

        {/* Logo */}
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>⊙ OffTrack</Text>
        </View>

        {/* Bottom section */}
        <View style={styles.bottom}>
          <View style={[globalStyles.inputBase, { justifyContent: 'center' }]}>
            <Text style={styles.inputPlaceholder}>Email Address</Text>
          </View>
          <View style={[globalStyles.inputBase, { justifyContent: 'center' }]}>
            <Text style={styles.inputPlaceholder}>Password</Text>
          </View>

          <TouchableOpacity style={[globalStyles.buttonBase, styles.loginBtn]} onPress={() => router.push('/home')}>
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
    justifyContent: 'space-between',
  },
  logoRow: {
    position: 'absolute',
    top: 40,
    left: 20,
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
  inputPlaceholder: {
    color: '#555',
    fontSize: 15,
  },
  loginBtn: {
    backgroundColor: colors.black,
    marginTop: 4,
  },
});