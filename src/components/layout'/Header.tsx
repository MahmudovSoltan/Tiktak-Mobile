import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigate = useNavigation().navigate
  return (
    <View>
      <Text>Header</Text>
      <TouchableOpacity onPress={()=>navigate("Basket")}>
        <Text>
          Basket
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header