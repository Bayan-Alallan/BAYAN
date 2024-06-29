import { useState } from "react";
const About=()=>{
    
    
    let [firstname, setFirstname]=useState('Bayan');
    let[secondname, setsecondname]=useState('Alallan');
    let[age, setAge]=useState(21)
    const changName= ()=>{
        setFirstname('Aila');
        setsecondname('Mohammed');
        setAge(22);
    }
    return( 
        <div className="container">
            <h1>{firstname}</h1>
            <h1>{secondname}</h1> 
            <h1>{age}</h1>
            <br/>
        <h1>About Page</h1> <br/>
        <button type="button" onClick={changName}  className="btn btn-info">Info</button>

        </div>
   
    );
}
export default About;