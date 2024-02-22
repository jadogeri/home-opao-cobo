import React from 'react'

function Header() {
  return (
    <header className="w3-container-header w3-top w3-hide-medium w3-hide-small w3-black w3-xlarge "
    style={{zIndex:5}} >
<a
href="javascript:void(0)"
className="w3-button w3-black w3-margin-right"
onClick={()=>{w3_open()}}
>

</a>
<span>OPAO Change Order Batch with header test</span>

</header>
  )
}

export default Header