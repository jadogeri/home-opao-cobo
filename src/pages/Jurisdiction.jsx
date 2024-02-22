import React,{useContext, useState} from 'react'
import {View} from 'react-native'
import * as Animatable from 'react-native-animatable'
import './global.css'
import MainContent from '../layouts/MainContent'
import Sidebar from '../layouts/Sidebar'
import Header from '../layouts/Header'
import HeaderSmall from '../layouts/HeaderSmall'

function Jurisdiction() {
  const [view,setView] = useState('Home');
  return (

<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Poppins"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody,h1,h2,h3,h4,h5 {font-family: "Poppins", sans-serif}\nbody {font-size:16px;}\n.w3-half img{margin-bottom:-6px;margin-top:16px;opacity:0.8;cursor:pointer}\n.w3-half img:hover{opacity:1}\n'
    }}
  />
  {/* header with logo*/}

 <Header />

<Sidebar />
<HeaderSmall />

  {/* Top menu on small screens */}


  {/* Overlay effect when opening sidebar on small screens */}
  <div
    className="w3-overlay w3-hide-large"
    onClick={()=>{w3_close()}}
    style={{ cursor: "pointer" }}
    title="close side menu"
    id="myOverlay"
  />

<MainContent  />

  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginLeft: 340, marginRight: 40 }}>

  <Animatable.View animation='slideInRight' duration={1000}>

    {/* Header */}
    <div className="w3-container" style={{ marginTop: 80 }} id="showcase">
      <h1 className="w3-jumbo">
        <b>Home Website</b>
      </h1>
      <h1 className="w3-xxxlarge w3-text-red">
        <b>Page.</b>
      </h1>
      <hr style={{ width: 50, border: "5px solid red" }} className="w3-round" />

      <select value="Radish">
  <option value="Orange">Orange</option>
  <option value="Radish">Radish</option>
  <option value="Cherry">Cherry</option>
</select>
    </div>
    {/* Photo grid (modal) */}
    
    {/* Services */}

      
    {/* End page content */}

    </Animatable.View>

  </div>
  {/* W3.CSS Container */}


</>

  )
}



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
  
  export default Jurisdiction;


  
  // <Animatable.View animation='fadeInUpBig' style={styles.footer}>
  //     <Text style={styles.title}>Start Change Orders</Text>
  //     <Text style={styles.text}>Start Processing Change Orders with Ease</Text>
  //     <TouchableOpacity style={styles.signIn} onPress={()=> navigate('signin') }>
  //         <Text style={styles.textSign}>Get Started</Text>
  //         <MaterialIcons name='navigate-next'
  //             color='white'
  //             size={20} />
  //     </TouchableOpacity>
  // </Animatable.View>
