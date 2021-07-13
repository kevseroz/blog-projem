import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../styles/error.css'
import '../styles/card.css'


 function ErrorScreen() {
     const history = useHistory();

     function handleClick() {
         history.goBack();
     }
    return (
        <div className='error'>
             <h1 className="sentence-margin"> Bir şeyler yanlış gitti.</h1>
             <Button
             className="button type1"
             onClick={handleClick}
             >Geri git</Button>
       </div>
    )
}

export default ErrorScreen


