import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadCrewmates = (props) => {

    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        setCrewmates(props.data);
    }, [props]);
    
    return (
        <div className="ReadCrewmates">
            {
                crewmates && crewmates.length > 0 ?
                crewmates.map((crewmate,index) => 
                   <Card id={crewmate.id} name={crewmate.name} color={crewmate.color} speed={crewmate.speed}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadCrewmates