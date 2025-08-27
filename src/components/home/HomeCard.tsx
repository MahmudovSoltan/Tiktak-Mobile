
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imag from '../../assets/images/image3.png'
const HomeCard = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={[{ marginTop: 12 }, styles.container]}>
      <TouchableOpacity onPress={()=>navigation.navigate("Product")} style={styles.card_container}>
        <Image
          source={imag}
          style={{ width: 69, height: 44 }}   // <-- Burda verməlisən
          resizeMode="contain" />
        <Text style={styles.card_text}>
          Tərəvəz
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default HomeCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  card_container: {
    width: 105,
    height: 105,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#00000029",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2.5,
    elevation: 5,
    borderWidth: 0.5,
    borderColor: "#00000029"
  },
  card_text:{
    color:"#2B3043",
    fontWeight:"400",
    fontSize:16,
    marginTop:12
  }
})