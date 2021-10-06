import React from "react";
import Filters from "./Filters";
import Footerbtn from "./FooterBtn";

const Footer = (props) => {
  return (
    <footer className="bg-secondary mt-1 d-flex justify-content-between align-items-center">
          <Footerbtn mode={props.mode} onModeChange={props.onModeChange} className="d-inline" />
          <Filters  onState={props.onState} state={props.state} todo = {props.todo} onItemSelected={props.onItemSelected}/>
      
    </footer>
  );
};

export default Footer;
