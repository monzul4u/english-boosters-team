import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import container from 'react-bootstrap';

const Team = (props) => {
    const { strTeam, strSport, strTeamLogo, idTeam } = props.tm;
    const history = useHistory();
    const showTeamDetails = idTeam => {
        const url = `teams/${idTeam}`;
        history.push(url);
    }
    return (
        
        <div className="container"> 
            
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <Card className="mb-3 text-center mt-5" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={strTeamLogo} />
                        <Card.Body>
                            <Card.Title>{strTeam}</Card.Title>
                            <Card.Text>
                                Sports Type:{strSport}
                            </Card.Text>
                            <Button onClick={() => showTeamDetails(idTeam)} variant="primary">Explore More</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4"></div>
                
            
               
            </div>
            </div>
    );
};

export default Team;