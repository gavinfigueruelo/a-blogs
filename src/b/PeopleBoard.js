import React, { Component } from 'react';

class PeopleForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      phone: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.addPerson(this.state);
    this.setState({firstname:'', lastname:'', address:'', phone:''});
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <div>
       <label htmlFor="firstname">First Name</label>
       <input type="text" id="firstname" name="firstname" value={this.state.firstname} onChange={this.handleInput}/>
       <label htmlFor="lastname">Last Name</label>
       <input type="text" id="lastname" name="lastname" value={this.state.lastname} onChange={this.handleInput}/>
       <label htmlFor="address">Address</label>
       <input type="text" id="address" name="address" value={this.state.address} onChange={this.handleInput}/>
       <label htmlFor="phone">Phone Number</label>
       <input type="tel" id="phone" name="phone" value={this.state.phone} onChange={this.handleInput}/>
      </div>
      <button type="submit">Add your information</button>
      </form>
    )
  }
}
class PeopleBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      person:[{}]
    }
  this.addPerson = this.addPerson.bind(this);
  }
  addPerson(person){
    const people = this.state.person;
    people.push(person);
    this.setState({people});
  }
  render(){
    return(
      <div>
      <PeopleForm addPerson={this.addPerson}/>
      </div>
    )
  }
}








export default PeopleBoard
