import React, {useState} from 'react';
import './App.css';
import {List} from "./List/List";

function App() {

    const [users, setUsers] = useState (
    [
                {
                    email : 'email@gmail.com',
                    username : "User1",
                    selected : false
                },

                {
                    email : 'email2@gmail.com',
                    username : "User2",
                    selected : true
                },
                {
                    email : 'email3@gmail.com',
                    username : "User3",
                    selected : false
                }
            ]
    )


    const onUserSelected = (index)=>{
        console.log(index)
        setUsers(
            users.map((user, i)=>{
                if (i === index-1) user.selected = !user.selected;
                return user;
            })
        )
    }

  return (
      <div className="root">
        <h1>Users List</h1>
        <List users={users} userSelectedCallback={onUserSelected}/>
      </div>

  );
}

export default App;
