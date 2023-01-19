import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Done() {
  return (
    <View style={styles.view}>
      <Image
        style={{
          resizeMode: "contain",
          height: 350,
          width: 600,
        }}
        source={require("../../../assets/Saly-15.png")}
      ></Image>
      <Text style={styles.textWan}>No task found</Text>
      <Text style={styles.textTu}>
        You can add task by tapping the (+) icon below
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  textWan: {
    fontSize: 24,
    paddingBottom: 5
  },

  textTu: {
    fontSize: 12,
  },
});
