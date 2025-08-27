import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import Header from "../../components/layout/Header";
export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>

      <Header />
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Product')}
      />


    </View>
  );
}