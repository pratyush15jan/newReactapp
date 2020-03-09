import React, { Component } from "react";
import { Router, Route,Link } from 'react-router-dom';
import axios from 'axios';

class Users extends  React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
          }
      }
      componentDidMount() {
        axios.get(`https://reqres.in/api/users?page=2`)
          .then(res => {
            const persons = res.data.data;
            console.log(persons);
            this.setState({ persons });
          })
      }
 render(){
   return (
       <div>
<Link to="/addusers" className="btn btn-primary">New User </Link>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  { this.state.persons.map(person => 
    <tr key={person.id}>
      <th scope="row">{person.id}</th>
      <td>{person.email}</td>
      <td>{person.first_name}</td>
      <td>{person.last_name}</td>
    </tr>
    )}
    
  </tbody>
</table>
</div>
   )

   }
}
export default Users;