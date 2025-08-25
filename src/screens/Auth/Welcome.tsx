import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../../ui/button'
import image from '../../assets/images/unnamed.png'
import { useNavigation } from '@react-navigation/native'
const Welcome = () => {
    const navigate = useNavigation()
    return (
        <View style={styles.welcome_container}>
            <Image source={image} style={{ width: 200, height: 200 }} />
            <View style={{ width: "80%" }}>
                <Text style={styles.text}>
                    Sizə daha  əlçatan olması üçün qeydiyyatdan keçərək davam edə bilərsiniz

                </Text>
            </View>
            <Button title='Qeydiyyat' onClick={()=>navigate.navigate("register")} />
            <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                <Text style={styles.text}>
                    Hesabınız varsa
                </Text>
                <Text style={{color:"#76CB4F"}}>Daxil olun</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    welcome_container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 20
    },
    text: {
        textAlign: "center",
        color: "#000000DE",
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 16,
        letterSpacing: 0
    }
})
export default Welcome