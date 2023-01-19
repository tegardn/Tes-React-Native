import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const navigate = useNavigation;

export default function NewPassword({ navigation }) {
  const [text, onChangeText] = React.useState(null);

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
            width: 296
          }}
        >
          We happy to see you again. Thank you for choosing us again
        </Text>
      </View>
      <View style={styles.email}>
        <TextInput 
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your email address"
          autoComplete="email"
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.textButton}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
