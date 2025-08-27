
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/layout/Header";
import HomeHero from "../../components/home/HomeHero";
import HomeTopAddres from "../../components/home/HomeTopAddres";
import HomeCard from "../../components/home/HomeCard";
export default function HomeScreen() {
 

  return (
    <View>

      <Header />

      <View style={styles.homeBody}>
        <HomeTopAddres />
        <HomeHero />
        <HomeCard/>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  homeBody: {
    paddingHorizontal: 15,
    backgroundColor:"#fff",
    height:"100%"
  }
})