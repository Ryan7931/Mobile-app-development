import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import { colors, globalStyles } from "../styles/global";
import { router } from "expo-router";
import { useState } from "react";

const bgImage = require("../assets/images/Background-LoginScreen.png");
const { height } = Dimensions.get("window");

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log("All valid, ready to login");
    router.push("/home");
  };
  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground
        source={bgImage}
        style={[styles.image, { height: height }]}
        resizeMode="cover"
      >
        {/* Logo */}
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>⊙ OffTrack</Text>
        </View>

        {/* Bottom section */}
        <View style={styles.bottom}>
          <TextInput
            style={[globalStyles.inputBase]}
            placeholder="Email Address"
            placeholderTextColor="#555"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={[globalStyles.inputBase]}
            placeholder="Password"
            placeholderTextColor="#555"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          {error ? <Text style={globalStyles.errorText}>{error}</Text> : null}

          <TouchableOpacity
            style={[globalStyles.buttonBase, styles.loginBtn]}
            onPress={handleLogin}
          >
            <Text style={globalStyles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <Text style={globalStyles.footerText}>
            Don't have an account?{" "}
            <Text style={globalStyles.footerLink}>Sign up</Text>
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
    width: "100%",
    justifyContent: "space-between",
  },
  logoRow: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  logoText: {
    color: colors.black,
    fontSize: 28,
    fontWeight: "700",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  inputPlaceholder: {
    color: "#555",
    fontSize: 15,
  },
  loginBtn: {
    backgroundColor: colors.black,
    marginTop: 4,
  },
});
