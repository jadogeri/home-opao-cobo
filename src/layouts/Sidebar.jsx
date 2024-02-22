import React from 'react'
import '../../global.css'

function Sidebar() {
  console.log('sidebar')

  return (
  
  <nav
  className="w3-sidebar w3- w3-collapse w3-top w3-dark-green w3-large w3-padding"
  style={{ zIndex: 3, width: 300, fontWeight: "bold" }}
  id="mySidebar"
>
  <br />
  <a
    href="javascript:void(0)"
    onClick={()=>{w3_close()}}
    className="w3-button w3-hide-large w3-display-topleft"
    style={{ width: "100%", fontSize: 22 }}
  >
    Close Menu
  </a>
  <div className="w3-container">
    <h3 className="w3-padding-64">
      <b>
        Home side  bar created
        <br />
        Page
      </b>
    </h3>
  </div>
  <div className="w3-bar-block">

  <a
      href="/"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Home
    </a>
    <a
      href="/jurisdiction"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Jurisdiction
    </a>
    <a
      href="#showcase"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Showcase
    </a>
    <a
      href="#services"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Services
    </a>
    <a
      href="#designers"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Designers
    </a>
    <a
      href="#packages"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Packages
    </a>
    <a
      href="#contact"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Contact
    </a>
    <a
      href="/batchadd"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Batch Add
    </a>
    <a
      href="/batchstatus"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Batch Status
    </a>
    <a
      href="/batchsubmit"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-hover-white"
    >
      Batch Submit
    </a>

  </div>
</nav>
  )
}

export default Sidebar




// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// // Modal Image Gallery
// function onClick(element) {
//   document.getElementById("img01").src = element.src;
//   document.getElementById("modal01").style.display = "block";
//   var captionText = document.getElementById("caption");
//   captionText.innerHTML = element.alt;
// }

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
  