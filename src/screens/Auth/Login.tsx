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
        <Text style={styles.label}>
          Telefon
        </Text>
        <TextInput
          style={styles.input}
          placeholder='telefon'
        />
      </View>
      <View style={{marginBottom:57}}>
        <Text style={styles.label}>
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
    alignItems: 'center',
    gap:23,
    padding: 20,
    paddingTop:100
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
  label:{
    fontSize:14
  }
})

export default Login