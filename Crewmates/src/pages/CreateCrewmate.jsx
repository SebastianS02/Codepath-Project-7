import React from 'react';
import './CreateCrewmate.css'
import { supabase } from '../client'

const CreateCrewmate = () => {
    const createCrewmate = async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const color = document.getElementById('color').value;
        const speed = document.getElementById('speed').value;

        const crewmate = {
            name: name,
            color: color,
            speed: speed
        }

        await supabase
        .from('Crewmates')
        .insert(crewmate)
        .select();

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={createCrewmate}>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="text" id="color" name="color" /><br />
                <br/>

                <label for="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" /><br />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateCrewmate;