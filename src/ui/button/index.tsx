import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { IButtonProps } from '../../types/props.type'

const Button = ({ title, onClick }: IButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: { 
    height: 48,
    width: '100%',
    backgroundColor: '#76CB4F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  button_text: {
    fontSize: 16,
    fontWeight: '600',
    color: "#FFFFFF",
  }
})
