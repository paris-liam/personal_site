import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import construction from '../images/construction.png';

const IndexPage = () => (
  <div className='mainGrid'>
  <div style={{
    display: 'grid',
    gridTemplateRows: 'auto auto auto',
    fontFamily: 'sans-serif',
    marginLeft:'2vw',
  }}
  >
    <h1>
      WAIT
    </h1>
    <img src={construction} alt="construction"></img>
    <p>I'm working on it!</p>
    <h2>In the meantime:</h2>
    <h3>I make websites and I do comedy</h3>
    <p><a href='mailto:paris.liam@gmail.com'>ask me to make your site</a></p>
    <p><a href='https://twitter.com/liam_paris'>Twitter</a></p>
    <p><a href='https://www.youtube.com/channel/UCe08QHiiy-nKzeceUDVKpCw'>Videos/Standup</a></p>
    <p><a href='https://www.youtube.com/channel/UCKw0pHu2fsuAmFIxXBq3mDg'>Sketch</a></p>
  </div>
  <div className='showsColumn'>  
  <ul>
   <li><h2>Yes Indeed @ Good Good Comedy 2/8 8:30 & 10 (hosting) </h2></li>
    <li><h2>Last minute comedy showcase @ Silk City 2/11 9 </h2></li>
     <li><h2> Outta Sight @ Fergies Pub 2/12 9 </h2></li>
       <li><h2> Do you wanna talk about it? @ Grey Door theater project (Brooklyn) 2/16 7:30</h2></li>

  </ul>
  </div>
  </div>
);

export default IndexPage;
