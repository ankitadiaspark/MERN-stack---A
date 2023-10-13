import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class ServiceBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      age: 0,
      stfrom: "",
      stto: "",
      bookingStatus: "pending",
      bookingSubmit: "false",
    };
  }

  fnameChangeHandler = (e) => {
    this.setState({ fname: e.target.value });
  };
  lnameChangeHandler = (e) => {
    this.setState({ lname: e.target.value });
  };
  ageChangeHandler = (e) => {
    this.setState({ age: e.target.value });
  };
  stFfromChangeHandler = (e) => {
    this.setState({ stfrom: e.target.value });
  };
  stToChangeHandler = (e) => {
    this.setState({ stto: e.target.value });
  };

  componentDidMount(){
    this.setState({ bookingSubmit: false });
  }

  submitBooking = (e) => {
    e.preventDefault();
    
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    this.setState({ bookingStatus: "confirm" });
    axios
      .post(
        "http://localhost:7898/api/bookings",
        JSON.stringify(this.state),
        options
      )
      .then((res) => {
        console.log(res);
        this.setState({ bookingSubmit: true });
      })
      .catch((err) => console.log("error fetching data", err.response.data));
  };

  render() {
    return (
      <div>
        {this.state.bookingSubmit ? (
          <div>
            <h1>Booking Confirm</h1>
            <p>
              Go back to <Link to="/">Home</Link>
            </p>
          </div>
        ) : (
          <form onSubmit={this.submitBooking}>
            <label>First Name</label>
            <input
              type="text"
              value={this.state.fname}
              onChange={this.fnameChangeHandler}
            />
            <label>Last Name</label>
            <input
              type="text"
              value={this.state.lname}
              onChange={this.lnameChangeHandler}
            />
            <label>Age</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.ageChangeHandler}
            />
            <label>Station From</label>
            <input
              type="text"
              value={this.state.stfrom}
              onChange={this.stFfromChangeHandler}
            />
            <label>Station To</label>
            <input
              type="text"
              value={this.state.stto}
              onChange={this.stToChangeHandler}
            />
            <button type="submit">Confirm booking</button>
          </form>
        )}
      </div>
    );
  }
}

export default ServiceBooking;
