import React, { Component } from 'react';
import "./About.css";
import sara_karnik from "../assets/sara_karnik.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
          <div className="centered">
          <img 
          className="profile_image" src={sara_karnik}
          // Image goes here
          alt="Profile Pic"
          ></img>
          </div>
          </div>
          <div className="split right">
          <div className="centered">
          <div className="name_title">Sara Karnik</div>
          <div className="brief_description">
          I go to the University of Maryland - College Park and I am studying Computer Science with a focus on Quantum Information.
          I am currently a rising sophamore.
          I am originally from Princetion, NJ.
          I have been coding since middle school and around high school I developed an interest in Quantum Computing.
          Fun Fact: I am left handed!
          </div>
          </div>
          </div>
          </div>
      </div>
    )
  }
}