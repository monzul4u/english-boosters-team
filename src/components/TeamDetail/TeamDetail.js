import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';


const TeamDetail = () => {
    
    const {id} = useParams();
    const [team,setTeam] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.teams[0]))
    },[]);

    return (
        <div>
          
          <h2 className="text-center">This is Team Id details{id}</h2>
          <h2>{team.strCountry}</h2>
          
          
             
        </div>
    );
};

export default TeamDetail;