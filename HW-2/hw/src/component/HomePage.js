import React from 'react'
import Button from 'react-bootstrap/Button';

function HomePage() {
  return (

    <div>
        <img className='homeImage' src='https://i.pinimg.com/564x/37/97/8d/37978d1af96962d2256c6c32c39a7c06.jpg'/>
        <h4>Hi..Do you want to get a random picture click on the button please</h4><br/>
        <Button variant="dark"><a style={{color:"white", textDecoration:"none"}} href='./Cards'>BUTTON</a></Button>{' '}<br/><br/>
    </div>
  )
}

export default HomePage