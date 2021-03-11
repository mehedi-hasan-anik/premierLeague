import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMarsStroke, faPodcast} from '@fortawesome/free-solid-svg-icons'
import facebook from '../image/Facebook.png'
import twitter from '../image/Twitter.png'
import youtube from '../image/YouTube.png'
import Male from '../image/male.png'
import Female from '../image/female.png'
import './TeamDetails.css'



const TeamDetails = () => {
    const{teamId}=useParams();
    const [team,setTeam]=useState({});
    const{intFormedYear,strCountry,strGender,strTeam,strSport,strTeamBadge,strDescriptionEN,strYoutube,strFacebook,strTwitter}=team;
    
    const gender= strGender;
    
   
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams[0]))
    },[teamId])

   

    return (
    <div  className="all-area">
      <div className="logo-area">
                <div className="logo">
                   <img style={{width:'200px'}} src={strTeamBadge} alt=""/>
                </div>
       </div>
        <div className="container main-area">
            
           <div className="center-area">

                <div className="left-area">
                        <h1>{strTeam}</h1>
                        <p><span style={{marginRight:'10px'}}><FontAwesomeIcon icon={faPodcast} /></span> Founded  {intFormedYear}</p>
                        <p><span style={{marginRight:'10px'}}><FontAwesomeIcon icon={faFutbol} /></span> Sport Type :    {strSport}</p>
                        <p><span style={{marginRight:'10px'}}><FontAwesomeIcon icon={faMarsStroke} /></span>  {strGender}</p>
                        <p> <span style={{marginRight:'10px'}}><FontAwesomeIcon icon={faFlag} /></span>  {strCountry}</p>
                 </div>
                <div className="right-area">
                    
                      {
                      
                         gender === "Male" ?  <img src={Male} alt=""/>:<img src={Female} alt=""/>

    
                       }

                          
                    
                </div>

           </div>

           <div className="description-area">
               <p>{strDescriptionEN}</p>
            
           </div>
           
        </div>
             <div className="social-area">
                  <a target="_blank" href={`https://${strFacebook}`}><img src={facebook} alt=""/></a>
                  <a target="_blank" href={`https://${strTwitter}`}><img src={twitter} alt=""/></a>
                  <a target="_blank" href={`https://${strYoutube}`}><img src={youtube} alt=""/></a>
             </div>     
    </div>
    );
};

export default TeamDetails;