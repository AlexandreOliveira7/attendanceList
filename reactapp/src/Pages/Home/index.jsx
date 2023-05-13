import './index.css';
import React, { useState } from 'react';

import { Card } from '../../componentes/Card/';

export function Home() {
 const [studentName, setStudentName] = useState();
 const [students, setStudents] = useState([]);

 function handleAddsStudents() {
  const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-br", {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  };

    setStudents(prevState => [...prevState, newStudent])

 }


  return (
    <div className='Container'>
      <h1>Lista de presença</h1>
      <input 
        type="text"
        placeholder="Digite seu nome..."
        onChange={e =>  setStudentName(e.target.value)}
        />
      <button type="button" onClick={handleAddsStudents}>
        Adicionar
        </button>
  
  {
      students.map(student =>  <Card name={student.name} time={student.time} /> )
     
    
  }
    </div>
  )
}


