import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BasketIcon} from '../../assets/icons';

const Header = () => {
  const navigate = useNavigation().navigate;
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigate('MainTab')}>
        <Text style={styles.header_title}>TIK TAK</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Basket')}>
        <View style={{position: 'relative'}}>
          <Text>
            <BasketIcon />
          </Text>
        </View>
        <View style={styles.basket_count}>
          <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
            0
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFF',
    paddingVertical: 10,
    paddingHorizontal: 18,
    shadowColor: '#000',
    elevation: 5,
    borderBottomWidth:1,
    borderBottomColor:"#00000014"
  },
  header_title: {
    color: '#2B3043',
    fontWeight: '800',
    fontSize: 24,
    fontFamily: 'Roboto_Condensed-ExtraBold',
  },
  basket_count: {
    backgroundColor: '#ED1C24',
    width: 17,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    top: -32,
    left: 15,
  },
});
