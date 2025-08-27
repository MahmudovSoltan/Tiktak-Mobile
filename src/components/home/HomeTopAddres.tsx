import { StyleSheet, Text, View } from 'react-native'

const HomeTopAddres = () => {
    return (
        <View style={styles.addres_container}>
            <Text style={styles.addres_top}>
                Çatdırılma ünvanı:
            </Text>
            <Text style={styles.addres_info}>
                55 Zarifa Aliyeva, Bakı, Azerbaij ...
            </Text>
        </View>
    )
}

export default HomeTopAddres

const styles = StyleSheet.create({
    addres_container:{
        marginTop:23,
        backgroundColor: "#F6F5FB",
        paddingHorizontal:20,
        paddingVertical:7,
        borderRadius:10

    },
    addres_top:{
        fontWeight:"700",
        fontSize:16,
        color:'#2B3043'
    },
    addres_info:{
        color:"#2B3043",
        fontWeight:"300",
        marginTop:3,
        fontSize:14
    }
})