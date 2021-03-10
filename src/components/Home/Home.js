import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Team from '../Team/Team';


const Home = () => {
    const [team,setTeam] = useState([])
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
    },[])
    return (
        <div>
            
            {
                team.map(tm => <Team tm={tm} ></Team> )
            }
        </div>
    );
};

export default Home;