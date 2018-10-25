import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import construction from '../images/construction.png';

const IndexPage = () => (
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
    <img src={construction} alt="construction" />
    <p>I'm working on it!</p>
    <h2>In the meantime:</h2>
    <h3>I make websites and I do comedy</h3>
    <p><a href='mailto:paris.liam@gmail.com'>ask me to make your site</a></p>
    <p><a href='https://twitter.com/liam_paris'>Twitter</a></p>
    <p><a href='https://www.youtube.com/channel/UCe08QHiiy-nKzeceUDVKpCw'>Videos/Standup</a></p>
    <p><a href='https://www.youtube.com/channel/UCKw0pHu2fsuAmFIxXBq3mDg'>Sketch</a></p>
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="7AKXN7MPNTFJG">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

  </div>
);

export default IndexPage;
