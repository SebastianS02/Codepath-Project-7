import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadCrewmates from './pages/ReadCrewmates'
import CreateCrewmate from './pages/CreateCrewmate'
import EditCrewmate from './pages/EditCrewmate'
import { Link } from 'react-router-dom'
import { supabase } from './client'


const App = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await supabase
      .from('Crewmates')
      .select()
      .order('created_at', { ascending: true })
      setCrewmates(data);
    }
    fetchData();
  })
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadCrewmates data={crewmates}/>
    },
    {
      path:"/edit/:id",
      element: <EditCrewmate data={crewmates} />
    },
    {
      path:"/new",
      element: <CreateCrewmate />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Crewmates</h1>
        <Link to="/"><button className="headerBtn"> Meet the Crewmates 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create a Crewmate 🏆 </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;