import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

const navigate = useNavigation;

export default function Forgot(navigation) {
  const [text, onChangeText] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.group}>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Forgot Password
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#B0ABAB",
            marginBottom: 50,
            width: 296,
          }}
        >
          We happy to see you again. Thank you for choosing us again
        </Text>
      </View>
      <View>
        <TextInput
          icon={require("../../assets/email.png")}
          style={styles.email}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your email address"
          autoComplete="email"
        />
      </View>
      <View style={style}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 25,
  },

  email: {
    width: 345,
    height: 55,
    borderWidth: 1,
    padding: 10,
    opacity: 0.5,
    borderRadius: 8,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4E4C4C",
    width: "95%",
    paddingVertical: 20,
    borderRadius: 30,
    marginTop: 300,
  },

  textButton: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
