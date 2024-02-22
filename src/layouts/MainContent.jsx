import React from 'react'
import Home from '../pages/Home'
import BatchAdd from '../pages/BatchAdd'
import BatchStatus from '../pages/BatchStatus'
import BatchSubmit from '../pages/BatchSubmit'

const getView = (pathName) => {
  switch (pathName) {

      //const initialState = {path : '/',pathName : 'Home',element : <Home />};

      case 'HOME':
          return <Home />;
      case 'BATCHADD':
          return { ...state, path: '/batchadd', pathName:'BatchAdd', element :<BatchAdd />}
      case 'BATCHSTATUS':
          return { ...state, path: '/batchstatus', pathName:'BatchStatus', element :<BatchStatus />}
      case 'BATCHSUBMIT':
          return { ...state, path: '/batchsubmit', pathName:'BatchSubmit', element :<BatchSubmit />}
            
      default: <Home />
  }
}
function MainContent({pathName}) {
  console.log(pathName);

  return (
    getView(pathName)
  )
}

export default MainContent