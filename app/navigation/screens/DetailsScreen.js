import React, {useState, useContext} from 'react';
import { Context } from '../../config/context';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ListItemSeparator from '../../components/ListItemSeparator';
import ListItem from '../../components/ListItem';
import ListItemDeleteAction from '../../components/ListItemDeleteAction';

export default function DetailsScreen() {
  
  const [context, setContext] = useContext(Context);

  const handleDelete = friend => {
    console.log("deleting " + friend.name);
    const newFriends = context.filter(f => f.id !== friend.id);
    setContext(newFriends);
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => alert('This is the "Details" screen.')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>
        Details Screen
      </Text>

      <FlatList 
        style={styles.flatlistStyles}
        data={context}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) =>
          <ListItem
            name={item.name}
            age={item.age}
            favActivity={item.favActivity}
            onPress={() => console.log('clicked on ' +item.userName)}
            renderRightActions = {() => 
              <ListItemDeleteAction 
                onPress={() => handleDelete(item)} /> }
            />
        }
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  flatlistStyles: {
    width: 270,
  }
});
