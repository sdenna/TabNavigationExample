import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView} from "react-native-gesture-handler";  // needed for Android

function ListItem({name, age, favActivity, onPress, renderRightActions}) {
  return(
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.friendContainer}>
                <Text style={styles.text}>{name}, {age}</Text>
                {favActivity && <Text style={[styles.text, {color: colors.secondary}]}> 
                    {favActivity}</Text>}
            </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
   friendContainer: {
    backgroundColor: colors.light,
    padding: 10,
    height: 80,
    justifyContent: 'center',
    
  },
    text: {
    color: colors.primary,
    fontSize: 20,
  }

});

export default ListItem; 
