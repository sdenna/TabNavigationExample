import * as React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../config/colors';


function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome name="trash-o" size={35} color={colors.verylight}/>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark, 
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  }
  })
export default ListItemDeleteAction;