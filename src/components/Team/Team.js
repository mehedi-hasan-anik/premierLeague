import React from 'react';
import { useHistory } from 'react-router';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Team = ({team}) => {
    const{idTeam,strTeam,strSport,strTeamBadge}=team;
   
    const history = useHistory()
    const handle = id =>{
       const url = `/team/${id}`;
       history.push(url);
    }

   
    return (
       
     <div className="cart">
        <img style={{width:'100%'}} src={strTeamBadge} alt=""/ >
        <h3 style={{ color:'#A610E1'}}>{strTeam}</h3>
        <p>Sport Type : {strSport}</p>
        <button onClick={()=> handle(idTeam)}>Explore<FontAwesomeIcon icon={faAngleDoubleRight} /></button>
    </div>
     
    );
};

export default Team;