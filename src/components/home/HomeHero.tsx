import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HeroImage from '../../assets/images/unnamed.png'
const HomeHero = () => {
    return (
        <View style={styles.hero_container}>
            <View>
                <Image source={HeroImage} style={{ width: 150, height: 150 }} />
            </View>
            <View style={styles.hero_left}>
                <View>
                    <Text style={styles.hero_main_text}>
                        Meyvələrə

                    </Text>
                    <Text style={styles.hero_info}>
                        həftə sonuna kimi
                    </Text>
                </View>
                <View>
                    <Text style={styles.hero_main_text}>
                        20% ENDIRIM
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default HomeHero

const styles = StyleSheet.create({
    hero_container: {
        backgroundColor: "#B380FF",
        borderRadius: 10,
        marginTop: 29,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap:20
    },
    hero_left: {
        paddingRight: 29
    },
    hero_main_text: {
        color: "#FFFFFF",
        fontWeight: "900",
        fontSize: 22,
        letterSpacing: 1,
        textTransform: "uppercase"
    },
    hero_info: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: 18,
        letterSpacing: 1,
        textTransform: "uppercase"
    }
})