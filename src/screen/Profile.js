import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const Separator = () => <View style={styles.separator} />;
const navigate = useNavigation;

export default function Profile({ navigation }) {
  return (
    <View style={styles.group}>
      <View style={{flexDirection: 'row', paddingBottom: 60, marginTop: -20}}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            style={{ width: 35, height: 35,}}
            source={require("../../assets/Arrow.png")}
          />
        </TouchableOpacity>
        <Text style={{textAlign: 'center', fontSize: 16,marginLeft: 120, marginRight: 160, textAlignVertical: 'center'}}>Profile</Text>
      </View>
      <View>
        <View>
          <Image
            style={{
              resizeMode: "contain",
              height: 100,
              width: 100,
              marginLeft: 10,
            }}
            source={require("../../assets/Profile.png")}
          ></Image>
          <Text style={styles.textNama}>Vexxa</Text>
          <Text style={{ marginBottom: 30, color: "#999494" }}>
            Vexxa5@gmail.com
          </Text>
        </View>
      </View>
      <Separator />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ paddingTop: 5, paddingRight: 80 }}>
          <Text style={{ textAlign: "center", color: "#B8B8B8", fontSize: 16 }}>
            0
          </Text>
          <Text style={{ textAlign: "center", color: "#B8B8B8", fontSize: 16 }}>
            Done
          </Text>
        </View>
        <View style={{ paddingTop: 5, paddingRight: 80 }}>
          <Text style={{ textAlign: "center", color: "#B8B8B8", fontSize: 16 }}>
            0
          </Text>
          <Text style={{ textAlign: "center", color: "#B8B8B8", fontSize: 16 }}>
            Pending
          </Text>
        </View>
        <View style={{ paddingTop: 5 }}>
          <Text style={{ textAlign: "center", color: "#B8B8B8", fontSize: 16 }}>
            0
          </Text>
          <Text style={{ textAlign: "center", color: "#B8B8B8", fontSize: 16 }}>
            Total
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 380, flexDirection: "row", paddingRight: 250 }}>
        <Image
          style={{ width: 46, height: 46 }}
          source={require("../../assets/Logout.png")}
        />
        <Text
          style={{ paddingTop: 13, paddingLeft: 13 }}
          onPress={() => navigation.navigate("Login")}
        >
          Log out
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flex: 1,
    marginTop: 70,
    alignItems: "center",
  },

  textNama: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 3,
  },

  separator: {
    paddingHorizontal: 150,
    borderBottomColor: "#F2F2F2",
    borderWidth: 1,
    opacity: 0.2,
  },
});
