import React, { useEffect , useState} from "react";
import CardData from "./CardData";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  let [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div class="clearfix">
       
      <Card style={{ width: '30rem' }} className='mx-auto'>
      <Card.Img variant="top" src={memeImage} />
      <Card.Body>
        <Button variant="dark" onClick={myRandomEmg}>Get a new image</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;
