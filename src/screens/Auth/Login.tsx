import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import Button from '../../ui/button'
const Login = () => {
  const [loginData, setLoginData] = useState({
    phone: "",
    password: ""
  })
  return (
    <View style={styles.login_container}>
      <Text style={styles.login_titile} >Daxil ol</Text>
      <View>
        <Text>
          Telefon
        </Text>
        <TextInput
          style={styles.input}
          placeholder='telefon'
        />
      </View>
      <View style={{marginBottom:57}}>
        <Text>
          Parol
        </Text>
        <TextInput
          style={styles.input}
          placeholder='telefon'
         secureTextEntry={true}
        />
      </View>
      <Button title='Daxil ol' />
    </View>
  )
}
const styles = StyleSheet.create({
  login_container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 20
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
  }
})

export default Login