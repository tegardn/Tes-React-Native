import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const navigate = useNavigation;

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#4E4C4C",
          flexDirection: "row",
          width: 414,
          height: 60,
        }}
      >
        <Image
          style={{
            height: 40,
            width: 63,
            height: 30,
            marginLeft: 50,
            marginTop: 15,
            marginRight: 180,
          }}
          source={require("../../assets/icon.png")}
        ></Image>
        <Text
          style={{
            color: "white",
            textAlign: "justify",
            fontSize: 12,
            paddingTop: 25,
            textDecorationLine: 'underline'
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          Hi, Vexxa
        </Text>
        <Image
          style={{
            height: 30,
            width: 25,
            height: 25,
            marginTop: 20,
            marginLeft: 10,
          }}
          onPress={() => navigation.navigate("Profile")}
          source={require("../../assets/Profile.png")}
        />
      </View>
      <View>
        <TouchableOpacity
          title="important urgent"
          onPress={() => navigation.navigate("Important Urgent")}
          style={styles.Borderwan}
        >
          <Text style={styles.textIu}>Important urgent</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          title="important not urgent"
          onPress={() => navigation.navigate("Important Not Urgent")}
          style={styles.Bordertu}
        >
          <Text style={styles.textInu}>Important Not Urgent</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          title="not important urgent"
          onPress={() => navigation.navigate("Not Important Urgent")}
          style={styles.Bordertri}
        >
          <Text style={styles.textNiu}>Not Important Urgent</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          title="not important not urgent"
          onPress={() => navigation.navigate("Not Important Not Urgent")}
          style={styles.Borderfor}
        >
          <Text style={styles.textNinu}>Not Important Not Urgent</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          title="Create"
          onPress={() => navigation.navigate("Create")}
          style={styles.Borderfive}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: 20,
              width: 20,
              alignItems: "center",
              alignContent: "center",
              marginTop: 10,
              marginLeft: 10
            }}
            source={require("../../assets/Plus.png")}
          ></Image>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textIu: {
    fontSize: 16,
    textAlign: "center",
    marginTop: "11%",
    color: "#C71FBE",
  },

  textInu: {
    fontSize: 16,
    textAlign: "center",
    marginTop: "11%",
    color: "#64AFF9",
  },

  textNiu: {
    fontSize: 16,
    textAlign: "center",
    marginTop: "11%",
    color: "#2FC7BB",
  },

  textNinu: {
    fontSize: 16,
    textAlign: "center",
    marginTop: "11%",
    color: "#A460ED",
  },

  Borderwan: {
    marginTop: 80,
    marginBottom: 25,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 353,
    elevation: 20,
    shadowColor: "#52006A",
  },

  Bordertu: {
    marginBottom: 25,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 353,
    elevation: 20,
    shadowColor: "#52006A",
  },

  Bordertri: {
    marginBottom: 25,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 353,
    elevation: 20,
    shadowColor: "#52006A",
  },

  Borderfor: {
    marginBottom: 80,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 353,
    textAlign: "center",
    elevation: 20,
    shadowColor: "#52006A",
  },

  Borderfive: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#4E4C4C",
    marginLeft: 270,
  },
});
