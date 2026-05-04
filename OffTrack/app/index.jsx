import { ImageBackground, Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { colors, globalStyles } from '../styles/global';

const bgImage = require('../assets/Background-WelcomeScreen.png');

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={bgImage} style={styles.image} resizeMode="cover">

        {/* Logo */}
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>⊙ OffTrack</Text>
        </View>

        {/* Bottom section */}
        <View style={styles.bottom}>
          <Text style={styles.headline}>Explore a{'\n'}new world{'\n'}with us</Text>

          <TouchableOpacity style={[globalStyles.buttonBase, styles.registerBtn]}>
            <Text style={globalStyles.buttonText}>REGISTER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[globalStyles.buttonBase, styles.loginBtn]}>
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
    height: '100%',
    justifyContent: 'space-between',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  logoText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  bottom: {
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 40,
    marginTop: 'auto',
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