import React, {useState} from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import ListItemSeparator from '../../components/ListItemSeparator';
import ListItem from '../../components/ListItem';
import colors from '../../config/colors';
import MyTextInput from '../../components/MyTextInput';
import ListItemDeleteAction from '../../components/ListItemDeleteAction';




 

export default function HomeScreen() {

  const initialFriends = [
    {
      id: 1,
      name: "Praneet",
      age: "17",
      favActivity: "Gaming a lot",
    },
    {
      id: 2,
       name: "Stephen",
      age: "16",
      favActivity: "Sleeping",
    },
    {
      id: 3,
      name: "Albert",
      age: "18",
      favActivity: "Water skiing",
    },
    {
      id: 4,
      name: "Brayden",
      age: "10",
      favActivity: "Nerf Gun Battles",
    },
  ]
  const [friends, setFriends] = useState(initialFriends);
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState(''); 
  const [activity, setActivity] = useState(''); 
  const[id, setId] = useState(friends.length +1);

  const handleDelete = friend => {
    console.log("deleting " + friend.name);
    const newFriends = friends.filter(f => f.id !== friend.id);
    setFriends(newFriends);
  }

  const addFriend = () => {
  
    // for now, id will be length + 1.  However, if we begin deleting elements, this
    // will cause an issue. At that time we will look for other ways to get a unique id #
      const newFriend = [
        {
          id: id,
          name: userName,
          age: age,
          favActivity: activity,
  
        }
      ] 
    const newArray = friends.concat(newFriend);  
    //handleSetFriends(newFriend);
    setFriends(newArray);
    //console.log(friends);
    setId(id + 1);
    }


  return (
    <View style={styles.container}>
    <View style={styles.userEntryContainer}>
      <Text style={[styles.text, {fontWeight: 'bold', marginBottom: 5}]}>Please enter your info:</Text>
    
      <MyTextInput 
          placeholder="Name"
          style={styles.textInput}
          onChangeText = {text => setUserName(text)}
      />

      <MyTextInput 
          placeholder="Age"
          style={styles.textInput}
          onChangeText = {text => setAge(text)}
      />

      <MyTextInput 
          placeholder="Favorite Activity"
          style={styles.textInput}
          onChangeText = {text => setActivity(text)}

      />

      <Text>My username: {userName}</Text>
      <Text>My age: {age}</Text>
      <Text>My activity: {activity}</Text>

      <View style={{margin: 10, }}>
        <Button
          title="add user"
          color= {colors.secondary}
          onPress={addFriend}
        />
      </View>
    {/* // need as scrollview here */}

      <FlatList 
        style={styles.flatlistStyles}
        data={friends}
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
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight +10,
    backgroundColor: colors.verylight,
    padding: 8,
    alignItems: 'center',
  
  },
 textInput: {
   backgroundColor: colors.light,
   paddingLeft: 10,
   paddingVertical: 3,
   borderRadius:10,
   width: 150,
   placeholderTextColor: colors.primary,
   fontSize:16,
 },
userEntryContainer: {
  width: 250,
  alignItems: 'center',

},
  text: {
    color: colors.primary,
    fontSize: 24,
  },
  flatlistStyles: {
    width: 270,
  }
});
