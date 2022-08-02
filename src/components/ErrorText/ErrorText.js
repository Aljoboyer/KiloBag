import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from './../../Theme/Colors';

export default function ErrorText({errors, Customstyles}) {
  return (
    <Text style={[{fontSize: 12, fontWeight:'500', color: Colors.LightPink, paddingVertical: 5}, Customstyles]}>{errors}</Text>
  )
}