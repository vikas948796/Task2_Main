import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const nav2 = () =>{
  return ( 
    <div className="App">

    <nav class="navbar navbar-expand-md  navbar-dark"  style={{zIndex:'5',backgroundColor:"#2A3891"}} >
    <a class="navbar-brand" style={{color:"White",fontSize:"30px"}} href="#">ne<span style={{color:"red",fontSize:"30px"}}>a</span>r</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item">
          <a class="nav-link " href="#"></a>
        </li>
        
        <li class="nav-item" >
          <a class="nav-link" href="#">Covid-19</a>
        </li>
  
  
        <li class="nav-item  dropdown" >
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Solution</a> 
          <div class="dropdown-menu" >
          <Link class="dropdown-item" to="career"><span style={{fontSize:"14.4px"}}><b>Career</b></span></Link>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Near for<br /><b>Marketers</b></span></a>
        </div>
        </li>
  
  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Products</a>
          <div class="dropdown-menu">
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>Allspark<br /><b>AI-powered Audience Curation</b></span></a>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}>CARBON<sup>TM</sup><br /><b>Real-World Data Enrichment</b></span></a>
        </div>
        </li>    
        <li class="nav-item">
          <a class="nav-link" href="#">The Data</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">About Us</a>
          <div class="dropdown-menu">
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Leadership</b></span></a>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Investors</b></span></a>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Board</b></span></a>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Resources</b></span></a>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Blog</b></span></a>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Newsroom</b></span></a>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Careers</b></span></a>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Privacy</b></span></a>
          <a class="dropdown-item" href="#"><span style={{fontSize:"14.4px"}}><b>Contact Us</b></span></a>
        </div>
        </li>
      </ul>
    </div>  
  </nav>
 </div>
  )
};

export default nav2;