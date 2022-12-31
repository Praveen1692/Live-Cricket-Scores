import React from 'react'
import{useState, useEffect} from 'react'

import ScrollToBottom from 'react-scroll-to-bottom';
//import { css } from 'emotion';
import { css } from '@emotion/css'


const Card = () => {
  const[user,setUser]=useState([]);
  const ROOT_CSS = css({
    height: 700,
    width: "100%"
  });

  const fetchData=()=>{
    fetch('https://api.cricapi.com/v1/currentMatches?apikey=2bc66ce5-6971-4289-ade8-dee6a295eb2c&offset=0')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        let gagan=data.data;
        console.log(gagan);
        setUser(gagan);
    })
}
useEffect(()=>{
    fetchData();
},[]);

  return (
    <ScrollToBottom className={ROOT_CSS}>

   
    

    <div className='clearfix'>
        <div className='row'>
            {user.map(data =>(
                <div className='col-md-4 animated fadeIn' key={data.id}>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='avatar'>
                                <img 
                                src={data.teamInfo.img} 
                                className="card-img-top"
                                alt="image"
                                />
                            </div>
                               <h5 className='card-title'> 
                                {data.name}
                            </h5> 
                            <p className='card-text' style={{color:"red"}}>Match-Type-: 
                                {data.matchType}
                                <br />
                                <span className='phone' style={{color:"green"}}>Match-Status-: {data.status}</span>
                                <br />

                                <span className='phone'>Venue   -: {data.venue}</span>


                            </p>
                           
                        </div>
                        </div>
                        </div>
            ))}
        </div>

        
       
        
        
        
    </div>
    </ScrollToBottom>

    




   






  )
}

export default Card;