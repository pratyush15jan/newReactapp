import React, { Component } from "react";
import { Router, Route,Link } from 'react-router-dom';
class Edituser extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div className="container">
            <form >
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
        )

    }

}
export default  Edituser;