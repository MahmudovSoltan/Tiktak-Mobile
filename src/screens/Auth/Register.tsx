import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../../ui/button'
import { useNavigation } from '@react-navigation/native'


const Refister = () => {
  const navigate = useNavigation()
  const [loginData, setLoginData] = useState({
    phone: "",
    password: ""
  })
  
  
  return (
    <View style={styles.login_container}>
      <Text style={styles.login_titile} >Qeydiyyatdan keç</Text>
      <View>
        <Text style={styles.label}>
          Ad, soyad
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Ad, soyad'
        />
      </View>
      <View>
        <Text style={styles.label}>
          Telefon
        </Text>
        <TextInput
          style={styles.input}
          placeholder='telefon'
        />
      </View>
      <View style={{ marginBottom: 57 }}>
        <Text style={styles.label}>
          Parol
        </Text>
        <TextInput
          style={styles.input}
          placeholder='telefon'
          secureTextEntry={true}
        />
      </View>
      <Button title='Qeydiyyat' />
      <View style={styles.login_bottom}>
        <Text style={styles.bottom_text}>
          Hesabınız varsa
        </Text>
        <TouchableOpacity onPress={() => navigate.navigate("login")}>
          <Text style={styles.register_text}>
            Daxil olun
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  login_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 23,
    padding: 20,
    paddingTop: 100
  },
  login_titile: {
    fontSize: 24,
    color: "#2B3043",
    marginBottom: 63,
    textAlign: "center",
    fontWeight: "500"
  },
  input: {
    backgroundColor: "#F6F5FB",
    width: 350,
    borderRadius: 10,
    padding: 10,
    height: 50,
    marginTop: 10,
  },
  label: {
    fontSize: 14
  },
  login_bottom: {
    flexDirection: "row",
    gap: 5
  },
  bottom_text: {
    color: "#000000DE",
    fontSize: 12,

  },
  register_text: {
    fontSize: 12,
    color: "#76CB4F"
  }
})

export default Refister