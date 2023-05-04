import React, {useState} from 'react';

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

  export function handleSetFriends(friend) {
    setFriends(friend)
}


  