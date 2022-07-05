import React , {useEffect , useState }  from "react";


function About() {

  let [name , setName] = useState("welcome to my page")
  const changeName =() =>{
    setName("saad")
  }

  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');
    setTimeout(() => {
      setMessage("I hope you like my page.");
    }, 5000)
  })  
  
  return (
    <div>
     <img className='homeImage' src="https://i.pinimg.com/564x/8f/43/d2/8f43d21157865160b63e6959c8290583.jpg"/>
     <h2 onClick={changeName}>{name}</h2> 
      <h1>{message}</h1>
      
    </div>
  );
}

export default About;
