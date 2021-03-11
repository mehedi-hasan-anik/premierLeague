import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [teams,setTeams]=useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
        .then(res=> res.json())
        .then(data => setTeams(data.teams))
    },[])

    return (
      
           <div className="main-area">
                <Header></Header>
              <div class="container home">
                 
                 <div class="row">
                      {
                          teams.map(team => <div class="col-lg-3 col-md-6 col-sm-12"><Team team={team}></Team></div>)
                      }
                  </div>

              </div>

           </div>
       
    );
};

export default Home;