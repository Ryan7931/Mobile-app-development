import { ImageBackground, Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { colors, globalStyles } from '../styles/global';

const bgImage = require('../assets/Background-RegisterScreen.png');
const { height } = Dimensions.get('window');

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground source={bgImage} style={styles.image} resizeMode="cover">

        <View style={styles.logoRow}>
          <Text style={styles.logoText}>⊙ OffTrack</Text>
        </View>

        <View style={styles.bottom}>
          <View style={[globalStyles.inputBase, styles.inputField]}>
            <Text style={styles.inputPlaceholder}>Email Address</Text>
          </View>
          <View style={[globalStyles.inputBase, styles.inputField]}>
            <Text style={styles.inputPlaceholder}>Password</Text>
          </View>
          <View style={[globalStyles.inputBase, styles.inputField]}>
            <Text style={styles.inputPlaceholder}>Confirm Password</Text>
          </View>

          <TouchableOpacity style={[globalStyles.buttonBase, styles.createBtn]}>
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
    fontSize: 18,
    fontWeight: '700',
  },
  bottom: {
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  inputField: {
    justifyContent: 'center',
  },
  inputPlaceholder: {
    color: '#555',
    fontSize: 15,
  },
  createBtn: {
    backgroundColor: colors.black,
    marginTop: 4,
  },
});