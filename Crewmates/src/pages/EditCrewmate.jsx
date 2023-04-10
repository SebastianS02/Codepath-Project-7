import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditCrewmate.css'
import { supabase } from '../client'

const EditCrewmate = ({data}) => {

    const {id} = useParams();
    const [crewmate, setCrewmate] = useState(data.filter(item => item.id == id)[0]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrewmate((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCrewmate = async (event) => {
        event.preventDefault();

        await supabase
        .from('Crewmates')
        .update({name: crewmate.name, color: crewmate.color, speed: crewmate.speed})
        .eq('id', id);

        window.location = "/";
    }

    const deleteCrewmate = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Crewmates')
        .delete()
        .eq('id', id); 
    
        window.location = "http://localhost:5173/";
    }

    return (
        <div>
            <form onSubmit={updateCrewmate} onChange={handleChange}>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crewmate.name} /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="text" id="color" name="color" value={crewmate.color} /><br />
                <br/>

                <label for="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" value={crewmate.speed} /><br />
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deleteCrewmate}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrewmate