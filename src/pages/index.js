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
      <h1>
        Upcoming Shows:
      </h1>
      <a href='https://philadelphia.heliumcomedy.com/shows/103612'><p className='showTitle'>Philly's Phunniest round one</p>
      <p className='showDetails'>7/5 7:30pm at Helium Comedy Club</p></a>
      <a href='https://goodgoodcomedy.com/setup'><p className='showTitle'>Setup</p>
      <p className='showDetails'>7/6 7pm at GoodGood</p></a>
      <a><p className='showTitle'>Everybody Love Me</p>
      <p className='showDetails'>7/14 6:30pm at Mad Tropical (NYC)</p></a>
      <a><p className='showTitle'>shots for shots</p>
      <p className='showDetails'>7/16 9pm at <a>GoodGood</a></p></a>
      <a href='https://goodgoodcomedy.com/makeuporbreakup072719/'><p className='showTitle'>Makeup or Breakup</p>
      <p className='showDetails'>7/27 8:30pm at GoodGood</p></a>
      <a href='https://www.facebook.com/events/2970234833296773'><p className='reoccuringShow'> hosting U UP? open mic @ Fergies every sunday 9pm</p>   </a>  
  </div>
  </div>
);

export default IndexPage;
