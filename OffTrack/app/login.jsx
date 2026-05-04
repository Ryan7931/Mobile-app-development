import { ImageBackground, Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { colors, globalStyles } from '../styles/global';
import OffTrackLogo from '../assets/icons/OffTrackLogo';

const bgImage = require('../assets/Background-LoginScreen.png');
const { height } = Dimensions.get('window');

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={bgImage} style={styles.image} resizeMode="cover">

        {/* Logo */}
        <View style={styles.logoRow}>
          <OffTrackLogo color="#000000" width={120} height={40} />
        </View>

        {/* Bottom section */}
        <View style={styles.bottom}>
          <View style={[globalStyles.inputBase, { justifyContent: 'center' }]}>
            <Text style={styles.inputPlaceholder}>Email Address</Text>
          </View>
          <View style={[globalStyles.inputBase, { justifyContent: 'center' }]}>
            <Text style={styles.inputPlaceholder}>Password</Text>
          </View>

          <TouchableOpacity style={[globalStyles.buttonBase, styles.loginBtn]}>
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
  },
  bottom: {
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