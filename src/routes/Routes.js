import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import BatchAdd from "../pages/BatchAdd";
import BatchStatus from "../pages/BatchStatus";
import BatchSubmit from "../pages/BatchSubmit";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Jurisdiction from "../pages/Jurisdiction";

const ProjectRoutes = () => {
  return (
	<BrowserRouter>	
		<Routes>
    		<Route path="/batchstatus" element={<BatchStatus />} /> 
			<Route path="/batchadd" element={<BatchAdd />} /> 
			<Route path="/batchsubmit" element={<BatchSubmit />} /> 
			<Route path="/jurisdiction" element={<Jurisdiction />} /> 

			<Route path="/" element={<Home />} /> 
			<Route path="/nopage" element={<NoPage />} />
			


    		<Route path="*" element={<NoPage />} />
      
  		</Routes>
	</BrowserRouter>

  )
}

export default ProjectRoutes
