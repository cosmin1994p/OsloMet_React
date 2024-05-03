import { useState } from 'react';


//GET call 
function getCall(){
    console.log("get students")
    fetch('http://localhost:8080/getStudents')
   .then(response => response.json())
   .then(data => { console.log(data);});
  }
    

//POST call
const addStudents = async (title, body) => {
    let response = await fetch('http://localhost:8080/insertStudentInDB2REACT', {
        method: 'POST',
        body: JSON.stringify({
            name: "Ana - REACT client",
            age: 23,
            university: "Harvard - REACT client"
         }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    }; 
export function RestCalls() {
    return (
      <div className="rest">
        <p>Making REST calls</p>
        <button onClick={ getCall }>Call API - Get students</button>
        <button onClick={ addStudents }> Insert student </button>
        <br></br>
      </div>
    );
  }