import React, {useState} from 'react';

// create a funcitonal component sole purpose is to have the arrray, state function and then export the array and state
// the other screesn can inport this component
// like an abstraction that will be called from each screen taht needs to manipulate the data

function MyData(newFriend) {

 const otherfriends = [
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
 
 return otherfriends; 

  export const handleSetFriends = (friends) => {
    setFriends(friends);
    console.log(friends);
    }

  }

  //one sender function (sends data to this file)
  // one getter function (that gets the information from this file)
  // one deleter function (delete)
  