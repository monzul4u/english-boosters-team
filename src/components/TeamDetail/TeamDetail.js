import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useParams } from 'react-router';



const TeamDetail = () => {
    
    const {id} = useParams();
    const [team,setTeam] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[id]);

    return (
        <div>
          <img style={{width:'100%', height:'150px'}} src={team.strTeamBanner} alt=""/>
          <h2>Founded:{team.intFormedYear} </h2>
          <h2>Country:{team.strCountry}</h2>
          <h2>Sports Type:{team.strSport}</h2>
          <h2>Gender:{team.strGender}</h2>
           <p>{team.strDescriptionEN}</p>
            <h2 className="text-center"><FontAwesomeIcon icon={faCoffee} /> <FontAwesomeIcon icon={faCoffee} /> <FontAwesomeIcon icon={faCoffee} /></h2>
            
            

          
          
             
        </div>
    );
};

export default TeamDetail;