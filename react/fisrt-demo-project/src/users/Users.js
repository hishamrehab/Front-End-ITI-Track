import React from "react";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
        isAuth: true,
        users: [
            {name : "hend" , age : 20 , isAdmin : true},
            {name : "ali" , age : 22 , isAdmin : true},
            {name : "mohamed" , age : 20 , isAdmin : false}
        ]
    }
  }


 render() {
    return (
        <>
        <h1>Users</h1>
         <ul>
            {(this.state.isAuth)
             ? this.state.users.map((user , index) => {
               if(user.isAdmin){
                 return (<li key={index}>{user.name}</li>)
               }
            }): <h1>Please Login First</h1>}
         </ul>
        </>
    )
 }

}