import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'


const ValidateText = ({Msg, type}) => {

  const styles = {
    ValidateText: {
      color: type == 'error' ? '#ff0000' : '#00ff00',
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10
    }
  }

  return (
    <View>
  
        <Text style={styles.ValidateText}>
          {Msg}
        </Text>
    </View>
  )
}

export default ValidateText