import React, { Component } from "react";
import { Router, Route,Link } from 'react-router-dom';
import axios from 'axios';
class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isAddProduct: false,
          error: null,
          response: {},
          userData: {},
          isEditProduct: false
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }

      onFormSubmit(){
        axios.post(`https://reqres.in/api/users`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    render() {
        return (
            <div classNeame="container">
            <form onSubmit={this.onFormSubmit.bind(this)}>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email"/>
            </div>
            <div class="form-group">
              <label for="pwd">Frist name:</label>
              <input type="text" class="form-control" id="fstname"/>
            </div>
            <div class="form-group">
              <label for="pwd">Last  name:</label>
              <input type="text" class="form-control" id="lstname"/>
            </div>
            <button className="btn btn-primary" type="submit">Submit form</button>
          </form>
          </div>
        )

    }

}
export default  Adduser;