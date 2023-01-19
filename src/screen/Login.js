import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const navigate = useNavigation;

export default function Login({ navigation }) {
  const [text, onChangeText] = React.useState(null);

  return (
    <View style={styles.group} >
      <View style={{paddingBottom: 10, marginTop: -50}}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image style={{width: 35, height: 35,}} source={require('../../assets/Arrow.png')} />
        </TouchableOpacity>
        
      </View>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            width: 183,
            height: 60,
            marginBottom: 10,
            marginTop: 40,
          }}
        >
          Welcome back to OpusApps
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#B0ABAB",
            width: 296,
            height: 40,
            marginBottom: 50,
          }}
        >
          We happy to see you again. Thank you for choosing us again
        </Text>
      </View>

      {/* Email Area */}
      <View style={styles.email}>
        <Image 
        style={{ height: 14, width: 18, alignSelf: "center" }}
        source={require("../../assets/email.png")} 
        />
        <TextInput
          style={{ paddingLeft: 10 }}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your email address"
          autoComplete="email"
        />
      </View>

      {/* Password Area */}
      <View style={styles.password}>
        <Image
          style={{ height: 18, width: 16, alignSelf: "center" }}
          source={require("../../assets/Password.png")}
        />
        <TextInput
        style={{paddingLeft: 10}}
          placeholder="Enter your password"
          autoComplete="password"
          secureTextEntry
        />
      </View>

      {/* Forgot Area */}
      <View>
        <Text
          style={{
            paddingRight: 40,
            paddingBottom: 50,
            paddingTop: 10,
            textAlign: "right",
          }}
          onPress={() => navigation.navigate("Forgot")}
        >
          Forgot Password ?
        </Text>
      </View>

      {/* Login Area */}
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Log in</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.textSignup}
        onPress={() => navigation.navigate("Register")}
      >
        Don’t have an account?
        <Text style={styles.signUp}> Sign up </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 25,
    marginTop: 70,
  },

  email: {
    width: 345,
    height: 55,
    borderWidth: 1,
    padding: 10,
    opacity: 0.5,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: "row",
  },

  password: {
    width: 345,
    height: 55,
    borderWidth: 1,
    padding: 10,
    opacity: 0.5,
    borderRadius: 8,
    flexDirection: "row",
  },

  button: {
    backgroundColor: "#4E4C4C",
    width: "95%",
    paddingVertical: 20,
    borderRadius: 30,
    marginBottom: 30,
  },

  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },

  textSignup: {
    textAlign: "center",
    marginTop: 200,
  },

  signUp: {
    color: "#3B63DC",
  },
});
