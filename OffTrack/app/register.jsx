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

const bgImage = require("../assets/images/Background-RegisterScreen.png");
const { height } = Dimensions.get("window");

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // check if fields are empty
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    // check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // all good — clear error and continue
    setError("");
    console.log("All valid, ready to create account");
    router.push("/home");
  };

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground
        source={bgImage}
        style={[styles.image, { height: height }]}
        resizeMode="cover"
      >
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>⊙ OffTrack</Text>
        </View>

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
          <TextInput
            style={[globalStyles.inputBase]}
            placeholder="Confirm Password"
            placeholderTextColor="#555"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />

          {error ? <Text style={globalStyles.errorText}>{error}</Text> : null}

          <TouchableOpacity
            style={[globalStyles.buttonBase, styles.createBtn]}
            onPress={handleRegister}
          >
            <Text style={globalStyles.buttonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>

          <Text style={globalStyles.footerText}>
            Already have an account?{" "}
            <Text style={globalStyles.footerLink}>Sign in.</Text>
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
    flexDirection: "row",
    alignItems: "center",
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
  inputField: {
    justifyContent: "center",
  },
  inputPlaceholder: {
    color: "#555",
    fontSize: 15,
  },
  createBtn: {
    backgroundColor: colors.black,
    marginTop: 4,
  },
  errorText: {
    color: "red",
    fontSize: 13,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
});
