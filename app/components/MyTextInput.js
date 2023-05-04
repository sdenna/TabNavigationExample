import * as React from 'react';
import {View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';


function MyTextInput({icon, placeholder, onChangeText, keyboardType, maxLength, secureTextEntry}) {
  return (
        
        <TextInput 
          style={styles.textInput} 
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          clearTextOnFocus={true} />
      
  );
}

const styles = StyleSheet.create({
   textInput: {
   backgroundColor: colors.light,
   paddingLeft: 10,
   paddingVertical: 3,
   borderRadius:10,
   width: 150,
   placeholderTextColor: colors.primary,
   fontSize:16,
   borderWidth: 2,
   borderColor: colors.secondary,
   marginBottom: 5,
 },
})

export default MyTextInput;
