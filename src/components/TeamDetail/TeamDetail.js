import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import img3 from '../../images/Rectangle 28.png';
import { FaFacebook,FaTwitter,FaYoutube,FaClock,FaFlag,FaFutbol,FaTransgender} from "react-icons/fa";



const TeamDetail = () => {
    const { id } = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [id]);

    return (
      
        
        <div className="container">
            <div className="row">
                <img style={{ width: '100%', height: '150px', marginTop: '20px' }} src={team.strTeamBanner} alt="" />

                <div className="col-md-6 mt-5 mb-5 border bg-success rounded">
                    
                    <h2> <FaClock/> Founded:{team.intFormedYear} </h2>
                    <h2> <FaFlag/> Country:{team.strCountry}</h2>
                    <h2> <FaFutbol/> Sports Type:{team.strSport}</h2>
                    <h2> <FaTransgender/> Gender:{team.strGender} </h2>
                </div>
                <div className="col-md-6 mt-5 mb-5 border bg-success rounded">
                    <img style={{ width: '100%' }} src={img3} alt="" />
                </div>

            </div>
            <p className="text-justify">{team.strDescriptionEN}</p>

            <div className="d-inline d-flex justify-content-center">
                <a href={`https://${team.strTwitter}`} target="_blank" rel="noreferrer">
                    <h2>
                        <FaTwitter></FaTwitter>
                    </h2>
                </a>
                <a href={`https://${team.strFacebook}`} target="_blank">
                    <h2>
                    <FaFacebook></FaFacebook>
                    </h2>
                </a>
                <a href={`https://${team.strYoutube}`} target="_blank">
                    <h2>
                        <FaYoutube/>
                    </h2>
                </a>

            </div>



        </div>
    );
};

export default TeamDetail;