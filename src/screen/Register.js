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

export default function Register({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.group}>
      <View style={{paddingBottom: 10, marginTop: 20, marginBottom: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image style={{width: 35, height: 35,}} source={require('../../assets/Arrow.png')} />
        </TouchableOpacity>
        
      </View>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 15,
            
          }}
        >
          Sign up
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
      <View style={styles.user}>
        <Image
          style={{ height: 18, width: 16, alignSelf: "center" }}
          source={require("../../assets/User.png")}
        />
        <TextInput
          style={{ paddingLeft: 10 }}
          onChangeText={onChangeText}
          placeholder="Enter your Username"
          autoComplete="username"
        />
      </View>
      <View style={styles.email}>
        <Image
          style={{ height: 14, width: 18, alignSelf: "center" }}
          source={require("../../assets/email.png")}
        />
        <TextInput
          style={{paddingLeft: 10}}
          onChangeText={onChangeText}
          placeholder="Enter your email"
          autoComplete="email"
        />
      </View>
      <View style={styles.password}>
        <Image
          style={{ height: 18, width: 16, alignSelf: "center" }}
          source={require("../../assets/Password.png")}
        />
        <TextInput
          style={{ paddingLeft: 10 }}
          onChangeText={onChangeText}
          placeholder="Enter your password"
          autoComplete="password"
        />
      </View>
      <View style={styles.confirmPassword}>
        <Image
          style={{ height: 18, width: 16, alignSelf: "center" }}
          source={require("../../assets/Password.png")}
        />
        <TextInput
        style={{paddingLeft: 10}}
          onChangeText={onChangeText}
          placeholder="Confirm your password"
          autoComplete="password"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.textSignup}
        onPress={() => navigation.navigate("Login")}
      >
        Already have an account?
        <Text style={styles.signUp}> Log in </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "flex-start",
    paddingLeft: 25,
    marginTop: 1,
  },

  user: {
    width: 345,
    height: 55,
    borderWidth: 1,
    padding: 10,
    opacity: 0.5,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: "row",
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
    marginBottom: 20,
    flexDirection: "row",
  },

  confirmPassword: {
    width: 345,
    height: 55,
    borderWidth: 1,
    padding: 10,
    opacity: 0.5,
    borderRadius: 8,
    marginBottom: 70,
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
    marginTop: 115,
  },

  signUp: {
    color: "#3B63DC",
  },
});
